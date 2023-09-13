"use client";

import { useState } from "react";

interface Props {
  image: string[];
}

interface ImgBoxProps {
  image: string;
  onFullScreen?: () => void;
}

const ImageBox = ({ image, onFullScreen }: ImgBoxProps) => {
  return (
    <img
      className="min-w-full h-full bg-center bg-contain flex-col justify-between items-center bg-no-repeat hover:scale-95 cursor-pointer"
      style={{
        background: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onFullScreen}
    />
  );
};

export default function Gallery({ image }: Props) {
  const [fullScreen, setFullScreen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="rounded-[16px] h-[650px] w-full flex gap-2 relative justify-center py-2">
      <div className="w-1/2 h-full flex overflow-x-hidden">
        <ImageBox
          image={image[0]}
          onFullScreen={() => {
            setImageIndex(0);
            setFullScreen(true);
          }}
        />
      </div>
      <div className="w-1/2 min-w-[250px] min-h-[250px] grid grid-cols-2 grid-rows-2 gap-2">
        {image.length >= 5 &&
          image.splice(1, image.length - 2).map((src, i) => (
            <ImageBox
              image={src}
              onFullScreen={() => {
                setImageIndex(i);
                setFullScreen(true);
              }}
            />
          ))}
        <div
          className="w-full flex justify-center items-center"
          style={{
            background: `linear-gradient(to right, #000000BA, #0000009C), url(${
              image[image.length - 1]
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-2xl text-white">+ 2</h1>
        </div>
      </div>

      {fullScreen && (
        <div
          className="fullscreen-overlay active w-screen fixed h-screen bg-black flex justify-center items-center top-0 right-0"
          onClick={() => {
            setImageIndex(0);
            setFullScreen(false);
          }}
        >
          <div className="fullscreen-image">
            <img
              className="centered-image"
              src={image[imageIndex]}
              alt="Full Screen"
            />
          </div>
        </div>
      )}
    </div>
  );
}
