# wfm-ionic-lib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Table of contents
1. [Providers](#providers)
2. [Components](#components)
3. [Dev Stuff](#dev-stuff)

## Providers

### Api

Communicates with your api.

```
setBaseUrl(baseUrl: string): void
```
Sets the base URL for all api requests.

```
get(endpoint: string, params?: any, options?: any): Observable<any>
post(endpoint: string, body: any, options?: any): Observable<any>
put(endpoint: string, body: any, options?: any): Observable<any>
delete(endpoint: string, options?: any): Observable<any>
patch(endpoint: string, body: any, options?: any): Observable<any>
```
Sends requests to the given endpoint.

## Components

### AppVersion

```
<wf-app-version></wf-app-version>
```

Shows the app version. 🎉

### StatusMessage

```
<wf-status-message icon?="pizza">
    Content here. 👋
</wf-status-message>
```

Shows a nice message with an icon to be used in an `<ion-list>`.

## Dev stuff

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build / publish lib

*   Run `npm run build:lib` to build your lib.
*   Run `npm publish dist` to publish the built package to the npm registry.

Don't forget to manually add peerDependencies and increase the version number in `src/lib/package.json`.
