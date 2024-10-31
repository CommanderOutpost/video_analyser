## Complete Setup Guide for CCTV Footage Analyzer

### Prerequisites

Ensure the following are installed on your system:
1. **Python 3.7 or higher**
2. **Node.js v14 or higher** (includes npm)
3. **Git** (to clone repositories)
4. **wget and bzip2** (Windows-specific setup included below)

#### Installing `wget` and `bzip2` on Windows
   - Option 1: **Install Git Bash** (recommended)
     - Download **[Git for Windows](https://gitforwindows.org/)**, which includes `wget` and `bzip2`.
     - Open Git Bash after installation to use `wget` and `bzip2` commands.

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Backend Setup (Python)**
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Download necessary files with `wget` and `bzip2`:
     ```bash
     mkdir -p yolo_files
     cd yolo_files

     # Download YOLO configuration files and weights
     wget https://pjreddie.com/media/files/yolov3.weights
     wget https://raw.githubusercontent.com/pjreddie/darknet/master/cfg/yolov3.cfg
     wget https://raw.githubusercontent.com/pjreddie/darknet/master/data/coco.names

     cd ../face_recognition
     mkdir models
     cd models
     wget http://dlib.net/files/shape_predictor_68_face_landmarks.dat.bz2
     wget http://dlib.net/files/dlib_face_recognition_resnet_model_v1.dat.bz2
     bzip2 -d shape_predictor_68_face_landmarks.dat.bz2
     bzip2 -d dlib_face_recognition_resnet_model_v1.dat.bz2
     cd ..
     ```
   - Create and activate a virtual environment:
     ```bash
     python -m venv env
     source env/bin/activate      # For Linux/macOS
     env\Scripts\activate         # For Windows
     ```
   - Install the required Python packages:
     ```bash
     pip install -r requirements.txt
     ```

3. **Frontend Setup (Node.js and Electron)**
   - Navigate to the frontend folder:
     ```bash
     cd ../frontend
     ```
   - Install Node dependencies:
     ```bash
     npm install
     ```

4. **Run the Application**
   - **Start Frontend and Backend for Web Testing**:
     ```bash
     npm run test:web
     ```
   - **Run as Desktop App (Electron)**:
     ```bash
     npm start
     ```
   - **Build Desktop App for Distribution**:
     ```bash
     npm run electron:build
     ```
