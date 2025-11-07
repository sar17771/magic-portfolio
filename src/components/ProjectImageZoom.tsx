"use client"

import { useState } from "react"
import { Media } from "@once-ui-system/core"
import { ImageZoomModal } from "@/components/ImageZoomModal"

interface ProjectImageZoomProps {
  images: string[]
  alt?: string
  priority?: boolean
  aspectRatio?: string
  radius?: "m" | "l" | "s" | "xs" | "xl" | "full" | "none" | "m-4" | "m-8" | "l-4" | "l-8" | "s-4" | "s-8" | "xs-4" | "xs-8" | "xl-4" | "xl-8" | "full-4" | "full-8" | "none-4" | "none-8"
}

export function ProjectImageZoom({
  images,
  alt = "Image",
  priority = false,
  aspectRatio = "16 / 9",
  radius = "m",
}: ProjectImageZoomProps) {
  const [zoomIndex, setZoomIndex] = useState<number | null>(null)

  if (images.length === 0) return null

  return (
    <>
      <div
        onClick={() => setZoomIndex(0)}
        style={{ cursor: "pointer" }}
      >
        <Media
          priority={priority}
          aspectRatio={aspectRatio}
          radius={radius}
          alt={alt}
          src={images[0]}
        />
      </div>
      {zoomIndex !== null && (
        <ImageZoomModal
          images={images}
          currentIndex={zoomIndex}
          isOpen={zoomIndex !== null}
          onClose={() => setZoomIndex(null)}
          alt={alt}
        />
      )}
    </>
  )
}

