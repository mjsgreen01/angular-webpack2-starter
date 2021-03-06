# Airport Maps

## Getting Started

###### You can use npm, but it's recommended to use yarn as it installs a lot faster and has other benefits https://yarnpkg.com/ . Make sure you are using yarn version 0.16.0 or newer (check with 'yarn --version')

```bash
yarn
yarn start
```

## Tech

* Angular 2
  * Async loading
  * Treeshaking
  * AOT (Ahead of Time/ Offline) Compilation
  * AOT safe SASS compilation
* Webpack 2
  * Webpack Dlls (Speeds up devServer builds)
  * @ngTools AOT plugin
* HMR (Hot Module Replacement)
* TypeScript 2
  * @types
* @ngrx
  * store (RxJS powered state management for Angular2 apps, inspired by Redux)
  * effects (Side effect model for @ngrx/store)
  * router-store (Bindings to connect angular/router to ngrx/store)
  * store-devtools (Developer Tools for @ngrx/store)
  * store-log-monitor (Log Monitor for @ngrx/store-devtools and Angular 2)
  * ngrx-store-logger (Advanced console logging for @ngrx/store applications, ported from redux-logger.)
  * ngrx-store-freeze in dev mode (@ngrx/store meta reducer that prevents state from being mutated.)
* Reselect
* Karma/Jasmine testing
* Protractor for E2E testing

## Basic scripts

Use `yarn start` for dev server. Default dev port is `3000`.

Use `yarn run start:hmr` to run dev server in HMR mode.

Use `yarn run build` for production build.

Use `yarn run server:prod` for production server and production watch. Default production port is `8088`.

Use `yarn run universal` to run production build in Universal. To run and build universal in AOT mode, use
`yarn run universal:aot`. Default universal port is `8000`.

Default ports and option to use proxy backend for dev server can be changed in `constants.js` file.

To create AOT version, run `yarn run build:aot`. This will compile and build script.
Then you can use `yarn run prodserver` to see to serve files.

### Testing

For unit tests, use `yarn run test` for continuous testing in watch mode and use
`yarn run test:once` for single test. To view code coverage after running test, open `coverage/html/index.html` in your browser.

For e2e tests, use `yarn run e2e`. To run unit test and e2e test at the same time, use `yarn run ci`.

### License

[MIT](https://github.com/qdouble/angular-webpack2-starter/blob/master/LICENSE)
