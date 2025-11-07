"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { Column, Row, IconButton } from "@once-ui-system/core"

interface ImageZoomModalProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  alt?: string
}

export function ImageZoomModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  alt = "Image",
}: ImageZoomModalProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex)

  useEffect(() => {
    setActiveIndex(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft" && activeIndex > 0) {
        setActiveIndex(activeIndex - 1)
      } else if (e.key === "ArrowRight" && activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, activeIndex, images.length, onClose])

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const handleNext = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  if (!isOpen || images.length === 0 || typeof window === "undefined") return null

  const modalContent = (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
      onClick={onClose}
    >
      <Column
        fillWidth
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Row
          fillWidth
          horizontal="end"
          style={{
            position: "absolute",
            top: "-3rem",
            right: 0,
            zIndex: 10000,
          }}
        >
          <IconButton
            icon="x"
            variant="secondary"
            onClick={onClose}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
            }}
          />
        </Row>

        {images.length > 1 && (
          <>
            {activeIndex > 0 && (
              <IconButton
                icon="chevronLeft"
                variant="secondary"
                onClick={handlePrevious}
                style={{
                  position: "absolute",
                  left: "-4rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  zIndex: 10000,
                }}
              />
            )}
            {activeIndex < images.length - 1 && (
              <IconButton
                icon="chevronRight"
                variant="secondary"
                onClick={handleNext}
                style={{
                  position: "absolute",
                  right: "-4rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  zIndex: 10000,
                }}
              />
            )}
          </>
        )}

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: "50vh",
            maxHeight: "90vh",
          }}
        >
          <Image
            src={images[activeIndex]}
            alt={`${alt} ${activeIndex + 1}`}
            fill
            quality={90}
            priority={activeIndex === 0}
            style={{
              objectFit: "contain",
            }}
            sizes="90vw"
          />
        </div>

        {images.length > 1 && (
          <Row
            horizontal="center"
            gap="8"
            style={{
              marginTop: "1rem",
              color: "white",
            }}
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: index === activeIndex ? "white" : "rgba(255, 255, 255, 0.4)",
                  cursor: "pointer",
                  padding: 0,
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </Row>
        )}
      </Column>
    </div>
  )

  // Use portal to render modal at document.body level to avoid stacking context issues
  return createPortal(modalContent, document.body)
}

