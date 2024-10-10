import subprocess
import os

def convert_to_h264(input_video_path, output_video_path):
    temp_output_path = "static/temp_output.mp4"  # Use a temporary path
    # Use ffmpeg to convert the video to H.264 with AAC audio
    command = [
        "ffmpeg",
        "-y",                   # Automatically overwrite output file
        "-i", input_video_path,  # Input file
        "-vcodec", "libx264",    # H.264 codec for video
        "-acodec", "aac",        # AAC codec for audio (optional if no audio)
        "-strict", "experimental",  # Use experimental AAC
        "-movflags", "faststart",   # To allow browser streaming before full download
        temp_output_path         # Output to a temporary file
    ]
    subprocess.run(command, check=True)
    
    # Replace original file with the converted file
    os.replace(temp_output_path, output_video_path)  # Move temp file to the output path
