import { ReactNode } from "react";

export interface VideoFile {
  file: File;
  url: string;
}

export interface DetectedItem {
  name: string;
  timestamp: number;
}

export interface ContextProviderProps {
  children: ReactNode;
}

export interface ContextProps {
  videos: VideoFile[];
  setVideos: React.Dispatch<React.SetStateAction<VideoFile[]>>;
  selectedVideoIndex: number | null;
  setSelectedVideoIndex: React.Dispatch<React.SetStateAction<number | null>>;
  currentVideoIndex: number | null;
  setCurrentVideoIndex: React.Dispatch<React.SetStateAction<number | null>>;
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  detectedItems: DetectedItem[];
  setDetectedItems: React.Dispatch<React.SetStateAction<DetectedItem[]>>;
  isAnalyzing: boolean;
  setIsAnalyzing: React.Dispatch<React.SetStateAction<boolean>>;
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isFullscreen: boolean;
  setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
  videoRef: React.RefObject<HTMLVideoElement>;
  fileInputRef: React.RefObject<HTMLInputElement>;
  showToast: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface ErrorToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}
