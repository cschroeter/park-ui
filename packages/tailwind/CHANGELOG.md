## [Unreleased]

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
