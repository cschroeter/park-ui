# @park-ui/cli

## Overview

The `@park-ui/cli` package is a command-line interface (CLI) tool for managing Park UI projects. It provides commands to initialize a new Park UI project and add components to existing projects.

## Installation

To use `@park-ui/cli`, you can install it globally using npm:

```bash
npm install @park-ui/cli -g
```

## Usage

Once installed, you can use the following command to see available options and commands:

```bash
park-ui --help
```

The output will display the available commands and options:

```plaintext
park-ui <command>

Commands:
  park-ui init  Initialize a new Park UI project
  park-ui add   Add a new component

Options:
  --help     Show help                                                 [boolean]
  --init     Initialize a new Park UI project
  --version  Show version number                                       [boolean]

Examples:
  park-ui init                  Initialize a new Park UI project
  park-ui add button accordion  Add accordion component
  park-ui add --all             Add all available components
```

### Commands

#### 1. `park-ui init`

Use this command to initialize a new Park UI project. It sets up the necessary files and folder structure to get you started with a new project. It also adds the required util files to your project.

```bash
park-ui init
```

#### 2. `park-ui add`

This command allows you to add a new component to your Park UI project. You can specify the component name as an argument.

```bash
park-ui add <component-name>
```

You can also add all available components at once using the `--all` flag.

```bash
park-ui add --all
```

### Options

- `--help`: Displays help information about the CLI.
- `--init`: Shortcut for initializing a new Park UI project.
- `--version`: Displays the version number of the CLI.

## Examples

1. Initialize a new Park UI project:

```bash
park-ui init
```

2. Add a specific component, e.g., an accordion:

```bash
park-ui add accordion
```

3. Add all available components:

```bash
park-ui add --all
```

Feel free to explore and enhance your Park UI projects using this CLI tool! If you have any questions or need assistance, refer to the documentation or reach out to the Park UI community.
