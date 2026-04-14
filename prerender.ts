/**
 * Post-build prerender script.
 * Renders the React app to an HTML string and injects it into dist/index.html
 * so search engine crawlers receive fully-rendered content without executing JS.
 *
 * Run automatically via the "postbuild" npm script (tsx prerender.ts).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ---------------------------------------------------------------------------
// Minimal browser-API stubs so packages that reference window/document at
// module-load time don't throw in Node.
// ---------------------------------------------------------------------------
const noop = () => ({});
if (typeof globalThis.window === 'undefined') {
  (globalThis as any).window = {
    matchMedia: () => ({ matches: false, addEventListener: noop, removeEventListener: noop }),
    addEventListener: noop,
    removeEventListener: noop,
    location: { href: '/', pathname: '/' },
  };
}
if (typeof globalThis.document === 'undefined') {
  (globalThis as any).document = {
    createElement: () => ({ style: {} }),
    getElementById: () => null,
    querySelector: () => null,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function prerender() {
  // Dynamic import AFTER stubs are in place
  const { default: App } = await import('./src/App.tsx');

  const appHtml = renderToString(createElement(App as React.ComponentType));

  const distIndex = path.join(__dirname, 'dist', 'index.html');

  if (!fs.existsSync(distIndex)) {
    console.error('✗ dist/index.html not found — run "npm run build" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(distIndex, 'utf-8');

  const rendered = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  fs.writeFileSync(distIndex, rendered);
  console.log('✓ Prerendered dist/index.html — crawlers will receive full HTML.');
}

prerender().catch((err) => {
  console.error('✗ Prerender failed:', err);
  process.exit(1);
});
