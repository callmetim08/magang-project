"use client";
import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-blue-600 text-white rounded-lg shadow-lg p-1.5 pl-4 pr-1.5">
      {/* Audio */}
      <audio ref={audioRef} src="/music/bg-music.mp3" preload="auto" loop />

      {/* Kiri: icon + judul */}
      <div className="flex items-center gap-0 w-25">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
        <span className="text-sm font-medium truncate">Holiday</span>
      </div>

      {/* Kanan: tombol */}
      <button
        onClick={togglePlay}
        className="flex items-center gap-1 px-3 py-1 text-sm bg-white text-red-600 rounded-full hover:bg-gray-100 transition"
      >
        {isPlaying ? (
          <>
            {/* Pause icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          </>
        ) : (
          <>
            {/* Play icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </>
        )}
      </button>
    </div>
  );
}