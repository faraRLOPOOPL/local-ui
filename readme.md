# @realist-ui/uikit

React component library built on top of Ant Design with Tailwind CSS and a custom design token system.

## 📦 Packages

This monorepo contains:

- **[@realist-ui/tokens](./packages/tokens)** - Design system tokens (colors, typography, spacing)
- **[@realist-ui/button](./packages/button)** - Button component with multiple variants
- **[@realist-ui/input](./packages/input)** - Input component
- **[@realist-ui/select](./packages/select)** - Select/dropdown component
- **[@realist-ui/modal](./packages/modal)** - Modal dialog component
- **[@realist-ui/switchtheme](./packages/switchtheme)** - Theme switching component

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start Storybook for development
pnpm dev
```

## 📚 Development

### Project Structure

```
local-ui/
├── packages/
│   ├── tokens/              # Design tokens (CSS variables)
│   │   ├── src/tokens.css
│   │   └── tailwind.preset.cjs  # ⭐ Shared Tailwind config
│   ├── button/              # Button component
│   ├── input/               # Input component
│   ├── modal/               # Modal component
│   ├── select/              # Select component
│   └── switchtheme/         # Theme switch component
├── .storybook/              # Storybook configuration
├── tailwind.config.cjs      # Root Tailwind config (for Storybook)
└── CLAUDE.md                # Project guidelines for AI assistants
```

### Key Commands

```bash
# Development
pnpm dev                    # Start Storybook dev server (port 6006)

# Building
pnpm build                  # Build all packages
pnpm --filter @realist-ui/tokens build      # Build specific package
pnpm --filter @realist-ui/button build

# Code Quality
pnpm lint                   # Lint codebase
pnpm format                 # Format files
pnpm check                  # Check lint + format issues
pnpm fix                    # Auto-fix lint + format issues
```

### Building Individual Packages

```bash
# Always build tokens first (other packages depend on it)
pnpm --filter @realist-ui/tokens build

# Then build component packages
pnpm --filter @realist-ui/button build
pnpm --filter @realist-ui/input build
pnpm --filter @realist-ui/modal build
pnpm --filter @realist-ui/select build
pnpm --filter @realist-ui/switchtheme build
```

## 📤 Creating Distribution Packages

### Quick Method (Recommended)

Use the automated script to build and pack all packages:

```bash
# Build and pack all packages in one command
pnpm pack:all
```

This will:
1. Build all packages (`pnpm build`)
2. Create tar archives for all packages
3. Display the list of created packages with sizes
4. Show the install command for your project

### Manual Method

If you prefer to pack packages individually:

```bash
# 1. Build all packages
pnpm build

# 2. Navigate to each package and create tar
cd packages/tokens && pnpm pack
cd ../button && pnpm pack
cd ../input && pnpm pack
cd ../modal && pnpm pack
cd ../select && pnpm pack
cd ../switchtheme && pnpm pack
```

This creates `.tgz` files:
- `realist-ui-tokens-0.0.1.tgz`
- `realist-ui-button-0.0.16.tgz`
- etc.

### Install in your project

```bash
# In your target project
npm install \
  react react-dom antd @ant-design/icons \
  /path/to/local-ui/packages/tokens/realist-ui-tokens-0.0.1.tgz \
  /path/to/local-ui/packages/button/realist-ui-button-0.0.16.tgz
```

## 🎯 Using Components in Your Project

### Basic Setup

```tsx
import { Button } from '@realist-ui/button';
import '@realist-ui/tokens/style.css'; // Required: import design tokens

