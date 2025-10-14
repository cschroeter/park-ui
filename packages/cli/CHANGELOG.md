## [Unreleased]

## [1.0.0-next.5] - 2025-10-14

## Added

- RC versions for testing

## [1.0.0-next.4] - 2025-10-09

## Fixed

- Resolved various issues.

## [1.0.0-next.3] - 2025-08-20

- Resolved various issues.

## [1.0.0-next.2] - 2025-08-11

## Fixed

- Resolved various issues.

## [1.0.0-next.1] - 2025-08-11

## Fixed

- Resolved various issues.

## [1.0.0-next.0] - 2025-08-10

## Changed

- New CLI for Park UI Next

## [0.9.0] - 2024-07-31

### Changed

- No longer requires a `tsconfig.json` to install components using the CLI. This benefits users with setups like `nx` workspaces that lack a `tsconfig.json` file.

The CLI now prompts:

```text
➜ Which JS framework do you use? [React / Solid / Vue]
➜ Where would you like to store your components? [./src/components/ui]
```

Adding a component will create the following folder structure:

```text
➜ /src/components/ui/
  |-- styled/
  |   |-- utils/
  |   |   `-- create-style-context.ts
  |   `-- button.tsx
  `-- button.tsx
```

## [0.8.0] - 2024-07-29

### Changed

- **Removed support for barrel files**: `index.ts` files will no longer be created by default. Import components directly from their respective folders.

```jsx
// Before
import { Button } from '~/components/ui'

// After
import { Button } from '~/components/ui/button'
```

### Fixed

- Fixed an issue where the incorrect version was shown in the banner.

## [0.7.2] - 2024-07-14

### Changed

- Removed the requirement for `baseUrl` schema validation in `tsconfig.json`, as it is unnecessary for the CLI functionality.

## [0.7.1] - 2024-07-13

### Fixed

- Resolved an issue where `libDir` was not correctly resolved based on the user's configuration in `park-ui.json`.

## [0.7.0] - 2024-07-12

### Added

- Support for custom import aliases.
- Automated management of index exports, eliminating the need to manually add components to the index file.
- Support for component primitives and compositions.

### Removed

- Removed the `init` command. A configuration file will be created automatically if none is found.

## [0.6.0] - 2024-04-03

### Added

- Added support for multiple configuration files in `tsconfig.json`

## [0.5.0] - 2024-01-01

### Added

- Added support for Chakra UI components

### Fixed

- Resolved an issue with utils paths not being resolved correctly

## [0.4.3] - 2023-12-15

### Fixed

- Fixed an issue with resolving `tsconfig.json` on windows

## [0.4.2] - 2023-12-14

### Fixed

- Fixed an issue with path separators on windows

## [0.4.1] - 2023-12-06

### Fixed

- Fixed an issue that adding a component did not work.

## [0.4.0] - 2023-12-06

### Added

- Improved prompts for adding components

## [0.3.1] - 2023-12-06

### Fixed

- Only add `use client` when the component has multiple parts

## [0.3.0] - 2023-12-04

### Added

- Resolved ts paths via tsconfig.json

## [0.2.3] - 2023-11-28

### Fixed

- Fixed an issue not showing the version

## [0.2.2] - 2023-11-28

### Fixed

- Fixed that it used the version of the project instead of the cli

## [0.2.1] - 2023-11-28

- fixed an issue not finding fetch in global installation

## [0.2.0] - 2023-11-28

### Added

- Added support for server components
- Added upgrade note when new version is available
- Added support to add all components at once
- Added support to add component from selection menu

### Fixed

- Fixed an issue while initializing a new project

## [0.1.3] - 2023-11-27

- fixed bug when adding a new component

## [0.1.2] - 2023-11-25

- added registry to download components and helpers

## [0.1.1] - 2023-11-22

- added hashbang to use node to run the cli

## [0.1.0] - 2023-11-22

- added support to initialize a new project
- added support to add new components

## [0.0.1] - 2023-11-22

- initially released
