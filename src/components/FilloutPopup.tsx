"use client"

import { useState, useImperativeHandle, forwardRef } from "react"
import { FilloutPopupEmbed } from "@fillout/react"

interface FilloutPopupProps {
  formId?: string
}

export interface FilloutPopupRef {
  open: () => void
}

export const FilloutPopup = forwardRef<FilloutPopupRef, FilloutPopupProps>(
  ({ formId = "iSYc6sEAzQus" }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    useImperativeHandle(ref, () => ({
      open: () => {
        setIsOpen(true)
      },
    }))

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
      <FilloutPopupEmbed
        filloutId={formId}
        isOpen={isOpen}
        onClose={handleClose}
        inheritParameters
      />
    )
  }
)

FilloutPopup.displayName = "FilloutPopup"

