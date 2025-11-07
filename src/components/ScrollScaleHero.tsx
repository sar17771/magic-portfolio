"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollScaleHeroProps {
  children: React.ReactNode
}

export function ScrollScaleHero({ children }: ScrollScaleHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return

      const heroHeight = heroRef.current.offsetHeight
      const scrollY = window.scrollY || document.documentElement.scrollTop
      const windowHeight = window.innerHeight

      // Calculate scale based on scroll position
      // Scale from 1 to 0.3 as user scrolls through the hero section
      const scrollProgress = Math.min(scrollY / (windowHeight * 0.6), 1)
      const newScale = Math.max(1 - scrollProgress * 0.7, 0.3)
      const newOpacity = Math.max(1 - scrollProgress * 1.5, 0)

      setScale(newScale)
      setOpacity(newOpacity)
    }

    // Use requestAnimationFrame for smoother updates
    let rafId: number
    const onScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="scroll-scale-hero"
      style={{
        minHeight: "100vh",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        transform: `scale(${scale})`,
        opacity: opacity,
        transformOrigin: "center center",
        willChange: "transform, opacity",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  )
}

