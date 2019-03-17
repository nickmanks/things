
  <p align="center"><img src='./src/favicon.png' height='140' /></p>
  <p align="center">
    <b> things </b>
  </p>

  <p align="center">
  <b>
  :zap: Application todo all the things
  </b>
  </p>

  -------------

  <p align="center">
    <a><img src="https://img.shields.io/badge/release-alpha-yellow.svg?style=flat-square" alt="Build Status"></a>
    <a href="https://github.com/RichardLitt/standard-readme"><img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="contributions welcome"></a>
    <a><img src="https://img.shields.io/badge/frontend-react-purple.svg?style=flat-square"></a>
    <a><img src="https://img.shields.io/badge/state-redux-blue.svg?style=flat-square"></a>
    <a><img src="https://img.shields.io/badge/lint-eslint-pink.svg?style=flat-square"></a>
    <a><img src="https://img.shields.io/badge/ui-storybook-lightgrey.svg?style=flat-square"></a>
  </p>

  <p> &nbsp; </p>

  :book: Read the [Quick Start Guide](https://enter-your-docs-guide-url.com)

  :rocket: [Try it out](http:localhost:8080/todo/)

  :hatched_chick: Current status: **Alpha**

  :tractor: **[Roadmap](https://enter-your-roadmap-url.com)**

  <p> &nbsp; </p>


  ## Table of Contents

-   [Background](#background)
-   [Install](#install)
-   [Usage](#usage)
-   [Build & Package](#build-and-package)
-   [Dev Tools](#dev-tools)
-   [ESLint](#eslint-installation)
-   [Testing](#running-tests)
-   [Integration](#integration)
-   [Contributing](#contributing)
-   [App Configuration](#configuration)
-   [Maintainers](#maintainers)


## Install

Clone the repo and install dependencies:

> *Caveat* - requires node version >= 10, use:
>
> ```bash
> nvm use 10
> ```
>
> Make sure to use the latest version of npm:
> ```bash
> npm i -g npm
> ```
>
>
>**Note:**
> If you upgrade from previous versions of node or npm you may have to
> clear out your `node_modules` and the npm caches:
> ```bash
> rm -rf node_modules
> npm cache clean --force
> ```


```bash
  git clone git@github.com:nickmanks/things.git
  cd things
  npm ci
  npx run
```

## Usage

To start the application in your development environment:

```bash
npx run
```

>This will run both `webpack` and `storybook` servers.
>Application can be viewed on [`localhost:8080/todo/`](http:localhost:8080/todo/).
>Storybook stories can be viewed at [`localhost:8080/stories/`](http:localhost:8080/stories/)

This runs [webpack's dev server](https://webpack.js.org/configuration/dev-server/)
with live reloading enabled. You can find it's configuration in [webpack.config.babel.js](./webpack.config.babel.js).  Package scripts can be found in [scripts](./scripts/index.js).

Note: If you need to start a dev server supporting all production browsers (last 2 versions,not IE < 11)
please run `npx run config --node-env=production`.


## Build and Package

To run a build use:

```bash
  npx run build
```

This will run a production build.

To run a clean build use:

```bash
  npx run clean build
```


## Dev Tools

  * [react-devtools](https://github.com/facebook/react-devtools)
  * [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)


## ESLint Installation

The eslint config can be found in [.eslintrc](./.eslintrc).
If for some odd reason, `eslint` does not work, you can add the `node_modules/.bin` to your path:

```bash
export PATH="$PATH:./node_modules/.bin"
```


## Running tests

Before committing and pushing code you should run the full suite of tests.
The full test command includes linting from `eslint`.
The unit-tests are using [jest](https://facebook.github.io/jest/)
with config from [jest.config.js](./jest.config.js):

```bash
npx run test
```

You will find code coverage results in `build/cov` including a HTML report:
```bash
 open ./build/cov/lcov-report/index.html
```


#### Quickly Run Tests

NOTE: The next two are only for debugging. You must run the full test suite (as
described above) before committing/pushing to origin.

##### All tests (without coverage or linting and using the test cache)

```bash
npx run jest
```

##### Single test

```bash
npx run jest FILE_PATH_TO_MATCH
```

where FILE_PATH_TO_MATCH is the path to match (e.g. - app/reducer)

>NOTE: that if you are running on Windows, you have to specify double slashes for
>the path:
>
>```bash
>npx run jest src\\app\\reducer.test.js
>```

## Integration

PRs must pass Travis.com integration tests before being able to merge to master, which will include a full test suit, lint and code coverage.

## Contributing
Pull requests and commits follow commitizen conventional commit guidelines.
>```bash
> git add -A
> npx git-cz
> git push origin <branch>
> ```


## Configuration

The Todo REST API can be found in [services/todo](./services/todo).

The application uses this serverless development stage lambda functions and
dynamoDB to supply GET, POST and DELETE todo item endpoints.

Endpoints can be found in the [config](./src/config.js) file.


## Maintainers

[@nickmanks](https://github.com/nickmanks)


Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.
