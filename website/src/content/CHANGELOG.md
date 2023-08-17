## [Unreleased]

## [0.8.0] - 2023-08-17

### Added

- Introduced a new `4.5` and `14` token for enhanced `spacing` and `sizes`.
- Added `Article` component to effortlessly style Markdown or CMS-generated HTML.

### Changed

- Replaced `fontSize` with `height` and `width` to set icon sizing in `Button` for a greater compatibility with other icon libraries.

## [0.7.1] - 2023-08-16

### Changed

- Provided a dedicated recipe for the `RangeSlider` component instead of using the `Slider` recipe.

## [0.7.0] - 2023-08-15

### Added

- `25` hue levels added for all grays palettes.
- Added `none` and `2xs` border radius tokens.
- Added `{radii.l1}`, `{radii.l2}` and `{radii.l3}` to the semantic tokens border radii.

## [0.6.0] - 2023-08-13

### Added

- Added `Code` component to display inline code snippets.
- Input elements like `Input`, `Textarea`, `NumberInput` etc. use `accent` color when focused.

### Changed

- Renamed box shadow token `outline` to `accent`.
- Renamed `tablist` part to `list` in `Tabs` recipe.
- Changed the color of the column header in `DatePicker` to `fg.subtle`.

### Removed

- The `icon` prop has been removed from `IconButton` as it would affect compatibility with the Ark UI `asChild` prop. Code snippets have been updated accordingly.

## 0.5.0 - 2023-08-10

### Added

- Added `DatePicker` component.

## 0.4.0 - 2023-08-10

### Added

- Added `label` styles for `Select` component.

### Changed

- All relevant recipes now use the new [defineSlotRecipe](https://panda-css.com/docs/concepts/slot-recipes) in Panda CSS to help organize the styles.

## 0.3.1 - 2023-08-09

### Fixed

- Resolved an issue with bundling the `@park-ui/presets` package.

## 0.3.0 - 2023-08-09

### Added

- Added `accent.default`, `accent.emphasized` and `accent.fg` to the list of semantic tokens. Interative elements like buttons and links will use these colors for their background and foreground colors.

### Changed

- All recipes now use semantic tokens for their colors.
- Changed `outline` from `neutral.500` to `neutral.700` in light mode and `neutral.500` to `neutral.300` in dark mode to improve contrast.

### Removed

- Removed `bg.accent` and `fg.accent` from the list of semantic tokens.

## 0.2.0 - 2023-08-06

### Added

- Added `Drawer` component.
- Added new `easings` options: `easings.default`, `easings.emphasized-in`, `easings.emphasized-out`.

### Changed

- Changed animation for `Modal` components.
- Changed `transitionTimingFunction` for all relevant components to the new `easings.default`.
- Tweaked `bg.canvas` to be slightly darker in `light` mode.

## 0.1.0 - 2023-08-02

### Added

- Initial Release of [Park UI](https://park-ui.com)
