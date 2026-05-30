import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Portfolio } from "@/components/sections/portfolio"
import { Pricing } from "@/components/sections/pricing"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative">
        {/* Premium Cybernetic Vertical Sidebars (Visible on LG screens) */}
        <div className="hidden lg:block fixed left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-secondary/15 to-transparent z-40 pointer-events-none">
          <div 
            className="absolute top-1/4 -left-2 text-[9px] font-black tracking-widest text-secondary/35 uppercase select-none"
            style={{ writingMode: "vertical-lr" }}
          >
            Digital Forge Systems
          </div>
          <div className="absolute top-[40%] left-[-3px] w-1.5 h-1.5 rounded-full bg-secondary/50 animate-pulse shadow-[0_0_8px_#00F0FF]" />
          <div 
            className="absolute bottom-1/4 -left-2 text-[9px] font-black tracking-widest text-muted-foreground/35 select-none"
            style={{ writingMode: "vertical-lr" }}
          >
            [SYS_ACTIVE_v2.6]
          </div>
        </div>

        <div className="hidden lg:block fixed right-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/15 to-transparent z-40 pointer-events-none">
          <div 
            className="absolute top-1/3 -right-2 text-[9px] font-black tracking-widest text-primary/35 uppercase select-none"
            style={{ writingMode: "vertical-lr" }}
          >
            BLACKSMITH_WEB_ENGINE
          </div>
          <div className="absolute top-[60%] right-[-3px] w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse shadow-[0_0_8px_#FF4500]" />
          <div 
            className="absolute bottom-1/3 -right-2 text-[9px] font-black tracking-widest text-muted-foreground/35 select-none"
            style={{ writingMode: "vertical-lr" }}
          >
            [SEC_TRC_ON]
          </div>
        </div>

        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
