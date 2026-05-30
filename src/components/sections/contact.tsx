"use client"

import { useLanguage } from "@/context/language-provider"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-32 bg-[#020205] relative overflow-hidden">
      {/* Decorative Forge Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[850px] h-[450px] bg-primary/20 blur-[130px] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/15 blur-[100px] rounded-full z-0 pointer-events-none" />
          
          <div className="text-center mb-16 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-black mb-4 neon-text-primary uppercase drop-shadow-[0_0_15px_rgba(255,69,0,0.45)]"
            >
              {t("contact.title")}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground font-medium"
            >
              {t("contact.subtitle")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="cyber-card p-8 md:p-12 relative z-10 shadow-[0_0_30px_rgba(255,69,0,0.1)] border-primary/20 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(255,69,0,0.2)]"
          >
            {/* Cyber Brackets */}
            <div className="cyber-corner top-3 left-3 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors duration-300" />
            <div className="cyber-corner top-3 right-3 border-t-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors duration-300" />
            <div className="cyber-corner bottom-3 left-3 border-b-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors duration-300" />
            <div className="cyber-corner bottom-3 right-3 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors duration-300" />

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input 
                    placeholder={t("contact.form.name")} 
                    className="bg-[#05050a]/90 border-border/80 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] shadow-[inset_0_1px_5px_rgba(0,0,0,0.8)] rounded-md transition-all h-12 text-foreground placeholder:text-muted-foreground/60" 
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    placeholder={t("contact.form.email")} 
                    className="bg-[#05050a]/90 border-border/80 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] shadow-[inset_0_1px_5px_rgba(0,0,0,0.8)] rounded-md transition-all h-12 text-foreground placeholder:text-muted-foreground/60" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground/90">
                  {t("contact.form.message")}
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  className="min-h-[160px] bg-[#05050a]/90 border-border/80 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] shadow-[inset_0_1px_5px_rgba(0,0,0,0.8)] rounded-md transition-all text-foreground placeholder:text-muted-foreground/60 resize-y"
                />
              </div>
              <Button size="lg" className="w-full h-14 text-lg mt-4 group bg-gradient-to-r from-primary to-orange-600 border-none shadow-[0_0_20px_rgba(255,69,0,0.4)] hover:shadow-[0_0_30px_rgba(255,69,0,0.8)] text-white transition-all duration-300 hover:scale-[1.01]">
                <span className="font-extrabold tracking-wider">{t("contact.form.submit")}</span>
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
