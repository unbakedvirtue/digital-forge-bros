"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.portfolio": "Portfolio",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Hero
    "hero.headline": "We Forge Websites That Win Customers",
    "hero.subheadline": "AI-powered, lightning-fast websites for local service businesses. Built stronger, faster, and more profitable.",
    "hero.cta.primary": "See Our Work",
    "hero.cta.secondary": "Start Your Forge",

    // Services
    "services.title": "Our Forge Capabilities",
    "services.subtitle": "Premium digital solutions crafted for maximum impact.",
    "services.1.title": "Custom Web Design",
    "services.1.desc": "Stunning, high-performance websites tailored to your brand.",
    "services.2.title": "SEO Optimization",
    "services.2.desc": "Rank higher and dominate your local search market.",
    "services.3.title": "AI Integrations",
    "services.3.desc": "Automate customer interactions and save valuable time.",
    "services.4.title": "Lead Generation",
    "services.4.desc": "Conversion-optimized funnels that turn visitors into clients.",

    // Process
    "process.title": "The Forging Process",
    "process.subtitle": "A proven, 4-step system to build your digital presence.",
    "process.1.title": "Discovery",
    "process.1.desc": "We analyze your business, goals, and competitors.",
    "process.2.title": "Design",
    "process.2.desc": "Drafting the blueprints and visual aesthetics.",
    "process.3.title": "Forge",
    "process.3.desc": "Building the website with cutting-edge technology.",
    "process.4.title": "Launch",
    "process.4.desc": "Deploying your site and scaling your digital reach.",

    // Portfolio
    "portfolio.title": "Our Masterpieces",
    "portfolio.subtitle": "Real results for real local businesses.",
    "portfolio.flagship.title": "Roman Painting LLC",
    "portfolio.flagship.desc": "A premium, bilingual painting contractor website optimized for the Inland Empire market.",
    "portfolio.flagship.link": "Visit Website",

    // Pricing
    "pricing.title": "Transparent Pricing",
    "pricing.subtitle": "High-end value without the agency bloat.",
    "pricing.tier1.name": "Starter Forge",
    "pricing.tier1.price": "$1,000",
    "pricing.tier1.desc": "Perfect for new local businesses.",
    "pricing.tier2.name": "Standard Forge",
    "pricing.tier2.price": "$1,500",
    "pricing.tier2.desc": "For established businesses ready to scale.",
    "pricing.tier3.name": "Premium Forge",
    "pricing.tier3.price": "$2,000",
    "pricing.tier3.desc": "Complete digital dominance and automation.",

    // About
    "about.title": "Who We Are",
    "about.text": "At DigitalForgeBros, we believe your website should be your hardest-working employee. We blend industrial precision with modern technology to craft digital experiences that look premium and perform relentlessly. We are the blacksmiths of the modern web.",

    // Contact
    "contact.title": "Ready to Forge?",
    "contact.subtitle": "Let's build something exceptional together.",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.message": "Project Details",
    "contact.form.submit": "Send Message",
  },
  es: {
    // Nav
    "nav.services": "Servicios",
    "nav.process": "Proceso",
    "nav.portfolio": "Portafolio",
    "nav.pricing": "Precios",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    
    // Hero
    "hero.headline": "Forjamos Sitios Web Que Ganan Clientes",
    "hero.subheadline": "Sitios web impulsados por IA, ultrarrápidos para negocios locales. Construidos más fuertes, rápidos y rentables.",
    "hero.cta.primary": "Ver Nuestro Trabajo",
    "hero.cta.secondary": "Inicia Tu Forja",

    // Services
    "services.title": "Nuestras Capacidades de Forja",
    "services.subtitle": "Soluciones digitales premium diseñadas para el máximo impacto.",
    "services.1.title": "Diseño Web Personalizado",
    "services.1.desc": "Sitios web impresionantes y de alto rendimiento adaptados a tu marca.",
    "services.2.title": "Optimización SEO",
    "services.2.desc": "Posiciónate más alto y domina tu mercado local de búsqueda.",
    "services.3.title": "Integraciones de IA",
    "services.3.desc": "Automatiza las interacciones con los clientes y ahorra tiempo valioso.",
    "services.4.title": "Generación de Leads",
    "services.4.desc": "Embudos optimizados para conversión que convierten visitantes en clientes.",

    // Process
    "process.title": "El Proceso de Forja",
    "process.subtitle": "Un sistema probado de 4 pasos para construir tu presencia digital.",
    "process.1.title": "Descubrimiento",
    "process.1.desc": "Analizamos tu negocio, objetivos y competidores.",
    "process.2.title": "Diseño",
    "process.2.desc": "Redactando los planos y la estética visual.",
    "process.3.title": "Forja",
    "process.3.desc": "Construyendo el sitio web con tecnología de punta.",
    "process.4.title": "Lanzamiento",
    "process.4.desc": "Desplegando tu sitio y escalando tu alcance digital.",

    // Portfolio
    "portfolio.title": "Nuestras Obras Maestras",
    "portfolio.subtitle": "Resultados reales para negocios locales reales.",
    "portfolio.flagship.title": "Roman Painting LLC",
    "portfolio.flagship.desc": "Un sitio web premium y bilingüe para contratistas de pintura optimizado para el mercado de Inland Empire.",
    "portfolio.flagship.link": "Visitar Sitio",

    // Pricing
    "pricing.title": "Precios Transparentes",
    "pricing.subtitle": "Valor de alta gama sin el exceso de agencia.",
    "pricing.tier1.name": "Forja Starter",
    "pricing.tier1.price": "$1,000",
    "pricing.tier1.desc": "Perfecto para nuevos negocios locales.",
    "pricing.tier2.name": "Forja Standard",
    "pricing.tier2.price": "$1,500",
    "pricing.tier2.desc": "Para negocios establecidos listos para escalar.",
    "pricing.tier3.name": "Forja Premium",
    "pricing.tier3.price": "$2,000",
    "pricing.tier3.desc": "Dominio digital completo y automatización.",

    // About
    "about.title": "Quiénes Somos",
    "about.text": "En DigitalForgeBros, creemos que tu sitio web debe ser tu empleado más trabajador. Combinamos precisión industrial con tecnología moderna para crear experiencias digitales con aspecto premium y rendimiento implacable. Somos los herreros de la web moderna.",

    // Contact
    "contact.title": "¿Listo para Forjar?",
    "contact.subtitle": "Construyamos algo excepcional juntos.",
    "contact.form.name": "Tu Nombre",
    "contact.form.email": "Correo Electrónico",
    "contact.form.message": "Detalles del Proyecto",
    "contact.form.submit": "Enviar Mensaje",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "en" || savedLang === "es")) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
