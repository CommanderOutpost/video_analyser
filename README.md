
# YOLO Object Detection Setup Guide

This guide will help you set up a YOLO object detection system using Python and Flask. Follow the instructions below to download necessary files, install packages, and set up your environment.

## Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

## Installation

### Step 1: Clone the Repository

Clone the repository to your local machine where you intend to run the detection system.

```bash
git clone <repository-url>
cd <repository-directory>
```

### Step 2: Download YOLO Models and Configuration Files

Use `wget` to download the necessary configuration files and pre-trained models.

```bash
mkdir -p backend/yolo_files
cd backend/yolo_files

# Download YOLO configuration files and weights
wget https://pjreddie.com/media/files/yolov3.weights
wget https://raw.githubusercontent.com/pjreddie/darknet/master/cfg/yolov3.cfg
wget https://raw.githubusercontent.com/pjreddie/darknet/master/data/coco.names

cd ../face_recognition
mkdir models
wget http://dlib.net/files/shape_predictor_68_face_landmarks.dat.bz2
wget http://dlib.net/files/dlib_face_recognition_resnet_model_v1.dat.bz2
bzip2 -d shape_predictor_68_face_landmarks.dat.bz2
bzip2 -d dlib_face_recognition_resnet_model_v1.dat.bz2
cd ..
```

### Step 3: Install Python Packages

Create a python environment (recommended):
```
python3 -m venv <environment-name>
```

Run the following command to install the required Python packages:

```bash
pip install -r backend/requirements.txt
```

## Running the Application

Navigate to the `backend` directory and start the Flask application:

```bash
cd backend
python main.py
```

The Flask server will start running.

## API Usage

- **POST /process_video**: Upload a video file to be processed.
- **GET /download/<filename>**: Download a processed video or JSON detections.
