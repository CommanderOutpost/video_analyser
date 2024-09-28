import { SearchIcon, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useContentProvider } from "../hooks/useContextProvider";

export default function Main() {
  const {
    videos,
    selectedVideoIndex,
    setSelectedVideoIndex,
    prompt,
    setPrompt,
    isAnalyzing,
    setIsModalOpen,
    setIsAnalyzing,
    setVideos,
    setCurrentVideoIndex,
    setDetectedItems,
  } = useContentProvider();

  const handleRemoveVideo = (index: number) => {
    setVideos((prevVideos) => prevVideos.filter((_, i) => i !== index));
    if (selectedVideoIndex === index) {
      setSelectedVideoIndex(null);
    } else if (selectedVideoIndex !== null && index < selectedVideoIndex) {
      setSelectedVideoIndex(selectedVideoIndex - 1);
    }
  };

  const handleAnalyze = async () => {
    if (selectedVideoIndex === null) return;
    setIsAnalyzing(true);
    setCurrentVideoIndex(selectedVideoIndex);

    // Simulating API call and analysis
    setTimeout(() => {
      setDetectedItems([
        { name: "Person", timestamp: 5 },
        { name: "Car", timestamp: 15 },
        { name: "Suspicious activity", timestamp: 25 },
        { name: "Dining Table", timestamp: 60 },
        { name: "Person", timestamp: 160 },
      ]);
      setIsAnalyzing(false);
      setIsModalOpen(true);
    }, 3000);
  };

  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Uploaded Footage</h2>
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

      <div className="mb-6">
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
      </div>

      <Button
        onClick={handleAnalyze}
        disabled={selectedVideoIndex === null || !prompt || isAnalyzing}
        className="w-full bg-green-600 hover:bg-green-700 text-white"
      >
        {isAnalyzing ? "Analyzing..." : "Analyze Footage"}
        {!isAnalyzing && <SearchIcon className="ml-2 h-5 w-5" />}
      </Button>
    </div>
  );
}
