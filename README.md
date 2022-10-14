# AnimeFrontend
Electron-Angular application used to watch anime

Needs to be connected to backend here: https://github.com/bryanpaik/anime-backend

## Setting up for development
1. Install node: https://nodejs.org/en/download/
2. Install GitHub Desktop: https://desktop.github.com/
3. Install Angular CLI `npm install -g @angular/cli`
4. Run `npm i` to install dependencies
5. Run `npm start` to run dev server and launch electron application


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests 

## Packaging for production

npx electron-packager ./ AnimeApp --platform=win32 --overwrite
https://github.com/electron/electron-packager 
