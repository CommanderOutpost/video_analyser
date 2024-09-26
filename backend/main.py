from flask import Flask, request, jsonify, send_from_directory
import os
from werkzeug.utils import secure_filename

# Import your process_video function
from detection import process_video  # Make sure this imports correctly from your existing code

app = Flask(__name__)

# Set the upload folder
UPLOAD_FOLDER = 'static/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Allowed file extensions
ALLOWED_EXTENSIONS = {'mp4'}

# Function to check if the file is allowed
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# API endpoint to process video
@app.route('/process_video', methods=['POST'])
def process_video_route():
    # Check if a video file is in the request
    if 'video' not in request.files:
        return jsonify({'error': 'No video file in request'}), 400

    file = request.files['video']
    if file.filename == '':
        return jsonify({'error': 'No selected video file'}), 400

    if file and allowed_file(file.filename):
        # Save the uploaded video
        filename = secure_filename(file.filename)
        input_video_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(input_video_path)

        # Define output paths for the processed video and JSON
        output_video_path = os.path.join(app.config['UPLOAD_FOLDER'], 'output.mp4')
        output_json_path = os.path.join(app.config['UPLOAD_FOLDER'], 'detections.json')

        # Process the video
        process_video(input_video_path, output_video_path, output_json_path, skip_frames=10)

        # Return JSON response with download URLs
        return jsonify({
            'message': 'Video processed successfully',
            'output_video_url': f'/download/output.mp4',
            'output_json_url': f'/download/detections.json'
        }), 200

    return jsonify({'error': 'Invalid file type. Only MP4 is allowed.'}), 400

# Route to download files
@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    app.run(debug=True)
