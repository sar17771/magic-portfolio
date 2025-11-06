"use client"

import { useEffect, useRef, useImperativeHandle, forwardRef } from "react"

interface FilloutPopupProps {
  formId?: string
}

export interface FilloutPopupRef {
  open: () => void
}

export const FilloutPopup = forwardRef<FilloutPopupRef, FilloutPopupProps>(
  ({ formId = "iSYc6sEAzQus" }, ref) => {
    const filloutRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (typeof window !== "undefined") {
        // Check if script already exists
        const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')
        
        if (!existingScript) {
          // Load Fillout embed script
          const script = document.createElement("script")
          script.src = "https://server.fillout.com/embed/v1/"
          script.async = true
          document.body.appendChild(script)
        }
      }
    }, [])

    useImperativeHandle(ref, () => ({
      open: () => {
        if (filloutRef.current) {
          // Wait a bit for Fillout script to initialize, then trigger
          setTimeout(() => {
            filloutRef.current?.click()
          }, 100)
        }
      },
    }))

    return (
      <div
        ref={filloutRef}
        data-fillout-id={formId}
        data-fillout-embed-type="popup"
        data-fillout-dynamic-resize
        data-fillout-inherit-parameters
        data-fillout-popup-size="medium"
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      />
    )
  }
)

FilloutPopup.displayName = "FilloutPopup"

