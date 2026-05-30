"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface LogoProps {
  className?: string
  size?: "sm" | "normal" | "lg"
}

export function Logo({ className = "", size = "normal" }: LogoProps) {
  // Determine height based on the size prop
  const heightClass = {
    sm: "h-8 md:h-10",
    normal: "h-12 md:h-14",
    lg: "h-20 md:h-36"
  }[size]

  return (
    <div className={`relative flex items-center justify-center select-none ${className} ${heightClass}`}>
      <svg
        viewBox="0 0 540 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full max-w-full overflow-visible"
      >
        <defs>
          {/* Intense Cyber Cyan Glow Filter */}
          <filter id="cyber-glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur3" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur4" />
            <feMerge>
              <feMergeNode in="blur4" />
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Intense Fiery Orange Glow Filter */}
          <filter id="cyber-glow-orange" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur3" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur4" />
            <feMerge>
              <feMergeNode in="blur4" />
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Metallic gradient for text details */}
          <linearGradient id="cyber-grad-cyan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#70FFFF" />
          </linearGradient>
          <linearGradient id="cyber-grad-orange" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>

        {/* ========================================================
            ANIMATED GLOWING BACKGROUND LAYER (Pulsing Glow)
           ======================================================== */}
        <motion.g
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Cyan "D" Hexagon Emblem Glow */}
          <polygon
            points="60,18 96,39 96,81 60,102 24,81 24,39"
            stroke="#00F0FF"
            strokeWidth="6"
            strokeLinejoin="round"
            filter="url(#cyber-glow-cyan)"
            opacity="0.8"
          />
          {/* Outer cyan details */}
          <path
            d="M 60,10 L 104,35 M 60,110 L 16,85"
            stroke="#00F0FF"
            strokeWidth="2"
            filter="url(#cyber-glow-cyan)"
            opacity="0.5"
          />
          
          {/* Inner "D" Letter Glow */}
          <path
            d="M 46,42 L 64,42 C 72,42 76,46 76,54 L 76,66 C 76,74 72,78 64,78 L 46,78 Z M 54,50 L 54,70 L 63,70 C 66,70 68,68 68,64 L 68,56 C 68,52 66,50 63,50 Z"
            fill="#00F0FF"
            filter="url(#cyber-glow-cyan)"
            opacity="0.9"
          />

          {/* Orange "FB" Hexagon Emblem Glow */}
          <polygon
            points="106,50 128,62.5 128,87.5 106,100 84,87.5 84,62.5"
            stroke="#FF4500"
            strokeWidth="4"
            strokeLinejoin="round"
            filter="url(#cyber-glow-orange)"
            opacity="0.8"
          />
          
          {/* Inner "FB" Lettering Glow */}
          <path
            d="M 94,62 L 106,62 L 106,67 L 98,67 L 98,72 L 105,72 L 105,77 L 98,77 L 98,87 L 94,87 Z M 110,62 L 118,62 C 121,62 123,63.5 123,66 C 123,68 122,69 120,69.5 C 122,70 123.5,71.5 123.5,74 C 123.5,76.5 121.5,78 118,78 L 110,78 Z M 114,66 L 114,69 L 117,69 C 118,69 119.5,68.5 119.5,67.5 C 119.5,66.5 118.5,66 117,66 Z M 114,71.5 L 114,74.5 L 118,74.5 C 119,74.5 120,74 120,73 C 120,72 119,71.5 118,71.5 Z"
            fill="#FF4500"
            filter="url(#cyber-glow-orange)"
            transform="scale(0.85) translate(14, 15)"
            opacity="0.9"
          />

          {/* Text: DIGITAL Glow */}
          <text
            x="152"
            y="54"
            fill="#00F0FF"
            fontSize="36"
            fontWeight="900"
            letterSpacing="0.18em"
            fontFamily="system-ui, -apple-system, sans-serif"
            filter="url(#cyber-glow-cyan)"
            opacity="0.75"
          >
            DIGITAL
          </text>

          {/* Text: FORGE BROS Glow */}
          <text
            x="150"
            y="96"
            fill="#FF4500"
            fontSize="40"
            fontWeight="950"
            letterSpacing="0.08em"
            fontFamily="system-ui, -apple-system, sans-serif"
            filter="url(#cyber-glow-orange)"
            opacity="0.75"
          >
            FORGE BROS
          </text>
        </motion.g>

        {/* ========================================================
            SHARP FOREGROUND LAYER (Vivid & Highly Legible)
           ======================================================== */}
        <g>
          {/* Cyan "D" Hexagon Border */}
          <polygon
            points="60,18 96,39 96,81 60,102 24,81 24,39"
            stroke="url(#cyber-grad-cyan)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Technical crosshairs on the left emblem */}
          <circle cx="60" cy="18" r="2.5" fill="#00F0FF" />
          <circle cx="60" cy="102" r="2.5" fill="#00F0FF" />
          
          {/* Inner "D" Letter */}
          <path
            d="M 46,42 L 64,42 C 72,42 76,46 76,54 L 76,66 C 76,74 72,78 64,78 L 46,78 Z M 54,50 L 54,70 L 63,70 C 66,70 68,68 68,64 L 68,56 C 68,52 66,50 63,50 Z"
            fill="#ffffff"
          />

          {/* Orange "FB" Hexagon Border */}
          <polygon
            points="106,50 128,62.5 128,87.5 106,100 84,87.5 84,62.5"
            stroke="url(#cyber-grad-orange)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="106" cy="50" r="1.5" fill="#FF4500" />
          <circle cx="106" cy="100" r="1.5" fill="#FF4500" />
          
          {/* Inner "FB" Lettering */}
          <path
            d="M 94,62 L 106,62 L 106,67 L 98,67 L 98,72 L 105,72 L 105,77 L 98,77 L 98,87 L 94,87 Z M 110,62 L 118,62 C 121,62 123,63.5 123,66 C 123,68 122,69 120,69.5 C 122,70 123.5,71.5 123.5,74 C 123.5,76.5 121.5,78 118,78 L 110,78 Z M 114,66 L 114,69 L 117,69 C 118,69 119.5,68.5 119.5,67.5 C 119.5,66.5 118.5,66 117,66 Z M 114,71.5 L 114,74.5 L 118,74.5 C 119,74.5 120,74 120,73 C 120,72 119,71.5 118,71.5 Z"
            fill="#ffffff"
            transform="scale(0.85) translate(14, 15)"
          />

          {/* Text: DIGITAL */}
          <text
            x="152"
            y="54"
            fill="url(#cyber-grad-cyan)"
            fontSize="36"
            fontWeight="900"
            letterSpacing="0.18em"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            DIGITAL
          </text>

          {/* Text: FORGE BROS */}
          <text
            x="150"
            y="96"
            fill="url(#cyber-grad-orange)"
            fontSize="40"
            fontWeight="950"
            letterSpacing="0.08em"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            FORGE BROS
          </text>
        </g>

        {/* Small tech accent lines on logo corners */}
        <line x1="152" y1="62" x2="290" y2="62" stroke="#00F0FF" strokeWidth="1" opacity="0.6" />
        <circle cx="290" cy="62" r="1.5" fill="#00F0FF" />
      </svg>
    </div>
  )
}
