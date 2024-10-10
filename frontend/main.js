import { app, BrowserWindow } from "electron";
import * as path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

let mainWindow;
let pythonProcess;
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
  const scriptPath = path.join(__dirname, "backend_python", "main.py");
  pythonProcess = spawn("python3", [`${scriptPath}`], {
    cwd: path.join(__dirname, "backend_python"),
  });

  pythonProcess.stdout.on("data", (data) => {
    console.log(`Python backend: ${data}`);
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`Python error: ${data}`);
  });

  pythonProcess.on("close", (code) => {
    console.log(`Python process exited with code ${code}`);
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("before-quit", () => {
  if (pythonProcess) pythonProcess.kill();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
