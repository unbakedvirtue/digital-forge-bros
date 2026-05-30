"use client"

import { useLanguage } from "@/context/language-provider"
import { motion } from "framer-motion"
import { Search, PenTool, Hammer, Rocket } from "lucide-react"

export function Process() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: <Search className="w-8 h-8 text-primary-foreground" />,
      titleKey: "process.1.title",
      descKey: "process.1.desc",
    },
    {
      icon: <PenTool className="w-8 h-8 text-primary-foreground" />,
      titleKey: "process.2.title",
      descKey: "process.2.desc",
    },
    {
      icon: <Hammer className="w-8 h-8 text-primary-foreground" />,
      titleKey: "process.3.title",
      descKey: "process.3.desc",
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary-foreground" />,
      titleKey: "process.4.title",
      descKey: "process.4.desc",
    },
  ]

  return (
    <section id="process" className="py-32 bg-[#020205]/40 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black mb-4 relative z-10 neon-text-primary drop-shadow-[0_0_15px_rgba(255,69,0,0.45)]"
          >
            {t("process.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto relative z-10"
          >
            {t("process.subtitle")}
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Circuit Trace - Infinitely Looping Energy Grid */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-[2px] bg-border/40 -translate-y-1/2 z-0 overflow-hidden rounded-full">
            <motion.div 
              className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-secondary to-primary shadow-[0_0_15px_rgba(0,240,255,0.8)]"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center group"
              >
                {/* Circuit Node Container */}
                <div className="relative z-10 w-20 h-20 mx-auto bg-[#090912]/95 backdrop-blur-md border border-border rounded-lg flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,69,0,0.15)] group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(255,69,0,0.5)] transition-all duration-300">
                  <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Glowing Node Accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary group-hover:border-secondary transition-colors" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary group-hover:border-secondary transition-colors" />
                  
                  <div className="text-foreground group-hover:text-primary transition-colors drop-shadow-[0_0_8px_rgba(255,69,0,0.6)]">
                    {step.icon}
                  </div>
                  {/* Circuit connection point */}
                  <div className="absolute top-1/2 -left-2 w-2 h-[2px] bg-primary hidden md:block" />
                  <div className="absolute top-1/2 -right-2 w-2 h-[2px] bg-primary hidden md:block" />
                </div>

                {/* Glass Cyber Card */}
                <div className="cyber-card p-6 min-h-[220px] group-hover:border-secondary transition-all duration-300 relative overflow-hidden flex flex-col items-center">
                  {/* Tech decoration corners */}
                  <div className="cyber-corner top-2 left-2 border-t border-l border-secondary/20 group-hover:border-secondary/60" />
                  <div className="cyber-corner bottom-2 right-2 border-b border-r border-secondary/20 group-hover:border-secondary/60" />
                  
                  <div className="text-secondary font-black text-xl mb-2 drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]">0{index + 1}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 glitch-hover">{t(step.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(step.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
