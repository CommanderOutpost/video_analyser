#!/bin/bash

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null
then
    echo "FFmpeg not found, installing..."
    sudo apt update
    sudo apt install -y ffmpeg
else
    echo "FFmpeg is already installed."
fi
