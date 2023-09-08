"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Dot, Heart } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";

interface Props {
  image: string[];
}

export default function Gallery({ image }: Props) {
  const [index, setIndex] = useState(0);

  return (
    <div className="rounded-[16px] h-[650px] w-full flex gap-2 relative justify-center rounded-t-[16px] py-2">
      <div className="w-1/2 h-full flex overflow-x-hidden">
        {image.map((src) => (
          <motion.div
            className="min-w-full h-full bg-center bg-contain flex-col justify-between items-center bg-no-repeat"
            style={{
              background: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{ translateX: `${index * 100}%` }}
            transition={{
              ease: "easeInOut",
            }}
          >
            <div className="flex justify-between items-center  w-full right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-1">
              <ChevronLeft
                className="cursor-pointer bg-black text-white"
                onClick={() => setIndex((prev) => prev - 1)}
              />
              <ChevronRight
                className="cursor-pointer bg-black text-white"
                onClick={() => setIndex((prev) => prev + 1)}
              />
            </div>
            <div className="absolute gap-[1px] bottom-0 m-auto left-0 right-0 w-full flex justify-center cursor-pointer px-1">
              {image.map((_, key) => (
                <Dot
                  key={key}
                  size={40}
                  className={key === index ? "text-white" : "text-black"}
                  onClick={() => setIndex(key)}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-1/2 min-w-[250px] min-h-[250px] grid grid-cols-2 grid-rows-2 gap-2">
        {image.splice(1, image.length).map((src, id) => (
          <div
            key={id}
            className="w-full"
            style={{
              background: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
