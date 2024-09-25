import cv2
import numpy as np
import json
import os

# Load YOLO
yolo_net = cv2.dnn.readNet("yolo_files/yolov3.weights", "yolo_files/yolov3.cfg")
layer_names = yolo_net.getLayerNames()
output_layers = [
    layer_names[i - 1] for i in yolo_net.getUnconnectedOutLayers().flatten()
]


# Load the COCO class labels that YOLO was trained on
with open("yolo_files/coco.names", "r") as f:
    classes = [line.strip() for line in f.readlines()]


# Function to detect objects in a frame
def detect_objects(frame, yolo_net, output_layers):
    height, width = frame.shape[:2]
    blob = cv2.dnn.blobFromImage(
        frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False
    )
    yolo_net.setInput(blob)
    outs = yolo_net.forward(output_layers)

    class_ids = []
    confidences = []
    boxes = []

    for out in outs:
        for detection in out:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]
            if confidence > 0.5:
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)
                boxes.append([x, y, w, h])
                confidences.append(float(confidence))
                class_ids.append(class_id)
    return boxes, confidences, class_ids


# Function to process the video and generate the output video and JSON
# Function to process the video and generate the output video and JSON
def process_video(input_video_path, output_video_path, output_json_path, skip_frames=2):
    cap = cv2.VideoCapture(input_video_path)
    frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)

    # Adjust the FPS for the output video
    adjusted_fps = fps / skip_frames

    # Define the codec and create a VideoWriter object
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")  # Changed codec to "mp4v" for MP4 output
    out = cv2.VideoWriter(
        output_video_path, fourcc, adjusted_fps, (frame_width, frame_height)
    )

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

        # Detect objects in the frame
        boxes, confidences, class_ids = detect_objects(frame, yolo_net, output_layers)

        # Perform non-max suppression to eliminate redundant overlapping boxes with lower confidences
        indices = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)

        current_frame_detections = []

        if len(indices) > 0:
            for idx in indices.flatten():  # Use flatten() to avoid indexing issues
                x, y, w, h = boxes[idx]
                label = str(classes[class_ids[idx]])
                confidence = confidences[idx]
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
                cv2.putText(
                    frame,
                    f"{label} {confidence:.2f}",
                    (x, y - 10),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.6,
                    (0, 255, 0),
                    2,
                )

                current_frame_detections.append(
                    {
                        "label": label,
                        "confidence": float(confidence),
                        "box": [int(x), int(y), int(w), int(h)],
                        "time": frame_count / fps,  # Time in seconds
                    }
                )

            detection_data.append(
                {"frame": frame_count, "detections": current_frame_detections}
            )

        # Write the frame to the output video
        out.write(frame)
        frame_count += 1

    cap.release()
    out.release()

    # Save detections to JSON
    with open(output_json_path, "w") as f:
        json.dump(detection_data, f, indent=4)

    print(
        f"Processing complete. Output video saved to {output_video_path}, JSON saved to {output_json_path}"
    )


# Example usage (now with frame skipping):
process_video("input1.mp4", "output1.mp4", "output1_detections.json", skip_frames=10)
