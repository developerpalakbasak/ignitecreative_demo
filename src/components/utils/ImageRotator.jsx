"use client";
import { useEffect, useState } from "react";

function ImageRotator({ images, interval = 2000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (!images?.length) return;

    const timer = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsSliding(true);

      // Reset sliding state after animation
      setTimeout(() => setIsSliding(false), 500); // match animation duration
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images, interval]);

  return (
    <div className="relative w-full h-[250px] overflow-hidden border-2 rounded-xl">
      {/* Previous Image */}
      {prevIndex !== null && isSliding && (
        <img
          src={images[prevIndex]}
          alt="previous"
          className="absolute inset-0 w-full h-full object-cover animate-slide-in"
        />
      )}

      {/* Current Image */}
      <img
        key={currentIndex} // force re-mount to trigger animation
        src={images[currentIndex]}
        alt="current"
        className="absolute inset-0 w-full h-full object-cover animate-slide-out"
      />
    </div>
  );
}

export default ImageRotator;
