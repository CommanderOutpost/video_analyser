import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Maximize2Icon,
  Minimize2Icon,
  PauseIcon,
  PlayIcon,
  XIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useContentProvider } from "../hooks/useContextProvider";
import { useEffect } from "react";
import { formatTime } from "../lib/function";

export default function Modal() {
  const {
    isModalOpen,
    isFullscreen,
    videos,
    currentVideoIndex,
    videoRef,
    isPlaying,
    isAnalyzing,
    setIsModalOpen,
    setIsPlaying,
    setCurrentVideoIndex,
    setIsFullscreen,
    setErrorMessage,
    setShowToast,
  } = useContentProvider();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
          setErrorMessage(error.message);
          setShowToast(true);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const seekToTimestamp = (timestamp: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timestamp;
      if (!isPlaying) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
          setErrorMessage(error.message);
          setShowToast(true);
        });
        setIsPlaying(true);
      }
    }
  };

  const switchVideo = (direction: "prev" | "next") => {
    if (currentVideoIndex === null) return;
    let newIndex: number;
    if (direction === "prev") {
      newIndex =
        currentVideoIndex > 0 ? currentVideoIndex - 1 : videos.length - 1;
    } else {
      newIndex =
        currentVideoIndex < videos.length - 1 ? currentVideoIndex + 1 : 0;
    }
    setCurrentVideoIndex(newIndex);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    if (isModalOpen && videoRef.current && currentVideoIndex !== null) {
      videoRef.current.src = videos[currentVideoIndex].url;
      setIsPlaying(false);
    }
  }, [isModalOpen, videos, currentVideoIndex]);

  return (
    <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
      <DialogContent
        className={`max-w-7xl w-full ${isFullscreen ? "h-screen" : "h-[90vh]"} p-0 bg-gray-900 flex flex-col border-0`}
      >
        <DialogTitle className="sr-only">Analyzed Video</DialogTitle>
        <DialogDescription className="sr-only">
          Video playback and analysis results
        </DialogDescription>
        <div className="flex flex-col h-full">
          <div className="flex-grow relative bg-black">
            {videos.length > 0 && currentVideoIndex !== null && (
              <video
                ref={videoRef}
                src={videos[currentVideoIndex].url}
                className="absolute inset-0 w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            )}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => switchVideo("prev")}
                className="bg-white/20 hover:bg-white/30 text-white"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={togglePlayPause}
                className="bg-white/20 hover:bg-white/30 text-white"
              >
                {isPlaying ? (
                  <PauseIcon className="h-6 w-6" />
                ) : (
                  <PlayIcon className="h-6 w-6" />
                )}
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => switchVideo("next")}
                className="bg-white/20 hover:bg-white/30 text-white"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="p-4 bg-gray-800 text-white border-t border-gray-700 overflow-y-auto max-h-[30vh]">
            <h3 className="text-lg font-medium mb-2">Detected Items:</h3>
            {isAnalyzing ? (
              <div className="flex items-center justify-center h-20">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
              </div>
            ) : currentVideoIndex !== null &&
              videos[currentVideoIndex].detectedItems.length > 0 ? (
              <ul className="space-y-2">
                {videos[currentVideoIndex].detectedItems.map((item, index) =>
                  item.detections.map((detection, j) => (
                    <li
                      key={`${index}${j}`}
                      className="flex items-center justify-between bg-gray-700 p-2 rounded-md"
                    >
                      <span>{detection.label}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => seekToTimestamp(detection.time)}
                        className="text-blue-400 hover:text-blue-300 border-blue-400 hover:border-blue-300"
                      >
                        Go to {formatTime(detection.time)}
                      </Button>
                    </li>
                  )),
                )}
              </ul>
            ) : (
              <p>No items detected for this video.</p>
            )}
          </div>
        </div>
        <div className="absolute top-2 right-2 flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFullscreen}
            className="text-white hover:bg-white/20"
          >
            {isFullscreen ? (
              <Minimize2Icon className="h-5 w-5" />
            ) : (
              <Maximize2Icon className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCloseModal}
            className="text-white hover:bg-white/20"
          >
            <XIcon className="h-5 w-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
