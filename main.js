const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const url = require("url");
const path = require("path");
const pie = require("puppeteer-in-electron");
const puppeteer = require("puppeteer-core");
const {
  setupTitlebar,
  attachTitlebarToWindow,
} = require("custom-electron-titlebar/main");
setupTitlebar();

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    autoHideMenuBar: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/anime-frontend/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  attachTitlebarToWindow(mainWindow);
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

ipcMain.handle("loadData", async (event, fileName) => {
  const userDataPath = app.getPath("userData");
  this.path = path.join(userDataPath, `${fileName}.json`);

  fs.writeFileSync(this.path, "", { flag: "a" });

  const data = fs.readFileSync(this.path);

  return data.length > 0 ? JSON.parse(data) : null;
});

ipcMain.handle("saveData", async (event, fileName, data) => {
  const userDataPath = app.getPath("userData");
  this.path = path.join(userDataPath, `${fileName}.json`);

  fs.writeFileSync(this.path, JSON.stringify(data));

  return "OK";
});

ipcMain.handle("search", async (event, anime) => {
  const browser = await puppeteer.launch({
    headless: true,
    slowMo: 35, // slow down by 250ms
  });

  const page = await browser.newPage();
  await page.goto(
    `https://animixplay.to/?q=${this.convertString(anime)}&sengine=gogo`,
    { waitUntil: "domcontentloaded" }
  );
  await page.waitForSelector(".items", { visible: true });

  const list = await page.evaluate(() => {
    const baseUrl = "https://animixplay.to";
    const animeList = [];

    document.querySelectorAll(".items > li").forEach((item) => {
      const anime = {
        name: item.getElementsByClassName("name")[0].textContent,
        image: item.getElementsByTagName("img")[0].getAttribute("src"),
        link: baseUrl + item.getElementsByTagName("a")[0].getAttribute("href"),
      };
      animeList.push(anime);
    });

    return animeList;
  });

  await browser.close();

  return list;
});

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});

const main = async () => {
  await pie.initialize(app);
  const browser = await pie.connect(app, puppeteer);

  const window = new BrowserWindow();
  const url = "https://example.com/";
  await window.loadURL(url);

  const page = await pie.getPage(browser, window);
  console.log(page.url());
  window.destroy();
};

main();
