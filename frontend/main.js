import { app, BrowserWindow } from "electron";
import * as path from "path";
import { fileURLToPath } from "url";

const isDev = !app.isPackaged; // Check if we're in development or production
let mainWindow
// // Manually define __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable electron-reload in development mode
if (isDev) {
  const electronPath = path.resolve(__dirname, "node_modules/.bin/electron");
  import("electron-reload").then((module) => {
    module.default(__dirname, {
      electron: electronPath,
    });
  });
}

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
      contextIsolation: false,
      enableRemoteModule: false,
    },
  });

  if (isDev) {
    // In development, load the Vite dev server
    mainWindow.loadURL("http://localhost:5173/");
  } else {
    // In production, load the generated `index.html` from the `dist` folder
    mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
  }
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
