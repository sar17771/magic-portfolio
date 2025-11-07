"use client"

import { useRef } from "react"
import {
  Avatar,
  RevealFx,
  Column,
  Text,
  IconButton,
  Row,
  Button,
  Icon,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import { FilloutPopup, FilloutPopupRef } from "@/components/FilloutPopup";
import { ScrollScaleHero } from "@/components/ScrollScaleHero";

export function HomeContent() {
  const filloutRef = useRef<FilloutPopupRef>(null)

  const handleOpenFillout = () => {
    filloutRef.current?.open()
  }

  return (
    <>
      {about.calendar.display && (
        <FilloutPopup ref={filloutRef} formId="iSYc6sEAzQus" />
      )}
      <ScrollScaleHero>
        <Column 
          fillWidth 
          horizontal="center" 
          gap="m"
          style={{
            padding: "1rem",
            maxHeight: "100vh",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Column maxWidth="l" horizontal="center" align="center" gap="m" style={{ width: "100%" }}>
            <RevealFx delay={0.4} horizontal="center">
              {about.avatar.display && (
                <Column
                  className="avatar-wave-container"
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                  onClick={handleOpenFillout}
                >
                  <div className="wave-ring wave-ring-1"></div>
                  <div className="wave-ring wave-ring-2"></div>
                  <div className="wave-ring wave-ring-3"></div>
                  <Avatar
                    src={person.avatar}
                    size={20}
                    style={{
                      position: 'relative',
                      zIndex: 10,
                    }}
                  />
                </Column>
              )}
            </RevealFx>
            <RevealFx delay={0.5} horizontal="center">
              <Column gap="m" align="center">
                <Text
                  variant="display-strong-l"
                  className="animated-name"
                  style={{ cursor: 'pointer' }}
                  onClick={handleOpenFillout}
                >
                  {person.name}
                </Text>
                <Text onBackground="neutral-weak" variant="heading-strong-xl">
                  {person.role}
                </Text>
              </Column>
            </RevealFx>
            {social.length > 0 && (
              <RevealFx delay={0.65} horizontal="center" paddingTop="s">
                <Row 
                  gap="m" 
                  wrap 
                  horizontal="center" 
                  style={{ 
                    maxWidth: "100%", 
                    justifyContent: "center",
                    padding: "0 1rem",
                  }}
                  className="social-icons-row"
                >
                  {social.map(
                    (item) =>
                      item.link && (
                        <div 
                          key={item.name} 
                          className="social-icon-wrapper"
                          style={{ flexShrink: 0 }}
                        >
                          <IconButton
                            size="l"
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </div>
                      ),
                  )}
                </Row>
              </RevealFx>
            )}
            {about.calendar.display && (
              <RevealFx delay={0.8} horizontal="center" paddingTop="s">
                <Button
                  onClick={handleOpenFillout}
                  variant="secondary"
                  size="m"
                  weight="default"
                  arrowIcon
                >
                  <Row gap="8" vertical="center" paddingRight="4">
                    <Icon name="calendar" />
                    Schedule Meeting
                  </Row>
                </Button>
              </RevealFx>
            )}
          </Column>
        </Column>
      </ScrollScaleHero>
    </>
  )
}

