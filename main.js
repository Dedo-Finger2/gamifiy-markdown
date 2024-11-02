const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("node:path");
const insertMainFolderPath = require("./repository.js");

const userPlataform = {
  mac: process.platform === "darwin",
  win: process.platform === "win32",
  linux: process.platform === "linux",
};

async function handleSelectMainFolder(_event, _options) {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });

  if (canceled) {
    return null;
  }

  const mainFolderPath = filePaths[0];

  insertMainFolderPath(mainFolderPath);
}

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Gamify Markdown",
    width: 900,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadFile("./index.html");

  mainWindow.webContents.openDevTools();

  ipcMain.handle("dialog:selectFolder", handleSelectMainFolder);
  ipcMain.on("navigate", (_event, targetPage) => {
    mainWindow.loadFile(targetPage);
  });
}

app.whenReady().then(() => {
  createMainWindow();
});

app.on("window-all-closed", () => {
  if (!userPlataform.mac) app.quit();
});
