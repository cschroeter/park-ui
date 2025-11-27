# Park UI CLI

A command-line tool for integrating Park UI components into your project.

## Usage

### Initialize Park UI

Set up Park UI in your project with an interactive prompt:

```bash
npx park-ui init
```

This command will:
- Guide you through framework selection
- Let you choose accent and gray color themes
- Install the necessary theme configuration
- Set up the initial component structure

### Add Components

Add specific components to your project:

```bash
npx park-ui add button card dialog
```

Add all available components:

```bash
npx park-ui add --all
```

You can also add more Radix colors this way

```bash
npx park-ui add iris jade crimson
```

### Debug Configuration

View your current Park UI configuration:

```bash
npx park-ui debug
```

## Options

```bash
park-ui -v, --version    # Display version number
park-ui -h, --help       # Display help information
```

## Support

Report issues at: https://github.com/cschroeter/park-ui/issues
