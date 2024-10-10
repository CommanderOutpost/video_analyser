import { app, BrowserWindow } from "electron";
import * as path from "path";
import { fileURLToPath } from "url";

let mainWindow;
// // Manually define __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const preloadPath = path.resolve(__dirname, "preload.js");
  const iconPath = path.resolve(__dirname, "public/logo.png");
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    icon: iconPath,
    title: "Video Analyzer",
    webPreferences: {
      preload: preloadPath,
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
