"use client"

import { useLanguage } from "@/context/language-provider"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#020205]">
      {/* High-End Subtle Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.24] mix-blend-screen" 
          style={{ backgroundImage: "url('/images/theme.jpg')" }}
        />
        {/* Deep black overlays to soften the background and keep the text sharp */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#020205]/75 to-[#020205] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,#000_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-transparent to-[#020205]" />
      </div>

      {/* Cyberpunk Tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.06)_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_25%,transparent_100%)]" />
      </div>

      {/* Cyberpunk Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-secondary/8 rounded-[100%] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[350px] bg-primary/8 rounded-full blur-[110px] pointer-events-none" />

      <div className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* Large Central Logo with Clean Direct Glows and Forge Fire Effects */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 mt-12 md:mt-0 relative w-full max-w-[800px] flex items-center justify-center py-6"
        >
          {/* Pulsing Forge Back-Glow (Fire/Cyan Gradient) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] md:w-[600px] md:h-[220px] bg-gradient-to-r from-secondary/15 via-orange-500/10 to-primary/20 rounded-full blur-[45px] pointer-events-none z-0"
            animate={{
              scale: [1, 1.15, 0.98, 1.08, 1],
              opacity: [0.55, 0.85, 0.6, 0.9, 0.55],
              rotate: [0, 2, -1, 1, 0]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Drifting Sparks/Embers rising behind the Hero Logo */}
          {mounted && (
            <div className="absolute -top-40 -bottom-20 left-0 right-0 pointer-events-none overflow-visible z-0" suppressHydrationWarning={true}>
              {[...Array(28)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500 shadow-[0_0_15px_rgba(255,69,0,0.85)]"
                  initial={{
                    x: 60 + Math.random() * 680,
                    y: 280,
                    opacity: 0,
                    scale: Math.random() * 0.8 + 0.4
                  }}
                  animate={{
                    y: [280, -60],
                    x: [0, Math.random() * 60 - 30, Math.random() * 120 - 60, Math.random() * 180 - 90],
                    opacity: [0, 0.95, 0.6, 0],
                    scale: [0.5, 1.3, 0.5]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 3.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: Math.random() * 3
                  }}
                  style={{
                    left: `${6 + Math.random() * 88}%`
                  }}
                />
              ))}
            </div>
          )}

          <motion.div
            animate={{ 
              filter: [
                "drop-shadow(-15px 0px 20px rgba(0, 240, 255, 0.7)) drop-shadow(15px 0px 20px rgba(255, 69, 0, 0.7))",
                "drop-shadow(-28px 0px 40px rgba(0, 240, 255, 0.98)) drop-shadow(28px 0px 40px rgba(255, 69, 0, 0.98))",
                "drop-shadow(-15px 0px 20px rgba(0, 240, 255, 0.7)) drop-shadow(15px 0px 20px rgba(255, 69, 0, 0.7))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image 
              src="/images/dfb-logo.png" 
              alt="DigitalForgeBros Logo" 
              width={800}
              height={250}
              className="object-contain h-[190px] md:h-[300px] w-auto"
              style={{
                mixBlendMode: "screen"
              }}
              priority
              unoptimized
            />
          </motion.div>

          {/* Drifting Sparks/Embers rising OVER the Hero Logo */}
          {mounted && (
            <div className="absolute -top-40 -bottom-20 left-0 right-0 pointer-events-none overflow-visible z-20" suppressHydrationWarning={true}>
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={`front-${i}`}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 shadow-[0_0_18px_#FFA500,0_0_30px_#FF4500]"
                  initial={{
                    x: 80 + Math.random() * 640,
                    y: 270,
                    opacity: 0,
                    scale: Math.random() * 0.7 + 0.5
                  }}
                  animate={{
                    y: [270, -50],
                    x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50, Math.random() * 150 - 75],
                    opacity: [0, 0.98, 0.65, 0],
                    scale: [0.5, 1.4, 0.5]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 3.2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: Math.random() * 2.5
                  }}
                  style={{
                    left: `${10 + Math.random() * 80}%`
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[800px] text-lg md:text-2xl text-gray-300 mb-10 font-medium leading-relaxed drop-shadow-md"
        >
          {t("hero.subheadline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Button size="lg" className="text-lg px-8 h-14 w-full sm:w-auto shadow-[0_0_20px_rgba(255,69,0,0.5)] hover:shadow-[0_0_30px_rgba(255,69,0,0.8)] border border-primary/50" asChild>
            <Link href="#portfolio">{t("hero.cta.primary")}</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 h-14 w-full sm:w-auto border-secondary/50 text-secondary hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]" asChild>
            <Link href="#contact">{t("hero.cta.secondary")}</Link>
          </Button>
        </motion.div>
      </div>

      {/* Digital Data Particles */}
      {mounted && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden mix-blend-screen">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-3 rounded-[1px] ${i % 2 === 0 ? 'bg-secondary/70' : 'bg-primary/70'} blur-[0.5px]`}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
                opacity: 0
              }}
              animate={{
                y: -100,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
