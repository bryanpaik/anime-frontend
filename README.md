# AnimeFrontend
Electron-Angular application used to watch anime

Front end for https://github.com/bryanpaik/anime-backend

![image](https://user-images.githubusercontent.com/74121118/195756564-7146cb66-00ad-4575-bbb6-bb9fad09cbc5.png)

![image](https://user-images.githubusercontent.com/74121118/195756687-d4799a7d-8abd-40cc-b3bb-f2bb60021884.png)


## Setting up for development
1. Install node: https://nodejs.org/en/download/
2. Install GitHub Desktop: https://desktop.github.com/
3. Install Angular CLI `npm install -g @angular/cli`
4. Run `npm i` to install dependencies
5. Run `npm start` to launch electron application


## Build

npx electron-packager ./ AnimeApp --platform=win32 --overwrite

https://github.com/electron/electron-packager 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests 
