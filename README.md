# J2node

**Angular 4** on the front-end and **nodeJS** on the back-end.

## Installation

clone the repo to your computer and run `npm install`
next install the Angular Cli with `npm install -g @angular/cli` so you can run the `ng` commands

## Development server

Before deployment pls run `ng build`. This will create build files in `dist` directory. 
After that run `node server.js` for a dev server. Navigate to `http://localhost:5000/`. Node will automatically serve files from `dist` directory. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.