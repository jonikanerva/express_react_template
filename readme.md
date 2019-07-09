# React SSR template

Template for a [React](https://reactjs.org) server side rendered app written in [TypeScript](https://www.typescriptlang.org). It uses [Express](http://expressjs.com) as the server and [Webpack](https://webpack.js.org) for building both the server and the client bundles. The bundles are hashed for optimal cacheability. [CSS Modules](https://github.com/css-modules/css-modules) are used and CSS classes are hashed to avoid collisions. [Jest](https://jestjs.io) is used for testing, [Prettier](https://prettier.io) for code formatting, and [tslint](https://palantir.github.io/tslint/) for static analysis.

It's recommended to use [nvm](https://github.com/creationix/nvm) to manage your Node versions.

## Setup

Set the correct Node version with `nvm install && nvm use`.

Install dependencies with `yarn install`.

Run tests with `yarn test`.

Run static analysis and linters with `yarn lint`.

Format files with `yarn format`.

## Server

Start application with `yarn build && yarn start`.

Start application in watch/dev mode with `yarn s`.
