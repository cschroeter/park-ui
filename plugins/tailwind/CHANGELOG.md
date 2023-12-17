## [Unreleased]

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
