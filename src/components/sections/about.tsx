"use client"

import { useLanguage } from "@/context/language-provider"
import { motion } from "framer-motion"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-32 bg-[#020205] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/15 blur-[100px] rounded-full z-0 pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10 neon-text-secondary drop-shadow-[0_0_15px_rgba(0,240,255,0.45)]">{t("about.title")}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 relative z-10 font-medium">
              {t("about.text")}
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed relative z-10">
              {t("about.text").split(".")[0]}...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-border group"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-30 pointer-events-none z-20" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
            
            {/* Cyberpunk UI Corner Brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary z-30 pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary z-30 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary z-30 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary z-30 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
