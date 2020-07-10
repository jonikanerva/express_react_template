# React SSR template

Template for a [React][react] server side rendered app written in [TypeScript][typescript]. It uses [Express][express] as the server and [Webpack][webpack] for building both the server and the client bundles. [Jest][jest] is used for testing, [Prettier][prettier] for code formatting, [eslint][eslint] for static analysis, and [nvm][nvm] for managing Node versions.

Webpack uses [ts-loader][ts-loader] to compile the TypeScript code. CSS is compiled to a separate file for the browser using [mini-css-extract-plugin][mini-css-extract-plugin] and polyfilled using various [postcss][postcss] plugins. Bundles are hashed using [webpack-manifest-plugin][webpack-manifest-plugin] for easy caching. [CSS modules][css-modules] are enabled using [css-loader][css-loader] for hashing CSS class names to avoid collisions.

[css-loader]: https://github.com/webpack-contrib/css-loader/
[css-modules]: https://css-tricks.com/css-modules-part-1-need/
[eslint]: https://eslint.org
[express]: http://expressjs.com
[jest]: https://jestjs.io
[mini-css-extract-plugin]: https://github.com/webpack-contrib/mini-css-extract-plugin/
[nvm]: https://github.com/creationix/nvm/
[postcss]: https://postcss.org
[prettier]: https://prettier.io
[react]: https://reactjs.org
[ts-loader]: https://github.com/TypeStrong/ts-loader
[typescript]: https://www.typescriptlang.org
[webpack-manifest-plugin]: https://github.com/danethurber/webpack-manifest-plugin/
[webpack]: https://webpack.js.org

## Setup

Set the correct Node version with `nvm install && nvm use`.

Install dependencies with `yarn install`.

Run tests with `yarn test`.

Run static analysis and linters with `yarn lint`.

Format files with `yarn format`.

## Server

Start application with `yarn build && yarn start`.

Start application in watch/dev mode with `yarn s`.