function App() {
  return (
    <div>
      <Button rlType="primary">Click me</Button>
    </div>
  );
}
```

### Complete Example

```tsx
import { useState } from 'react';
import { Button } from '@realist-ui/button';
import { Input } from '@realist-ui/input';
import { Modal } from '@realist-ui/modal';
import '@realist-ui/tokens/style.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button rlType="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        title="Example Modal"
      >
        <Input placeholder="Enter text..." />
      </Modal>
    </div>
  );
}
```

## 📊 Bundle Size

After optimization, the components are extremely lightweight:

| Component | Size | Description |
|-----------|------|-------------|
| tokens | 2.8 KB | CSS variables (colors, typography) |
| button | 9.2 KB | All 5 variants, 4 sizes, 43 CSS classes |
| input | 7.4 KB | All input variants |
| modal | 3.7 KB | Modal dialog |
| switchtheme | 2.2 KB | Theme switcher |
| select | 25.8 KB | Select component |

**Total for all components: ~51 KB** (before: 247 KB - 79% reduction!)

### Optimization Details

- ✅ No safelist - only used CSS classes are included
- ✅ No default Tailwind colors - only design system tokens
- ✅ Tree-shaking works for JS (CSS is bundled with components)
- ✅ Shared Tailwind preset - single source of truth for tokens

## 🎨 Design System

### Tokens Architecture

All design tokens are defined in `@realist-ui/tokens` and used via CSS variables:

```css
/* Colors */
--rl-color-indigo-60: rgb(30, 95, 184);
--rl-color-neutral-10: rgb(230, 232, 234);
--rl-color-success-60: rgb(90, 228, 16);

/* Typography */
--rl-font-size-button1: 16px;
--rl-line-button1: 24px;
```

### Tailwind Configuration

All packages use a shared Tailwind preset from `@realist-ui/tokens/tailwind`:

```js
// packages/button/tailwind.config.cjs
module.exports = {
  presets: [require('@realist-ui/tokens/tailwind')],
  content: ['./src/**/*.{ts,tsx}'],
};
```

This ensures:
- Single source of truth for all tokens
- No duplication across packages
- Easy updates - change once, applies everywhere

### Color Palette

- **neutral**: White to dark gray (00, 05, 10, ..., 90)
- **indigo**: Brand color (10, 20, ..., 80)
- **success**: Green tones (10, 20, ..., 80)
- **error**: Red tones (10, 20, ..., 80)
- **warning**: Orange tones (10, 20, ..., 80)
- **attention**: Yellow tones (10, 20, ..., 80)

## 🛠️ Tech Stack

- **Build Tool**: Vite 5
- **UI Framework**: React 18/19
- **UI Library**: Ant Design 5
- **Styling**: Tailwind CSS 3.4 with custom prefix (`rl-`)
- **Monorepo**: pnpm workspaces
- **Development**: Storybook 8
- **Code Quality**: Biome for linting and formatting
- **TypeScript**: Full type support

## 🧪 Testing in a New Project

Create a test project to verify the components:

```bash
# Create a new Vite project
npm create vite@latest my-test-app -- --template react-ts
cd my-test-app

# Install dependencies
npm install react react-dom antd @ant-design/icons

# Install your built packages
npm install \
  /path/to/local-ui/packages/tokens/realist-ui-tokens-0.0.1.tgz \
  /path/to/local-ui/packages/button/realist-ui-button-0.0.16.tgz

# Build and check bundle size
npm run build
```

Expected production bundle:
- CSS: ~5.5 KB (tokens + base styles)
- JS: ~330 KB (React 80KB + ReactDOM 130KB + AntD 100KB + components 20KB)

## 📝 Code Style

- **Formatter**: 2-space indentation, 100 char line width
- **Linter**: Biome with recommended rules
- **Imports**: ES modules
- **Naming**: camelCase for variables, PascalCase for components

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm check` to verify code quality
4. Run `pnpm build` to ensure everything builds
5. Test in Storybook: `pnpm dev`
6. Create a pull request

## 📄 License

MIT

## 🔗 Links

- [Storybook](http://localhost:6006) (when running `pnpm dev`)
- [Tailwind CSS](https://tailwindcss.com)
- [Ant Design](https://ant.design)
- [Vite](https://vitejs.dev)
