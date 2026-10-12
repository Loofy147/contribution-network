import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const found = [];

  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const absolute = path.join(directory, entry.name);

    if (entry.isDirectory()) found.push(...(await walk(absolute)));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) found.push(absolute);
  }

  return found;
}

function markdownDestinations(source) {
  // Ignore fenced examples so literal Markdown shown in code samples is not treated as a link.
  const withoutFences = source.replace(/^ {0,3}(`{3,}|~{3,})[\s\S]*?^ {0,3}\1[^\S\r\n]*$/gm, '');
  const destinations = [];
  const pattern = /(?<!!)\[[^\]]+\]\(([^)]+)\)/g;

  for (const match of withoutFences.matchAll(pattern)) {
    let destination = match[1].trim();

    if (destination.startsWith('<')) {
      const close = destination.indexOf('>');
      if (close >= 0) destination = destination.slice(1, close);
    } else {
      destination = destination.split(/\s+/, 1)[0];
    }

    if (!destination || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(destination)) continue;
    destinations.push(destination);
  }

  return destinations;
}

test('README indexes every canonical strategy document', async () => {
  const readme = await readFile(path.join(root, 'README.md'), 'utf8');

  for (let number = 1; number <= 13; number += 1) {
    const filename = `${String(number).padStart(2, '0')}-`;
    const docs = path.join(root, 'docs');
    const matches = (await readdir(docs)).filter((name) => name.startsWith(filename) && name.endsWith('.md'));

    assert.equal(matches.length, 1, `expected exactly one canonical document beginning with ${filename}`);
    assert.ok(readme.includes(`docs/${matches[0]}`), `README must index docs/${matches[0]}`);
    await stat(path.join(docs, matches[0]));
  }
});

test('local Markdown links resolve to files or directories in this repository', async () => {
  const markdownFiles = await walk(root);
  const broken = [];
  let checked = 0;

  for (const sourceFile of markdownFiles) {
    const source = await readFile(sourceFile, 'utf8');

    for (const destination of markdownDestinations(source)) {
      const pathname = destination.split(/[?#]/, 1)[0];
      if (!pathname) continue;

      let decoded;
      try {
        decoded = decodeURIComponent(pathname);
      } catch {
        broken.push(`${path.relative(root, sourceFile)}: malformed URI destination "${destination}"`);
        continue;
      }

      const target = path.resolve(path.dirname(sourceFile), decoded);
      if (target !== root && !target.startsWith(root + path.sep)) {
        broken.push(`${path.relative(root, sourceFile)}: local link escapes repository "${destination}"`);
        continue;
      }

      checked += 1;
      try {
        const info = await stat(target);
        if (info.isDirectory()) {
          const candidates = ['README.md', 'index.md'];
          let foundIndex = false;
          for (const candidate of candidates) {
            try {
              await stat(path.join(target, candidate));
              foundIndex = true;
              break;
            } catch {}
          }
          if (!foundIndex) broken.push(`${path.relative(root, sourceFile)}: directory link has no README.md or index.md "${destination}"`);
        }
      } catch {
        broken.push(`${path.relative(root, sourceFile)}: missing local target "${destination}"`);
      }
    }
  }

  assert.ok(checked > 0, 'expected the documentation set to contain local links');
  assert.deepEqual(broken, [], broken.join('\n'));
});

test('current working boundary and deployment claims remain explicit', async () => {
  const readme = await readFile(path.join(root, 'README.md'), 'utf8');
  const charter = await readFile(path.join(root, 'docs/10-first-consumer-project-charter.md'), 'utf8');
  const ciSpec = await readFile(path.join(root, 'docs/13-ci-cd-and-quality-gates.md'), 'utf8');

  assert.match(readme, /contribution-cloud\/Contributions-centre/);
  assert.match(charter, /readiness is evidence-based/i);
  assert.match(readme, /do not initialize it/i);
  assert.match(ciSpec, /no GitHub Actions workflow should claim to deploy the application/i);
  assert.match(ciSpec, /reproducible build/i);
});


test('documentation CI is least-privilege and pins every action immutably', async () => {
  const workflow = await readFile(path.join(root, '.github/workflows/docs-quality.yml'), 'utf8');

  assert.match(workflow, /^permissions:\n  contents: read$/m);
  assert.match(workflow, /^concurrency:/m);
  assert.match(workflow, /cancel-in-progress: true/);
  assert.doesNotMatch(workflow, /\\\\\$\\{\\{/);
  assert.match(workflow, /timeout-minutes: 10/);
  assert.match(workflow, /persist-credentials: false/);
  assert.match(workflow, /^  pull_request:/m);
  assert.match(workflow, /^  workflow_dispatch:/m);
  assert.doesNotMatch(workflow, /pull_request_target/);
  assert.doesNotMatch(workflow, /secrets\./);

  const actionRefs = [...workflow.matchAll(/^\s*uses:\s*([^\s]+)/gm)]
    .map((match) => match[1]);
  assert.ok(actionRefs.length >= 2, 'expected checkout and Node setup actions');
  for (const reference of actionRefs) {
    assert.match(
      reference,
      /@[a-f0-9]{40}$/i,
      `workflow action must be pinned to a full commit SHA: ${reference}`,
    );
  }
});


test('secret scanning installs a pinned CLI without account lookup or report uploads', async () => {
  const workflow = await readFile(path.join(root, '.github/workflows/secrets-scan.yml'), 'utf8');

  assert.match(workflow, /^permissions:\n  contents: read$/m);
  assert.match(workflow, /fetch-depth: 0/);
  assert.match(workflow, /go-version: "1\.25\.4"/);
  assert.match(workflow, /go install github\.com\/zricethezav\/gitleaks\/v8@v8\.30\.0/);
  assert.match(workflow, /gitleaks detect --source \. --redact/);
  assert.doesNotMatch(workflow, /pull_request_target/);
  assert.doesNotMatch(workflow, /pull-requests:\s*write/);
  assert.doesNotMatch(workflow, /secrets\./);
  assert.doesNotMatch(workflow, /GITLEAKS_ENABLE_UPLOAD_ARTIFACT/);

  const actionRefs = [...workflow.matchAll(/^\s*uses:\s*([^\s]+)/gm)]
    .map((match) => match[1]);
  assert.ok(actionRefs.length >= 2, 'expected checkout and Go setup actions');
  for (const reference of actionRefs) {
    assert.match(
      reference,
      /@[a-f0-9]{40}$/i,
      `workflow action must be pinned to a full commit SHA: ${reference}`,
    );
  }
});
