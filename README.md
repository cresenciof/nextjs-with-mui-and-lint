This template includes a basic setup for Nex JS with TypeScript, ESLint, Prettier, MUI and Husky.

Automatic checks are performed on each commit using Husky and lint-staged.

- :white_check_mark: Next JS recommended lint rules
- :white_check_mark: Typescript issues (types, unused vars)
- :white_check_mark: Formatting issues
- :white_check_mark: React hook dependencies
- :white_check_mark: Unused imports
- :white_check_mark: Prefer const

## How to use

Click "Use this template" and create a new repository from this template.

## Usage

### Development

Type:

```bash
yarn dev
```

Then visit http://localhost:3000

### Build

To build like if it was for production run

```bash
yarn build
yarn start
```

Then you can visit http://localhost:3000 and check that everything works as expected.

#### Husky

If pre-commit hooks are not working be sure that you have installed husky: `husky install`.

By default this command should be triggered after yarn/npm deps are installed.
