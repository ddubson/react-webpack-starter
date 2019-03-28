[![Build Status](https://travis-ci.org/ddubson/react-webpack-babel.svg?branch=master)](https://travis-ci.org/ddubson/react-webpack-babel)

# React with Webpack Starter Kit

This project serves to jumpstart anyone who wants to have React up and running in no time with all the Webpack and Babel configurations pre-built. 
Now with Redux!


## Building and Running the project

Here's what you do to get this up and running on your machine:

```
git clone https://github.com/ddubson/react-webpack-starter
cd react-webpack-starter
yarn install
yarn start
```

This project has webpack and babel configured from scratch so you have full control of customizations to add or remove should you choose to.

## Commands available


### Run dev server

Run the project on your local machine with dev configurations

`yarn start`

uses webpack-dev-server to run the React app on your machine.

---

### Building for production

Building the project for production use:

`yarn dist`

uses babel to transpile all the resources in the project into the `dist/` directory.

### Run production build

First, build the bundles with `yarn dist`

Fetch a standalone static server:

```
npm i -g serve
```

Serve the static directory:

```
serve -s dist
```

---

### Executing Tests

This project uses:

```
Enzyme -> React Test Utility Framework (AirBnB)
Jest -> Test Runner and Spec Framework (Facebook)
```

The test files (or `specs`) are stored in `__tests__/` directory. The full test suite can be run by:

`yarn test`

### Running syntax linter - ESLint

To verify syntax, run:

`yarn lint`

This command checks the `src` and `__tests__` directories.

---
