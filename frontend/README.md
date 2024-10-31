# CCTV Footage Analyzer

CCTV Footage Analyzer is a web and desktop application designed to analyze CCTV footage by detecting objects within uploaded videos. This repository contains the frontend code for the application.

## Prerequisites

- Node.js (v14 or higher)
- Python (v3.7 or higher)
- npm (Node package manager)

## Getting Started

### 1. Install Frontend Dependencies

Navigate to the frontend folder and install the required dependencies:

```bash
npm install
```

### 2. Running the Application

#### Web Client

To run the web client for testing, follow these steps:

1. Ensure the Python backend server is running. Navigate to the backend folder and run:

   ```bash
   python main.py
   ```

2. Start the web client:

   ```bash
   npm run dev
   ```

#### Desktop Environment

If you want to run the application in the desktop environment (Electron app):

1. Make sure the Python backend server is running, as described above.
2. Start the desktop application:

   ```bash
   npm start
   ```
