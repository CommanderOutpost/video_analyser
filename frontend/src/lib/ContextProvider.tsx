import React, { createContext, useRef, useState, ReactNode } from "react";
import { ContextProps, DetectedItem, VideoFile } from "./types";

// Create the context, specifying the type and allowing for undefined
const MyContext = createContext<ContextProps | null>(null);

interface ContextProviderProps {
  children: ReactNode;
}

// Create the provider component
const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [videos, setVideos] = useState<VideoFile[]>([]);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(
    null,
  );
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(
    null,
  );
  const [prompt, setPrompt] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detectedItems, setDetectedItems] = useState<DetectedItem[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const states = {
    videos,
    setVideos,
    selectedVideoIndex,
    setSelectedVideoIndex,
    currentVideoIndex,
    setCurrentVideoIndex,
    prompt,
    setPrompt,
    isModalOpen,
    setIsModalOpen,
    detectedItems,
    setDetectedItems,
    isAnalyzing,
    setIsAnalyzing,
    isDragging,
    setIsDragging,
    isPlaying,
    setIsPlaying,
    isFullscreen,
    setIsFullscreen,
    videoRef,
    fileInputRef,
  };

  return <MyContext.Provider value={states}>{children}</MyContext.Provider>;
};

export { MyContext, ContextProvider };
