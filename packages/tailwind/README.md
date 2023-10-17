# Build plugin
```bash
bun build:plugin
```

## Generate components
```bash
cd packages/tailwind && bun run build:stories && bun run build:components && bun run build:styles && git add . && cd ../.. && bun lint-staged
```

## Todos
- add static components to panda.config.js that they are available in built file
- publish plugin to npm
- website: snippet.tsx for Icon is not shown (because it is not a ts file)
- article recipe.ts still needed?