## [Unreleased]

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
