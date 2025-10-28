pnpm --filter @realist-ui/tokens build
pnpm dev

pnpm --filter @realist-ui/button build
pnpm --filter @realist-ui/input build
pnpm --filter @realist-ui/select build

pnpm exec tailwindcss -c .\tailwind.config.cjs -o .\packages\button\src\__tw.css --minify

pnpm -C packages/tokens install
pnpm -C packages/tokens build

pnpm -C packages/button build
