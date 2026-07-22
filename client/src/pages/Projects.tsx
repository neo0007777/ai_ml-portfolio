import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Github, ArrowUpRight, Terminal } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  tags: string[];
  techStack: string[];
  github?: string;
  demo?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Projects() {
  const projects: Project[] = [
    {
      id: "1",
      title: "FarmSathi",
      category: "AgriTech & GenAI",
      description: "AI-powered agricultural advisory platform delivering trustworthy data to smallholder farmers.",
      problem: "Smallholder farmers often struggle to access reliable agricultural information spread across weather services, mandi prices, government schemes, and expert crop advisory. Traditional chatbots also generate hallucinated responses that cannot be trusted for farming decisions.",
      solution: "Built an AI-powered agricultural advisory platform using LLMs + RAG with Groq (Llama 3) and Pinecone/Qdrant vector search. Integrated live government APIs, weather forecasts, mandi prices, and crop disease diagnosis into a unified farmer dashboard. Designed a modular FastAPI + React architecture for scalable agricultural use cases.",
      tags: ["AgriTech", "GenAI", "RAG"],
      techStack: ["Groq (Llama 3)", "RAG", "FastAPI", "React", "Pinecone/Qdrant", "Government APIs"],
      github: "https://github.com/neo0007777/FarmSathi",
    },
    {
      id: "2",
      title: "NyayaSetu",
      category: "LegalTech & RAG",
      description: "AI-powered legal assistant with citation-grounded retrieval and automated document drafting.",
      problem: "Legal professionals spend significant time searching thousands of court judgments and drafting repetitive legal documents while ensuring every response is backed by authentic legal citations.",
      solution: "Developed an AI-powered legal assistant using a citation-grounded RAG pipeline with Qdrant vector search over thousands of Indian court judgments. Built automated document generation using 1,800+ legal templates and engineered a hybrid retrieval system combining Groq API and Ollama for seamless online/offline inference. Architected the platform with FastAPI and React using modular service layers for easy domain expansion.",
      tags: ["LegalTech", "GenAI", "Citation-RAG"],
      techStack: ["Groq", "Ollama", "RAG", "Qdrant", "FastAPI", "React"],
      github: "https://github.com/raghav775/Nyayasetu-clean",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-orange-500/30 selection:text-orange-400 relative">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-36 pb-24 border-b border-white/10 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="container max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-3 block"
            >
              Systems & Artifacts
            </motion.span>
            <h1 className="font-playfair italic text-5xl sm:text-7xl font-normal leading-tight mb-6">
              Selected Works
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-foreground/80 text-lg sm:text-xl max-w-2xl font-light leading-relaxed"
            >
              A curated selection of machine learning implementations, computer vision pipelines, and language model applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] } }}
                className="bg-white/[0.03] border border-white/10 hover:border-orange-500/30 rounded-2xl overflow-hidden transition-colors duration-300 flex flex-col justify-between group"
                style={{ willChange: "transform" }}
              >
                <div>
                  {/* Top Bar Header */}
                  <div className="bg-white/[0.02] border-b border-white/10 px-6 py-4 flex items-center justify-between">
                    <span className="text-xs font-mono text-orange-400 uppercase tracking-wider font-medium">
                      {project.category}
                    </span>
                    <Terminal size={14} className="text-white/30 group-hover:text-orange-400/50 transition-colors duration-300" />
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/80 mb-6 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Problem & Solution */}
                    <div className="space-y-4 mb-6 pt-4 border-t border-white/5 text-xs">
                      <div>
                        <span className="text-orange-400 font-mono uppercase tracking-wider block mb-1 font-semibold">
                          Challenge
                        </span>
                        <p className="text-foreground/70 leading-relaxed font-light">{project.problem}</p>
                      </div>
                      <div>
                        <span className="text-orange-400 font-mono uppercase tracking-wider block mb-1 font-semibold">
                          Architecture
                        </span>
                        <p className="text-foreground/70 leading-relaxed font-light">{project.solution}</p>
                      </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="tag-chip px-2.5 py-1 bg-white/5 rounded text-[11px] font-mono text-foreground/70 border border-white/5 hover:border-orange-500/30 hover:text-orange-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link Bar */}
                <div className="px-7 py-4 bg-white/[0.01] border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-[10px] uppercase font-mono text-white/40">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-orange-400 transition-colors duration-200 group/link"
                    >
                      <Github size={14} />
                      <span className="underline-grow">Repository</span>
                      <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
