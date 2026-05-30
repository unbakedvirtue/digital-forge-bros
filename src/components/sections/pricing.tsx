"use client"

import { useLanguage } from "@/context/language-provider"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function Pricing() {
  const { t } = useLanguage()

  const tiers = [
    {
      nameKey: "pricing.tier1.name",
      priceKey: "pricing.tier1.price",
      descKey: "pricing.tier1.desc",
      features: [
        "5-Page Custom Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Support"
      ],
      popular: false,
    },
    {
      nameKey: "pricing.tier2.name",
      priceKey: "pricing.tier2.price",
      descKey: "pricing.tier2.desc",
      features: [
        "Up to 10-Page Website",
        "Advanced SEO & Local Ranking",
        "High-Converting Funnel",
        "AI Chatbot Integration",
        "Bilingual Setup (EN/ES)",
        "3 Months Support"
      ],
      popular: true,
    },
    {
      nameKey: "pricing.tier3.name",
      priceKey: "pricing.tier3.price",
      descKey: "pricing.tier3.desc",
      features: [
        "Unlimited Pages",
        "Complete Brand Identity",
        "Custom Lead Dashboards",
        "Advanced Automations",
        "Priority 24/7 Support",
        "Ongoing Monthly Maintenance"
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-32 bg-[#020205]/40 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/15 blur-[100px] rounded-full z-0 pointer-events-none" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black mb-4 relative z-10 neon-text-primary drop-shadow-[0_0_15px_rgba(255,69,0,0.45)]"
          >
            {t("pricing.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto relative z-10"
          >
            {t("pricing.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 flex flex-col group overflow-hidden ${
                tier.popular 
                  ? "bg-[#06060c]/75 backdrop-blur-lg rounded-xl md:-translate-y-4 shadow-[0_0_35px_rgba(0,240,255,0.18)]" 
                  : "cyber-card"
              }`}
            >
              {/* Popular Tier Dual Glow Border */}
              {tier.popular && (
                <div className="absolute inset-0 p-[2.5px] bg-gradient-to-r from-secondary via-primary to-secondary rounded-xl z-0 animate-pulse pointer-events-none">
                  <div className="absolute inset-0 bg-[#06060c]/95 rounded-xl" />
                </div>
              )}

              {/* Standard Tier Cyber Corners */}
              {!tier.popular && (
                <>
                  <div className="cyber-corner top-3 left-3 border-t-2 border-l-2 border-secondary/30 group-hover:border-secondary transition-colors duration-300" />
                  <div className="cyber-corner top-3 right-3 border-t-2 border-r-2 border-secondary/30 group-hover:border-secondary transition-colors duration-300" />
                  <div className="cyber-corner bottom-3 left-3 border-b-2 border-l-2 border-secondary/30 group-hover:border-secondary transition-colors duration-300" />
                  <div className="cyber-corner bottom-3 right-3 border-b-2 border-r-2 border-secondary/30 group-hover:border-secondary transition-colors duration-300" />
                </>
              )}
              
              {/* Scanlines inside card */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,240,255,0.03)_50%)] bg-[length:100%_4px] pointer-events-none z-0" />

              <div className="relative z-10 flex-1">
                {tier.popular && (
                  <div className="absolute -top-4 -right-4">
                    <span className="bg-gradient-to-r from-secondary via-primary to-secondary text-primary-foreground text-xs font-black uppercase tracking-wider py-1 px-3 rounded-bl-xl shadow-[0_0_15px_rgba(255,69,0,0.6)] animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-8">
                  <h3 className={`text-2xl font-black mb-2 uppercase tracking-wide glitch-hover ${tier.popular ? "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]" : "text-foreground group-hover:text-secondary transition-colors duration-300"}`}>
                    {t(tier.nameKey)}
                  </h3>
                  <p className="text-muted-foreground min-h-[48px] text-sm">{t(tier.descKey)}</p>
                </div>
                <div className="mb-8 flex items-baseline gap-2">
                  <span className={`text-5xl font-black ${tier.popular ? "text-secondary drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]" : "text-foreground group-hover:text-primary transition-colors duration-300"}`}>{t(tier.priceKey)}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${tier.popular ? "text-secondary drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]" : "text-primary"}`} />
                      <span className="text-foreground/90 font-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button 
                className={`w-full relative z-10 ${tier.popular ? "bg-gradient-to-r from-secondary to-primary border-none shadow-[0_0_20px_rgba(255,69,0,0.5)] hover:shadow-[0_0_30px_rgba(255,69,0,0.8)] text-white hover:scale-[1.02] transition-transform" : "hover:border-secondary transition-colors hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"}`}
                variant={tier.popular ? "default" : "outline"} 
                size="lg"
                asChild
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
