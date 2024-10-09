import { SearchIcon, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
// import { Label } from "./ui/label";
// import { Textarea } from "./ui/textarea";
import { useContentProvider } from "../hooks/useContextProvider";
import axios from "axios";
import JSZip from "jszip";
// import { DetectedItem } from "../lib/types";

export default function Main() {
  const {
    videos,
    selectedVideoIndex,
    setSelectedVideoIndex,
    // prompt,
    // setPrompt,
    isAnalyzing,
    setIsModalOpen,
    setIsAnalyzing,
    setVideos,
    setCurrentVideoIndex,
    setErrorMessage,
    setShowToast,
  } = useContentProvider();

  const handleRemoveVideo = (index: number) => {
    setVideos((prevVideos) => prevVideos.filter((_, i) => i !== index));
    if (selectedVideoIndex === index) {
      setSelectedVideoIndex(null);
    } else if (selectedVideoIndex !== null && index < selectedVideoIndex) {
      setSelectedVideoIndex(selectedVideoIndex - 1);
    }
  };

  const handleDeleteAllVideos = () => {
    setVideos([]);
    setSelectedVideoIndex(null);
    setCurrentVideoIndex(null);
  };

  const handleAnalyze = async () => {
    if (selectedVideoIndex === null) return;
    setIsAnalyzing(true);
    setCurrentVideoIndex(selectedVideoIndex);
    try {
      const formData = new FormData();
      formData.append("video", videos[selectedVideoIndex].file);
      const response = await axios.post(
        "http://127.0.0.1:5000/process_video",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        },
      );
      const zip = new JSZip();
      const zipContents = await zip.loadAsync(response.data);
      // Extract detections.json
      const detectionsJson = await zipContents
        .file("detections.json")
        ?.async("text");
      const detections = detectionsJson
        ? JSON.parse(detectionsJson)
        : [];

      // Extract output.mp4
      const outputVideo = await zipContents
        .file("output.mp4")
        ?.async("blob")
        .then((blob) => new Blob([blob], { type: "video/mp4" }));
      const processedVideoUrl = outputVideo
        ? URL.createObjectURL(outputVideo)
        : null;

      setVideos((prevVideos) => {
        const updatedVideos = [...prevVideos];
        updatedVideos[selectedVideoIndex] = {
          ...updatedVideos[selectedVideoIndex],
          detectedItems: detections,
          url: processedVideoUrl,
        };
        return updatedVideos;
      });

      setIsAnalyzing(false);
      setIsModalOpen(true);
    } catch (error: any) {
      setErrorMessage(error.message);
      setShowToast(true);
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Uploaded Footage</h2>
          <Button
            onClick={handleDeleteAllVideos}
            variant="destructive"
            className="bg-red-500 hover:bg-red-600 text-white"
            disabled={videos.length === 0}
          >
            Delete All Videos
          </Button>
        </div>
        {videos.length > 0 ? (
          <ul className="space-y-2">
            {videos.map((video, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white p-3 rounded-md shadow"
              >
                <button
                  className={`flex-grow text-left p-2 rounded ${selectedVideoIndex === index ? "bg-blue-100" : "hover:bg-gray-100"}`}
                  onClick={() => setSelectedVideoIndex(index)}
                >
                  {video.file.name}
                </button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveVideo(index)}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <TrashIcon className="h-5 w-5" />
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No videos uploaded yet.</p>
        )}
      </div>

      {/* <div className="mb-6">
        <Label htmlFor="prompt" className="text-lg font-medium block mb-2">
          Analysis Prompt
        </Label>
        <Textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="What should we look for in the footage?"
          rows={3}
          className="w-full resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div> */}

      <Button
        onClick={handleAnalyze}
        // disabled={selectedVideoIndex === null || !prompt || isAnalyzing}
        disabled={selectedVideoIndex === null || isAnalyzing}
        className="w-full bg-green-600 hover:bg-green-700 text-white"
      >
        {isAnalyzing ? "Analyzing..." : "Analyze Footage"}
        {!isAnalyzing && <SearchIcon className="ml-2 h-5 w-5" />}
      </Button>
    </div>
  );
}
