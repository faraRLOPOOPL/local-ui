#!/usr/bin/env node

/**
 * Script to build and pack all @realist-ui packages
 * Works on Windows, macOS, and Linux
 */

import { execSync } from 'node:child_process';
import { existsSync, statSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

const log = {
  info: (msg) => console.log(`${colors.blue}${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}${msg}${colors.reset}`),
  header: (msg) => console.log(`${colors.cyan}${colors.bright}${msg}${colors.reset}`),
};

const packages = ['tokens', 'button', 'input', 'modal', 'select', 'switchtheme', 'dropdown'];

function exec(command, options = {}) {
  try {
    return execSync(command, { stdio: 'inherit', ...options });
  } catch (error) {
    log.error(`✗ Command failed: ${command}`);
    process.exit(1);
  }
}

function getFileSize(filePath) {
  const stats = statSync(filePath);
  const sizeInKB = (stats.size / 1024).toFixed(2);
  return `${sizeInKB} KB`;
}

function findTarball(packageName) {
  const packageDir = join(process.cwd(), 'packages', packageName);
  const files = readdirSync(packageDir);
  const tarball = files.find(f => f.endsWith('.tgz'));
  return tarball ? join(packageDir, tarball) : null;
}

console.log('');
log.header('======================================');
log.header('  Building and Packing All Packages');
log.header('======================================');
console.log('');

// Step 1: Build all packages
log.info('[1/3] Building all packages...');
exec('pnpm build');
log.success('✓ Build completed successfully');
console.log('');

// Step 2: Pack all packages
log.info('[2/3] Packing all packages...');
console.log('');

for (const pkg of packages) {
  log.warning(`Packing @realist-ui/${pkg}...`);
  process.chdir(join('packages', pkg));
  exec('pnpm pack --silent', { stdio: 'ignore' });
  process.chdir('../..');
  log.success(`✓ ${pkg} packed`);
}

console.log('');

// Step 3: List created tar files
log.info('[3/3] Created packages:');
console.log('');

const tarballPaths = [];
for (const pkg of packages) {
  const tarballPath = findTarball(pkg);
  if (tarballPath && existsSync(tarballPath)) {
    const size = getFileSize(tarballPath);
    const name = tarballPath.split(/[\\/]/).pop();
    console.log(`  • ${name} (${size})`);
    tarballPaths.push(tarballPath);
  }
}

console.log('');
log.success('======================================');
log.success('  ✓ All packages built and packed!');
log.success('======================================');
console.log('');

// Generate install command
console.log('To install in your project:');
console.log('');
console.log('npm install \\');
console.log('  react react-dom antd @ant-design/icons \\');

for (const tarballPath of tarballPaths) {
  // Convert to forward slashes for cross-platform compatibility
  const normalizedPath = tarballPath.replace(/\\/g, '/');
  console.log(`  ${normalizedPath} \\`);
}

console.log('');
