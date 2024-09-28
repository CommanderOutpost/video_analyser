import { app, BrowserWindow } from "electron";
import * as path from "path";
import { fileURLToPath } from "url";

const isDev = !app.isPackaged; // Check if we're in development or production

// Manually define __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable electron-reload in development mode
if (isDev) {
  import("electron-reload").then((module) => {
    module.default(__dirname, {
      electron: path.join(__dirname, "../node_modules/.bin/electron"),
    });
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "public/logo.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (isDev) {
    // In development, load the Vite dev server
    win.loadURL("http://localhost:5173/");
  } else {
    // In production, load the generated `index.html` from the `dist` folder
    win.loadFile(path.join(__dirname, "../dist/index.html"));
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
