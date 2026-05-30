"use client"

import * as React from "react"
import Link from "next/link"
import { useLanguage } from "@/context/language-provider"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Flame, Menu, X, Moon, Sun, Languages } from "lucide-react"

import Image from "next/image"
import { motion } from "framer-motion"

export function Navbar() {
  const [mounted, setMounted] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#process", label: t("nav.process") },
    { href: "#portfolio", label: t("nav.portfolio") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#about", label: t("nav.about") },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#020205]/85 backdrop-blur-lg border-b border-secondary/20 shadow-[0_4px_30px_rgba(0,240,255,0.08)] py-1.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center transition-all duration-300 hover:scale-105 relative group">
            {/* Dynamic Forge Back-Glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[60px] bg-gradient-to-r from-secondary/20 via-orange-500/8 to-primary/20 rounded-full blur-[18px] pointer-events-none z-0"
              animate={{
                opacity: [0.5, 0.85, 0.5],
                scale: [0.95, 1.1, 0.95]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Drifting Embers behind Navbar Logo */}
            {mounted && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" suppressHydrationWarning={true}>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-[3px] h-[3px] rounded-full bg-gradient-to-r from-primary to-orange-500 shadow-[0_0_6px_#FF4500]"
                    initial={{
                      x: 40 + Math.random() * 240,
                      y: 55,
                      opacity: 0,
                      scale: 0.5
                    }}
                    animate={{
                      y: [-5, -36],
                      x: [0, Math.random() * 20 - 10, Math.random() * 30 - 15],
                      opacity: [0, 0.9, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: Math.random() * 1.5 + 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>
            )}

            <motion.div
              animate={{ 
                filter: [
                  "drop-shadow(-6px 0px 8px rgba(0, 240, 255, 0.6)) drop-shadow(6px 0px 8px rgba(255, 69, 0, 0.6))",
                  "drop-shadow(-10px 0px 16px rgba(0, 240, 255, 0.95)) drop-shadow(10px 0px 16px rgba(255, 69, 0, 0.95))",
                  "drop-shadow(-6px 0px 8px rgba(0, 240, 255, 0.6)) drop-shadow(6px 0px 8px rgba(255, 69, 0, 0.6))"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center relative z-10"
            >
              <Image 
                src="/images/dfb-logo.png" 
                alt="DigitalForgeBros Logo" 
                width={320} 
                height={96} 
                className="object-contain h-[72px] w-auto"
                style={{
                  mixBlendMode: "screen"
                }}
                priority
                unoptimized
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-border pl-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                title="Toggle Language"
                className="w-9 h-9"
              >
                <Languages className="w-4 h-4" />
                <span className="sr-only">Toggle Language</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button asChild>
                <Link href="#contact">{t("nav.contact")}</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
            >
              <Languages className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-4 px-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground/80 hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
                setIsMobileMenuOpen(false)
              }}
              className="w-full mr-2 justify-center"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
            <Button
              className="w-full ml-2 justify-center"
              onClick={() => {
                setIsMobileMenuOpen(false)
                window.location.href = "#contact"
              }}
            >
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
