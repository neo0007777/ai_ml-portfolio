import Navigation from "@/components/Navigation";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden h-screen bg-black"
        style={{ height: "100dvh" }}
      >
        {/* Base Image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
          style={{
            backgroundImage: `url(${BG_IMAGE_2})`,
          }}
        />

        {/* Heading */}
        <div className="absolute top-[18%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
          <h1 className="text-white leading-[0.92] tracking-tight">
            <span
              className="block font-playfair italic font-normal text-6xl sm:text-8xl md:text-9xl hero-anim hero-reveal"
              style={{
                letterSpacing: "-0.04em",
                animationDelay: "0.2s",
              }}
            >
              Architecting
            </span>
            <span
              className="block font-normal text-6xl sm:text-8xl md:text-9xl -mt-2 hero-anim hero-reveal"
              style={{
                letterSpacing: "-0.06em",
                animationDelay: "0.38s",
              }}
            >
              intelligence.
            </span>
          </h1>
        </div>

        {/* Bottom Left Paragraph */}
        <div
          className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[300px] hero-anim hero-fade z-50"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="text-[11px] font-mono font-medium tracking-widest text-orange-400 uppercase block mb-1">
            Focus & Direction
          </span>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
            Bridging deep learning research with production software. Building autonomous agent systems, context retrieval pipelines, and neural models.
          </p>
        </div>

        {/* Bottom Right Block */}
        <div
          className="absolute bottom-10 sm:bottom-16 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[280px] flex flex-col items-start gap-4 hero-anim hero-fade z-50"
          style={{ animationDelay: "0.75s" }}
        >
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
            Exploring inference optimization, multi-modal systems, and scalable AI infrastructure.
          </p>
          <a
            href="/projects"
            className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-6 py-3 rounded-full backdrop-blur-md border border-white/20 transition-all hover:border-white/40"
          >
            Explore Projects →
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator z-50 flex flex-col items-center gap-1 pointer-events-none">
          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Scroll</span>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="text-white/30">
            <path d="M8 0v16M1 9l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Social Icons - Bottom Center */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-50 hero-anim hero-fade" style={{ animationDelay: "1s" }}>
          <a
            href="https://github.com/neo0007777"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all hover:scale-110"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shiva-sharma-8ab069352/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:shivaumj@gmail.com"
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all hover:scale-110"
            title="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all hover:scale-110"
            title="LeetCode"
          >
            <Code2 size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
