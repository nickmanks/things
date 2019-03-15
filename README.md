
  <p align="center"><img src='./src/favicon.png' height='140' /></p>
  <p align="center">
    <b> todo-awesome </b>
  </p>

  <p align="center">
  <b>
  :white_check_mark: An awesome todo application
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

  :rocket: [Try it out](https://enter-your-site-url.com)

  :hatched_chick: Current status: **Alpha**

  :tractor: **[Roadmap](https://enter-your-roadmap-url.com)**

  <p> &nbsp; </p>


  ## Table of Contents

-   [Security](#security)
-   [Background](#background)
-   [Install](#install)
-   [Usage](#usage)
-   [Build & Package](#build-and-package)
-   [Dev Tools](#dev-tools)
-   [ESLint](#eslint-installation)
-   [Testing](#running-tests)
-   [Contributing](#contributing)
-   [Documentation](#documentation)
-   [App Configuration](#configuration)
-   [Maintainers](#maintainers)
-   [Under The Hood](#under-the-hood)
-   [Disclaimer](#disclaimer)
-   [License](#license)


## Security

Unauthorised access to this repository, any of its contents is prohibited.
Permission must be explicitly given from a maintainer.

Do not copy or share this repository, its url, or any of its downloadable
content unless specified by the owner/org/company policy.

## Install

Clone the repo and install dependencies:

> *Caveat* - requires node version >= 10, use:
>
> ```bash
> nvm use 10
> ```
>
> Make sure to use the latest version of npm and applify:
> ```bash
> npm i -g npm
> npm i -g @skan-io/applify
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
  git clone git@github.com:nickmanks/todo-awesome.git
  cd todo-awesome
  npm ci
  npx run
```

## Usage

To start the application in your development environment:

```bash
npx run
```

>This will run both `webpack` and `storybook` servers.
>Application can be viewed on `localhost:8080`
>Storybook stories can be viewed at `localhost:8000`

This runs [webpack's dev server](https://webpack.js.org/configuration/dev-server/)
with live reloading enabled. You can find it's configuration in [webpack.config.babel.js](./webpack.config.babel.js).

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


## Documentation (TODO)

To run the local documentation generator and view the project documentation run:

```bash
npx run docs
```

Once started, you can view the docs at [http://localhost:undefined](http://localhost:undefined)


## Contributing
Pull requests and commits follow commitizen conventional commit guidelines.


## Configuration


## Maintainers

[@nickmanks](https://github.com/nickmanks)


Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## Under the Hood

## Disclaimer

Any use of this software by any person will incur no liability on the owner of this software.
