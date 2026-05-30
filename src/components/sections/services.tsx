"use client"

import { useLanguage } from "@/context/language-provider"
import { motion } from "framer-motion"
import { MonitorSmartphone, Search, Sparkles, TrendingUp } from "lucide-react"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-primary" />,
      titleKey: "services.1.title",
      descKey: "services.1.desc",
    },
    {
      icon: <Search className="w-10 h-10 text-primary" />,
      titleKey: "services.2.title",
      descKey: "services.2.desc",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      titleKey: "services.3.title",
      descKey: "services.3.desc",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      titleKey: "services.4.title",
      descKey: "services.4.desc",
    },
  ]

  return (
    <section id="services" className="py-32 bg-[#020205] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/15 blur-[100px] rounded-full z-0 pointer-events-none" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black mb-4 relative z-10 neon-text-secondary drop-shadow-[0_0_15px_rgba(0,240,255,0.45)]"
          >
            {t("services.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto relative z-10 font-medium"
          >
            {t("services.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-8 group relative flex flex-col justify-between"
            >
              {/* Corner Brackets */}
              <div className="cyber-corner top-3 left-3 border-t-2 border-l-2 border-secondary/40 group-hover:border-secondary transition-colors duration-300" />
              <div className="cyber-corner top-3 right-3 border-t-2 border-r-2 border-secondary/40 group-hover:border-secondary transition-colors duration-300" />
              <div className="cyber-corner bottom-3 left-3 border-b-2 border-l-2 border-secondary/40 group-hover:border-secondary transition-colors duration-300" />
              <div className="cyber-corner bottom-3 right-3 border-b-2 border-r-2 border-secondary/40 group-hover:border-secondary transition-colors duration-300" />

              {/* Technical diagonal accents inside */}
              <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none" />

              {/* Scanline overlay for card */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,240,255,0.04)_50%)] bg-[length:100%_4px] pointer-events-none z-0" />

              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[#090912]/80 backdrop-blur-md p-4 rounded-lg inline-block border border-border group-hover:border-secondary shadow-[0_0_15px_rgba(0,240,255,0.05)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
                    <div className="text-secondary drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10 text-foreground group-hover:text-secondary transition-colors duration-300 glitch-hover">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {t(service.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
