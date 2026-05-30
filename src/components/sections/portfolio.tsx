"use client"

import { useLanguage } from "@/context/language-provider"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  const { t } = useLanguage()

  return (
    <section id="portfolio" className="py-32 bg-[#020205] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/15 blur-[100px] rounded-full z-0 pointer-events-none" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black mb-4 relative z-10 neon-text-primary drop-shadow-[0_0_15px_rgba(255,69,0,0.45)]"
          >
            {t("portfolio.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto relative z-10"
          >
            {t("portfolio.subtitle")}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          {/* Cyberpunk Bracket Container */}
          <div className="relative p-[2px] rounded-xl overflow-hidden group">
            {/* Animated neon border */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            
            <div className="relative bg-[#06060c]/90 backdrop-blur-md rounded-xl overflow-hidden border border-border/50">
              {/* Cyberpunk Tech UI overlays */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-secondary z-20 pointer-events-none shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-secondary z-20 pointer-events-none shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-secondary z-20 pointer-events-none shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-secondary z-20 pointer-events-none shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-[320px] lg:h-auto overflow-hidden">
                  {/* Scanline Overlay over image */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,240,255,0.06)_50%)] bg-[length:100%_4px] z-10 pointer-events-none mix-blend-screen opacity-50" />
                  
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <div 
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-[#020205]/95 backdrop-blur-sm border border-secondary px-3 py-1 rounded-sm text-secondary text-sm font-bold tracking-widest uppercase shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                    {t("portfolio.projectBadge")}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,240,255,0.02)_25%,rgba(0,240,255,0.02)_50%,transparent_50%,transparent_75%,rgba(0,240,255,0.02)_75%,rgba(0,240,255,0.02)_100%)] bg-[length:20px_20px] pointer-events-none z-0" />
                  
                  <h3 className="text-3.5xl font-black mb-4 relative z-10 text-foreground group-hover:text-primary transition-colors duration-300 glitch-hover">
                    {t("portfolio.flagship.title")}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed relative z-10">
                    {t("portfolio.flagship.desc")}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
                    <div>
                      <div className="text-secondary/90 font-bold text-sm uppercase tracking-wider mb-1">{t("portfolio.stats.traffic")}</div>
                      <div className="text-4xl font-black text-secondary neon-text-secondary">+150%</div>
                    </div>
                    <div>
                      <div className="text-primary/90 font-bold text-sm uppercase tracking-wider mb-1">{t("portfolio.stats.leads")}</div>
                      <div className="text-4xl font-black text-primary neon-text-primary">3x</div>
                    </div>
                  </div>

                  <Button className="w-fit relative z-10 gap-2 border border-primary hover:border-secondary hover:shadow-[0_0_20px_rgba(255,69,0,0.6)] transition-all duration-300" size="lg" asChild>
                    <a href="https://romanpaintingriverside.com" target="_blank" rel="noopener noreferrer">
                      {t("portfolio.flagship.link")} <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
