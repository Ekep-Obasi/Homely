'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft, Dot, Heart } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

interface Props {
  image: string[]
  type?: carouselType
  width?: string
}

export enum carouselType {
  DEFAULT = 'default',
  CARD = 'card',
}

export default function Carousel({ image, type, width }: Props) {
  const [index, setIndex] = useState(0)

  return (
    <div className="w-full h-[250px] max-w-[350px] flex gap-1 overflow-x-hidden relative rounded-t justify-center">
      {image.map((src) => (
        <motion.div
          className="w-full h-[250px] min-w-[350px] bg-center bg-contain flex-col justify-between items-center rounded-t"
          style={{ background: `url(${src})`, width: width }}
          animate={{ translateX: `-${index * 101}%` }}
          transition={{
            ease: 'easeInOut',
          }}
        >
          {type !== undefined && (
            <div className="w-full flex justify-between items-center px-2">
              <Badge className="bg-green h-6">AVAILABLE</Badge>
              <Button variant="ghost" className="rounded px-0 w-[30px] bg-none">
                <Heart />
              </Button>
            </div>
          )}

          <div className="flex justify-between  w-full right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-1">
            <ChevronLeft className="cursor-pointer" onClick={() => setIndex((prev) => (prev === 0 ? image.length - 1 : prev - 1))} />
            <ChevronRight className="cursor-pointer" onClick={() => setIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1))} />
          </div>
          <div className="absolute gap-[1px] bottom-0 m-auto left-0 right-0 w-full flex justify-center cursor-pointer px-1">
            {image.map((_, key) => (
              <Dot key={key} size={40} className={key === index ? 'text-white' : 'text-black'} onClick={() => setIndex(key)} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
