
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

Use `wget` to download the necessary YOLO configuration files and pre-trained models.

```bash
mkdir -p backend/yolo_files
cd backend/yolo_files

# Download YOLO configuration files and weights
wget https://pjreddie.com/media/files/yolov3.weights
wget https://pjreddie.com/media/files/yolov3-tiny.weights
wget https://pjreddie.com/media/files/yolov3.cfg
wget https://pjreddie.com/media/files/yolov3-tiny.cfg

# Download COCO names
wget https://pjreddie.com/media/files/coco.names
cd ../..
```

### Step 3: Install Python Packages

Create a python environment (recommended):
```
python3 -m venv environment_name
```

Create a `requirements.txt` file in the `backend` directory if it doesn't exist, and add the following dependencies:

```
flask
numpy
opencv-python-headless
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
