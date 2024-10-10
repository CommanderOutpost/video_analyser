from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import os
import subprocess
import zipfile
from werkzeug.utils import secure_filename
from detection import process_video
from face_recognition.non_realtime_face_recognition import process_video_for_faces
import tempfile
import shutil

# Check if ffmpeg is installed, if not, run the install script
def check_ffmpeg():
    try:
        subprocess.run(["ffmpeg", "-version"], check=True)
        print("FFmpeg is already installed.")
    except subprocess.CalledProcessError:
        print("FFmpeg not found, installing...")
        subprocess.run(["./install_ffmpeg.sh"], check=True)

# Call the check_ffmpeg function at the start of the app
check_ffmpeg()

app = Flask(__name__)

# Get the frontend origin from the environment variable
frontend_origin = os.getenv("FRONTEND_ORIGIN", "*")

# Enable CORS for all routes, allowing requests from the specified frontend origin
CORS(app, resources={r"/*": {"origins": frontend_origin}}, supports_credentials=True)

# Allowed file extensions
ALLOWED_EXTENSIONS = {"mp4"}

# Function to check if the file is allowed
def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# API endpoint to process video and return the video + JSON as a ZIP file
@app.route("/process_video", methods=["POST"])
def process_video_route():
    # Check if a video file is in the request
    if "video" not in request.files:
        return jsonify({"error": "No video file in request"}), 400

    file = request.files["video"]
    if file.filename == "":
        return jsonify({"error": "No selected video file"}), 400

    if file and allowed_file(file.filename):
        # Create a temporary directory
        temp_dir = tempfile.mkdtemp()

        try:
            # Save the uploaded video
            filename = secure_filename(file.filename)
            input_video_path = os.path.join(temp_dir, filename)
            file.save(input_video_path)

            # Define output paths for the processed video and JSON
            output_video_path = os.path.join(temp_dir, "output.mp4")
            output_faces_video_path = os.path.join(temp_dir, "output_faces.mp4")
            output_json_path = os.path.join(temp_dir, "detections.json")
            output_faces_json_path = os.path.join(temp_dir, "faces.json")

            # Process the video
            process_video(input_video_path, output_video_path, output_json_path, skip_frames=10)
            process_video_for_faces(input_video_path, output_faces_video_path, output_faces_json_path)

            # Create a ZIP file containing the output video, face video, and JSON files
            zip_filename = os.path.join(temp_dir, "processed_files.zip")
            with zipfile.ZipFile(zip_filename, 'w') as zipf:
                zipf.write(output_video_path, os.path.basename(output_video_path))
                zipf.write(output_faces_video_path, os.path.basename(output_faces_video_path))
                zipf.write(output_json_path, os.path.basename(output_json_path))
                zipf.write(output_faces_json_path, os.path.basename(output_faces_json_path))

            # Return the ZIP file as a downloadable response
            return send_file(zip_filename, as_attachment=True)

        finally:
            # Clean up the temporary directory after the request is complete
            shutil.rmtree(temp_dir)

    return jsonify({"error": "Invalid file type. Only MP4 is allowed."}), 400

if __name__ == "__main__":
    app.run(debug=True)
