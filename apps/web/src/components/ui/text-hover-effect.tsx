'use client'
import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'

export const TextHoverEffect = ({
  text,
  duration,
  className = '',
}: {
  text: string
  duration?: number
  automatic?: boolean
  className?: string
}) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' })
  const [fontSize, setFontSize] = useState(112) // 7xl = 112px
  const [viewBox, setViewBox] = useState({ width: 300, height: 100 })

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect()
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      })
    }
  }, [cursor])

  // Responsive sizing effect
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const containerHeight = containerRef.current.offsetHeight

        // Calculate appropriate font size based on container width
        const textLength = text.length
        const maxWidth = containerWidth * 0.9 // Use 90% of container width
        const calculatedFontSize = Math.min(
          maxWidth / (textLength * 0.6), // Rough character width estimation
          containerHeight * 0.8, // Don't exceed 80% of container height
          112 // Max size (7xl)
        )

        const newFontSize = Math.max(calculatedFontSize, 32) // Min size (text-lg)
        setFontSize(newFontSize)

        // Adjust viewBox based on text length and font size
        const textWidth = textLength * newFontSize * 0.6
        const textHeight = newFontSize * 1.2
        setViewBox({
          width: Math.max(textWidth + 40, 300), // Add padding
          height: Math.max(textHeight + 40, 100),
        })
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [text])

  return (
    <div
      ref={containerRef}
      className={`w-full h-full flex items-center justify-center ${className}`}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className="select-none"
      >
        <defs>
          <linearGradient
            id="textGradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="25%"
          >
            {hovered && (
              <>
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="25%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="75%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </>
            )}
          </linearGradient>

          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="20%"
            initial={{ cx: '50%', cy: '50%' }}
            animate={maskPosition}
            transition={{ duration: duration ?? 0, ease: 'easeOut' }}

            // example for a smoother animation below

            //   transition={{
            //     type: "spring",
            //     stiffness: 300,
            //     damping: 50,
            //   }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>
          <mask id="textMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#revealMask)"
            />
          </mask>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          fontSize={fontSize}
          className="fill-black stroke-black font-[helvetica] font-bold dark:fill-white dark:stroke-white"
          style={{ opacity: hovered ? 0.7 : 0 }}
        >
          {text}
        </text>
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          fontSize={fontSize}
          className="fill-black stroke-black font-[helvetica] font-bold dark:fill-white dark:stroke-white"
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{
            strokeDashoffset: 0,
            strokeDasharray: 1000,
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
          }}
        >
          {text}
        </motion.text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#textGradient)"
          strokeWidth="0.3"
          fontSize={fontSize}
          mask="url(#textMask)"
          className="font-[helvetica] font-bold"
        >
          {text}
        </text>
      </svg>
    </div>
  )
}
