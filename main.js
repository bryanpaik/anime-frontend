const {app, BrowserWindow, ipcMain } = require('electron');
const fs = require("fs");
const url = require("url");
const path = require("path");
const { setupTitlebar, attachTitlebarToWindow } = require("custom-electron-titlebar/main");

setupTitlebar();

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    autoHideMenuBar: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, "preload.js")
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/anime-frontend/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
    
  })
  attachTitlebarToWindow(mainWindow);
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
  if (mainWindow === null) createWindow()
});

ipcMain.handle("loadData", async (event, fileName) => {
  const userDataPath = app.getPath("userData");
  this.path = path.join(userDataPath, `${fileName}.json`);

  fs.writeFileSync(this.path, "", { flag: "a" });

  const data = fs.readFileSync(this.path);

  return data.length > 1 ? JSON.parse(data) : null;
});

ipcMain.handle("saveData", async (event, fileName, data) => {
  const userDataPath = app.getPath("userData");
  this.path = path.join(userDataPath, `${fileName}.json`);

  fs.writeFileSync(this.path, JSON.stringify(data));

  return "OK";
});

