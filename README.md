# wfm-ionic-lib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

### Development server

Prerequisites: Install angular-cli (`npm i @angular/cli`) globally.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build / publish lib

*   Run `npm run build:lib` to build your lib.
*   Run `npm publish dist` to publish the built package to the npm registry.

Don't forget to manually add peerDependencies and increase the version number in `src/lib/package.json`.
