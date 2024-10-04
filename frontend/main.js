import { app, BrowserWindow } from "electron";
import * as path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
let pythonProcess;

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

  // Get the operating system platform
  const platform = os.platform();

  // Determine the path to the Python executable based on the OS
  let pythonExePath;
  if (platform === 'win32') {
    // Path for Windows (e.g., app.exe)
    pythonExePath = path.join(__dirname, 'python-backend', 'dist', 'app.exe');
  } else if (platform === 'darwin') {
    // Path for macOS (e.g., app)
    pythonExePath = path.join(__dirname, 'python-backend', 'dist', 'app');
  } else if (platform === 'linux') {
    // Path for Linux (e.g., app)
    pythonExePath = path.join(__dirname, 'python-backend', 'dist', 'app');
  }

  // Spawn the Python process
  pythonProcess = spawn(pythonExePath);

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
