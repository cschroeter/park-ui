## [Unreleased]

### Changed

- Replaced `heading` recipe in favor of `text` recipe. Please update your code snippets accordingly.

## [0.18.0] - 2024-01-31

This release marks an important milestone for Park UI as we have upgraded to the new major version 2.0 of Ark UI. Please
update your dependencies accordingly.

### Added

- Added new `Skeleton` component.
- Added new `enclosed` variant to the `Tabs` component.

### Changed

- Updated all code snippets to match the new Ark UI 2.0.0 API.
- Updated the `TagsInput` recipe to use the new `ItemPreview` part.

### Fixed

- Fixed a problem where the`enclosed` variant of the `Tabs` component was rendered slightly too big
- Resolved an issue with the `Card` component where the content would overflow the card.
- Resolved an issue with `SegmentControl` that the `indicator` was sometimes not rendered correctly.
- Fixed an issue that the initials in `Avatar` were not centered correctly.

## [0.17.0] - 2024-01-19

We are excited to announce that in this release, we have revised several components to feature a closed Component API:

- `Avatar`
- `Checkbox`
- `Number Input`
- `Pagination`
- `Pin Input`
- `Rating Group`
- `Slider`
- `Switch`

For more information on the reasoning behind this change, please refer to the
[GitHub Issue](https://github.com/cschroeter/park-ui/issues/144).

### Added

- Introduced styles for the `Progress` component (Preview).
- Implemented support to render the `RatingGroup` in various colors.
- Added a hover color to the items in `SegmentControl`.
- Launched [Storybooks](https://github.com/cschroeter/park-ui/tree/main/components) for all components across each
  framework.

### Changed

- Enhanced typings for all components, aiming for an improved TypeScript experience.

### Fixed

- Fixed an issue in the `PinInput` component where the input width was incorrect.
- Addressed a bug in the `Select` component where a disabled item incorrectly displayed a hover color.

## [0.16.0] - 2023-12-17

- Bumped to @park-ui/panda-preset 0.26.2

## [0.15.0] - 2023-12-02

### Added

- Added `Kbd` component.
- Added `accent.text` to the list of semantic tokens. This token is used do display text in interactive elements like
  buttons and links.
- Added support to render components with different colors. Pass the `colorPalette` prop to the component to change its
  visual style. See the example below for more details.

```tsx
<Button colorPalette="red">Danger</Button>
```

### Changed

- Resolved an issue with `Table` markup where the `thead` element was not rendered correctly.

### Fixed

- Resolved an issue that caused the `Dialog` to show up in the wrong position when the page was scrolled.

### Removed

- Removed `border.accent` from the list of semantic tokens. Use `accent.default` or `colorPalette.default` instead.

## [0.14.0] - 2023-11-16

- ported latest style updates from park-ui panda

## [0.13.0] - 2023-11-06

- Added Header, Footer and Body to Drawer
- Added sm and lg variants to Slider

## [0.12.2] - 2023-10-24

### Added

- Support the semantic tokens from the panda-recipes also in Tailwind CSS files. Have a look at the documentation for [semantic tokens](https://park-ui.com/docs/tailwind/overview/semantic-tokens) for more information.

## [0.12.1] - 2023-10-21

### Fixed

- Resolved an issue that broke the plugin startup without a parkUI config

## [0.12.0] - 2023-10-20

### Changed

This is one of the biggest releases of Park UI so far. We've introduced a new way to configure presets, which will make
it easier to customize the theme to your needs. We've also replaced the default colors with
[Radix Colors](https://www.radix-ui.com/colors).

The tailwind config respects now to configure the preset colors:

```js
const { parkwindPlugin } = require('./dist')

module.exports = {
  plugins: [parkwindPlugin],
  parkUI: {
    accentColor: 'amber',
    grayColor: 'sand',
    borderRadius: '2xl',
  },
  // ...rest of your config
}
```

## [0.11.3] - 2023-10-20

### Fixed

- Resolved an issue that css files where not published

## [0.11.2] - 2023-10-20

### Fixed

- Resolved an issue that some css layers where omitted

## [0.11.1] - 2023-10-20

- Initial Release
