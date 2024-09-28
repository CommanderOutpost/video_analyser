import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { UploadIcon } from "lucide-react";
import { useContentProvider } from "../hooks/useContextProvider";

export default function Sidebar() {
  const {
    isDragging,
    fileInputRef,
    setIsDragging,
    setVideos,
    selectedVideoIndex,
    setSelectedVideoIndex,
  } = useContentProvider();

  const handleVideoUpload = (files: FileList | null) => {
    if (files) {
      const newVideos = Array.from(files)
        .filter((file) => file.type === "video/mp4")
        .map((file) => ({
          file,
          url: URL.createObjectURL(file),
        }));
      setVideos((prevVideos) => {
        const updatedVideos = [...prevVideos, ...newVideos];
        if (selectedVideoIndex === null && updatedVideos.length > 0) {
          setSelectedVideoIndex(prevVideos.length);
        }
        return updatedVideos;
      });
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleVideoUpload(files);
  };

  return (
    <div className="w-64 bg-gray-800 text-white p-4 flex flex-col">
      {/* <h1 className="text-2xl font-bold mb-6">CCTV Analyzer</h1> */}
      <div
        className={`flex-1 p-4 border-2 border-dashed rounded-lg transition-colors ${
          isDragging ? "border-blue-500 bg-blue-900" : "border-gray-600"
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Label
          htmlFor="video-upload"
          className="text-lg font-medium block text-center mb-2"
        >
          Upload MP4 Files
        </Label>
        <p className="text-sm text-gray-400 text-center mb-4">
          Drag and drop or click to select
        </p>
        <Input
          id="video-upload"
          type="file"
          accept="video/mp4"
          onChange={(e) => handleVideoUpload(e.target.files)}
          className="hidden"
          multiple
          ref={fileInputRef}
        />
        <Button
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
        >
          <UploadIcon className="h-5 w-5 mr-2" />
          Select Files
        </Button>
      </div>
    </div>
  );
}
