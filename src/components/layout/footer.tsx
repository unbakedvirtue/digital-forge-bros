"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/language-provider"
import { Flame } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6 transition-transform duration-300 hover:scale-105">
              <motion.div
                animate={{ 
                  filter: [
                    "drop-shadow(-5px 0px 6px rgba(0, 240, 255, 0.5)) drop-shadow(5px 0px 6px rgba(255, 69, 0, 0.5))",
                    "drop-shadow(-7px 0px 10px rgba(0, 240, 255, 0.8)) drop-shadow(7px 0px 10px rgba(255, 69, 0, 0.8))",
                    "drop-shadow(-5px 0px 6px rgba(0, 240, 255, 0.5)) drop-shadow(5px 0px 6px rgba(255, 69, 0, 0.5))"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image 
                  src="/images/dfb-logo.png" 
                  alt="DigitalForgeBros Logo" 
                  width={160} 
                  height={48} 
                  className="object-contain h-9 w-auto"
                  style={{
                    mixBlendMode: "screen"
                  }}
                  priority
                  unoptimized
                />
              </motion.div>
            </Link>
            <p className="text-muted-foreground mb-6">
              {t("hero.subheadline")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.process")}
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.pricing")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact Us</h3>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>Riverside, CA 92501</p>
              <p>hello@digitalforgebros.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DigitalForgeBros. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Forged with <Flame className="w-4 h-4 text-primary" /> in California
          </p>
        </div>
      </div>
    </footer>
  )
}
