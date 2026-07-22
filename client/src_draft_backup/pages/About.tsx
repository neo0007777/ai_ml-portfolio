import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  Sparkles, 
  Bot, 
  Workflow, 
  ArrowUpRight, 
  Code2, 
  Trophy, 
  GitPullRequest, 
  BookOpen, 
  Layers,
  ArrowRight
} from "lucide-react";

export default function About() {
  // Journey flow nodes
  const journeySteps = [
    { title: "Competitive Programming", label: "01", desc: "Algorithmic thinking & performance constraints" },
    { title: "Problem Solving", label: "02", desc: "Dissecting complex challenges into math & code" },
    { title: "Machine Learning", label: "03", desc: "Extracting patterns & statistical inference" },
    { title: "Deep Learning", label: "04", desc: "Neural representations & end-to-end architectures" },
    { title: "Generative AI", label: "05", desc: "LLMs, diffusion models & neural synthesis" },
    { title: "AI Agents", label: "06", desc: "Autonomous reasoning, tool-use & system orchestration" },
  ];

  // Philosophy points
  const beliefs = [
    {
      title: "Think Before Training",
      quote: "I believe understanding data and problem framing is far more critical than blindly chasing larger parameter counts.",
      tag: "Data First"
    },
    {
      title: "Engineering Matters",
      quote: "Great AI isn't just about neural networks; it requires scalable software, low-latency inference, and robust infrastructure.",
      tag: "Systems Thinking"
    },
    {
      title: "Never Stop Learning",
      quote: "Every model deployed and paper implemented should push the boundary of what you understand.",
      tag: "Continuous Growth"
    }
  ];

  // Domain expertise blocks
  const domainAreas = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Supervised & unsupervised statistical modeling, tabular pipelines, ensemble methods, and metric optimization."
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      description: "PyTorch & TensorFlow custom architectures, Transformer mechanisms, optimization algorithms, and gradient dynamics."
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Real-time object detection (YOLO), CNN feature extraction, transfer learning, and image segmentation pipelines."
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Tokenization strategies, semantic embeddings, fine-tuning encoder/decoder models, and sentiment analysis."
    },
    {
      icon: Sparkles,
      title: "LLMs & Generative AI",
      description: "Retrieval-Augmented Generation (RAG), prompt engineering, vector index design, and LLM fine-tuning."
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Autonomous agent workflows, function calling, tool integration, multi-step planning, and memory architectures."
    },
    {
      icon: Workflow,
      title: "MLOps",
      description: "Model packaging with Docker, CI/CD pipelines, experiment tracking, fast inference APIs, and production monitoring."
    }
  ];

  // Pipeline steps
  const processSteps = [
    { step: "01", title: "Research", detail: "Literature review & problem formulation" },
    { step: "02", title: "Prototype", detail: "Fast baseline modeling & validation" },
    { step: "03", title: "Train", detail: "Data curation, architecture tuning & training" },
    { step: "04", title: "Evaluate", detail: "Rigorous benchmarking & edge-case testing" },
    { step: "05", title: "Deploy", detail: "Low-latency API setup & containerization" },
    { step: "06", title: "Iterate", detail: "Telemetry monitoring & feedback loops" }
  ];

  // Exploring tags
  const currentExploring = [
    "Large Language Models",
    "Agentic AI",
    "Multimodal Systems",
    "RAG Architectures",
    "Efficient Fine-tuning",
    "Inference Optimization"
  ];

  // Personal human interests
  const personalInterests = [
    { icon: Code2, title: "Competitive Programming", desc: "Solving algorithmic puzzles under tight speed constraints." },
    { icon: Trophy, title: "Hackathons", desc: "Building complete AI prototypes from scratch in 24 hours." },
    { icon: GitPullRequest, title: "Open Source", desc: "Contributing to ML utilities and maintaining developer tools." },
    { icon: BookOpen, title: "Research Papers", desc: "Reading ArXiv preprints on efficient attention & agent systems." },
    { icon: Layers, title: "Side Projects", desc: "Turning late-night technical ideas into working web software." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-orange-500/30 selection:text-orange-400">
      <Navigation />

      {/* 1. INTRODUCTION / EDITORIAL HERO */}
      <section className="pt-36 pb-24 border-b border-white/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-orange-500 font-medium text-sm tracking-widest uppercase mb-4 block">
              About & Philosophy
            </span>
            <h1 className="font-playfair italic text-5xl sm:text-7xl md:text-8xl leading-[1.05] tracking-tight mb-10 text-white font-normal">
              I build intelligent systems that transform research into real-world products.
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/10"
          >
            <div className="md:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
                The Narrative
              </p>
            </div>
            <div className="md:col-span-8 space-y-6 text-foreground/80 text-lg sm:text-xl font-light leading-relaxed">
              <p>
                My background isn't rooted in theoretical abstraction alone—it began with competitive programming. 
                I spent years dissecting algorithms, optimizing time complexity, and learning to write clean code under strict time pressure.
              </p>
              <p>
                When machine learning emerged, I saw it not as a magical black box, but as a fascinating evolution of problem-solving. 
                Instead of hardcoding rules, we craft systems that learn rules from data. 
              </p>
              <p>
                Today, I focus on bridging the gap between cutting-edge AI research and production-grade software engineering—building 
                systems that are fast, reliable, and genuinely useful.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MY JOURNEY / VISUAL TRAJECTORY */}
      <section className="py-28 border-b border-white/10 bg-white/[0.01]">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">
                Evolution
              </span>
              <h2 className="font-playfair italic text-4xl sm:text-5xl">My Journey</h2>
            </div>
            <p className="text-foreground/60 text-sm max-w-md">
              How a passion for competitive algorithms evolved into engineering autonomous AI agents.
            </p>
          </div>

          {/* Visual Step Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {journeySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white/[0.03] border border-white/10 hover:border-orange-500/40 rounded-xl p-7 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    {step.label}
                  </span>
                  {idx < journeySteps.length - 1 && (
                    <ArrowRight size={16} className="text-white/20 group-hover:text-orange-500 group-hover:translate-x-1 transition-all hidden lg:block" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT I BELIEVE / PHILOSOPHY */}
      <section className="py-28 border-b border-white/10">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">
              Core Principles
            </span>
            <h2 className="font-playfair italic text-4xl sm:text-5xl">What I Believe</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col justify-between bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-orange-500/90 mb-4 block">
                    {item.tag}
                  </span>
                  <h3 className="font-playfair italic text-2xl mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT I WORK ON / DOMAIN EXPERTISE */}
      <section className="py-28 border-b border-white/10 bg-white/[0.01]">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">
                Technical Spectrum
              </span>
              <h2 className="font-playfair italic text-4xl sm:text-5xl">What I Work On</h2>
            </div>
            <p className="text-foreground/60 text-sm max-w-sm">
              Hands-on engineering across the modern artificial intelligence stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainAreas.map((domain, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-white/[0.03] border border-white/10 hover:border-orange-500/30 rounded-xl p-6 transition-all duration-300 hover:bg-white/[0.06]"
              >
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 text-orange-400">
                  <domain.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors">
                  {domain.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {domain.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW I BUILD / HORIZONTAL PROCESS */}
      <section className="py-28 border-b border-white/10">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">
              Workflow
            </span>
            <h2 className="font-playfair italic text-4xl sm:text-5xl mb-4">How I Build</h2>
            <p className="text-foreground/60 text-sm">A systematic, iterative pipeline from initial concept to production monitoring.</p>
          </div>

          {/* Horizontal Process Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((pStep, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-orange-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono text-orange-500 font-bold block mb-3">
                    {pStep.step}
                  </span>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {pStep.title}
                  </h3>
                </div>
                <p className="text-xs text-foreground/60 leading-normal pt-2 border-t border-white/5">
                  {pStep.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MY CURRENT FOCUS */}
      <section className="py-28 border-b border-white/10 bg-white/[0.01]">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">
                Active Research
              </span>
              <h2 className="font-playfair italic text-4xl sm:text-5xl">What I'm Exploring Right Now</h2>
            </div>
            <p className="text-foreground/60 text-sm max-w-xs">
              Topics and technologies currently occupying my experimental time and reading list.
            </p>
          </div>

          {/* Elegant Tag Chips */}
          <div className="flex flex-wrap gap-3">
            {currentExploring.map((topic, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="px-5 py-3 rounded-full bg-white/[0.04] border border-white/15 text-white/90 text-sm font-medium hover:border-orange-500/60 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 cursor-default"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PERSONAL SIDE */}
      <section className="py-28 border-b border-white/10">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">
              Beyond Code
            </span>
            <h2 className="font-playfair italic text-4xl sm:text-5xl">Personal Side</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInterests.map((interest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all"
              >
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-orange-400">
                  <interest.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 text-base">{interest.title}</h3>
                  <p className="text-xs text-foreground/60 leading-relaxed">{interest.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="container max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair italic text-5xl sm:text-6xl md:text-7xl mb-8 leading-tight">
              Let's build something meaningful together.
            </h2>
            <p className="text-foreground/70 text-lg max-w-xl mx-auto mb-10">
              Whether you have an ambitious AI project, a research challenge, or want to collaborate, feel free to reach out.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#e8702a] hover:bg-[#d2611f] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#e8702a]/20 flex items-center gap-2 text-sm"
              >
                Get in Touch
                <ArrowUpRight size={18} />
              </Link>
              <a
                href="https://github.com/neo0007777"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm border border-white/10"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
