"use client"

import { useRef } from "react"
import { Row, Icon, IconButton } from "@once-ui-system/core"
import { FilloutPopup, FilloutPopupRef } from "@/components/FilloutPopup"
import { about } from "@/resources"

interface ScheduleCallProps {
  className?: string
}

export function ScheduleCall({ className }: ScheduleCallProps) {
  const filloutRef = useRef<FilloutPopupRef>(null)

  const handleOpenFillout = () => {
    filloutRef.current?.open()
  }

  if (!about.calendar.display) {
    return null
  }

  return (
    <>
      <FilloutPopup ref={filloutRef} formId="iSYc6sEAzQus" />
      <Row
        fitWidth
        border="brand-alpha-medium"
        background="brand-alpha-weak"
        radius="full"
        padding="4"
        gap="8"
        marginBottom="m"
        vertical="center"
        className={className}
        style={{
          backdropFilter: "blur(var(--static-space-1))",
          cursor: "pointer",
        }}
        onClick={handleOpenFillout}
      >
        <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
        <Row paddingX="8">Schedule a call</Row>
        <IconButton
          data-border="rounded"
          variant="secondary"
          icon="chevronRight"
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation()
            handleOpenFillout()
          }}
        />
      </Row>
    </>
  )
}

