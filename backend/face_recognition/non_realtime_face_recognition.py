import cv2
import dlib
import numpy as np
import json
import os

# Base directory (assuming everything is under face_recognition)
base_dir = "face_recognition"

# Load the face detector and shape predictor from dlib
models_folder = os.path.join(base_dir, "models")
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor(
    os.path.join(models_folder, "shape_predictor_68_face_landmarks.dat")
)
face_rec = dlib.face_recognition_model_v1(
    os.path.join(models_folder, "dlib_face_recognition_resnet_model_v1.dat")
)

# Load the database from the JSON file
database_folder = os.path.join(base_dir, "database")
with open(os.path.join(database_folder, "face_database.json"), "r") as f:
    face_database = json.load(f)

# Create a new dictionary where keys are the IDs and values are the loaded embeddings
database = {
    unique_id: np.load(os.path.join(base_dir, embedding_path))
    for unique_id, embedding_path in face_database.items()
}


def get_face_embedding(image, face_rect):
    # Detect facial landmarks
    landmarks = predictor(image, face_rect)
    # Compute face embedding
    embedding = np.array(face_rec.compute_face_descriptor(image, landmarks))
    return embedding


def recognize_face(embedding, database, threshold=0.5):
    best_match = "Unknown"
    best_similarity = 0

    # Compare the embedding with all known embeddings in the database
    for person, db_embedding in database.items():
        similarity = np.dot(embedding, db_embedding) / (
            np.linalg.norm(embedding) * np.linalg.norm(db_embedding)
        )
        if similarity > threshold and similarity > best_similarity:
            best_match = person
            best_similarity = similarity

    return best_match, best_similarity


def process_video_for_faces(input_video_path, output_video_path, output_json_path, skip_frames=2):
    # Open the input video
    cap = cv2.VideoCapture(input_video_path)

    # Get the video frame dimensions and FPS to create an output video
    frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)

    # Adjust the FPS for the output video
    adjusted_fps = fps / skip_frames

    # Define the codec and create a VideoWriter object
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    out = cv2.VideoWriter(output_video_path, fourcc, adjusted_fps, (frame_width, frame_height))

    detection_data = []

    frame_count = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break  # End of video

        # Skip frames
        if frame_count % skip_frames != 0:
            frame_count += 1
            continue

        # Convert the frame to grayscale for detection
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = detector(gray)

        current_frame_detections = []

        for face in faces:
            x, y, w, h = (face.left(), face.top(), face.width(), face.height())
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

            # Get face embedding for each detected face
            embedding = get_face_embedding(frame, face)

            # Identify the person
            if embedding is not None:
                person, confidence = recognize_face(embedding, database)
                label = f"{person} ({confidence:.2f})"

                # Display the label on the frame
                cv2.putText(
                    frame,
                    label,
                    (x, y - 10),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.6,
                    (0, 255, 0),
                    2,
                )

                current_frame_detections.append(
                    {
                        "label": person,
                        "confidence": float(confidence),
                        "box": [int(x), int(y), int(w), int(h)],
                        "time": frame_count / fps,  # Time in seconds
                    }
                )

        # If any detections were made in the current frame, add them to the detection_data
        if current_frame_detections:
            detection_data.append(
                {"frame": frame_count, "detections": current_frame_detections}
            )

        # Write the frame to the output video
        out.write(frame)
        frame_count += 1

    # Release video capture and writer objects
    cap.release()
    out.release()

    # Save detections to JSON
    with open(output_json_path, "w") as f:
        json.dump(detection_data, f, indent=4)

    print(
        f"Processing complete. Output video saved to {output_video_path}, JSON saved to {output_json_path}"
    )
