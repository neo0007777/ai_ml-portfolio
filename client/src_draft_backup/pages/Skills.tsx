import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Database, 
  GitBranch, 
  Server, 
  Brain, 
  Cpu, 
  Sparkles, 
  Eye, 
  Trophy, 
  Award, 
  CheckCircle2, 
  Layers, 
  Bot, 
  FileCode2, 
  Boxes, 
  Workflow, 
  Flame,
  ArrowUpRight
} from "lucide-react";

export default function Skills() {
  // Programming core items
  const programmingLanguages = [
    {
      name: "Python",
      icon: Code2,
      tag: "Core Language",
      status: "Experienced in",
      description: "My primary tool for competitive programming, algorithm design, machine learning pipelines, and backend automation.",
      projects: ["RAG Chatbot", "YOLO Detection", "LSTM Forecaster"]
    },
    {
      name: "C++",
      icon: Terminal,
      tag: "Competitive Coding",
      status: "Experienced in",
      description: "Utilized for competitive programming, data structures implementation, and low-level algorithmic problem solving under tight time limits.",
      projects: ["200+ LeetCode / Codeforces Problems"]
    },
    {
      name: "SQL",
      icon: Database,
      tag: "Databases",
      status: "Comfortable using",
      description: "Structured querying, relational data manipulation, schema management, and data analysis pipelines.",
      projects: ["Recommendation Engine DB", "Tabular Datasets"]
    },
    {
      name: "Git",
      icon: GitBranch,
      tag: "Version Control",
      status: "Experienced in",
      description: "Source code management, feature branching workflows, code reviews, and open-source contributions on GitHub.",
      projects: ["Open Source PRs", "Team Repositories"]
    },
    {
      name: "Linux",
      icon: Server,
      tag: "Environment",
      status: "Comfortable using",
      description: "Command-line navigation, shell scripting, environment configuration, and running ML training scripts in Unix environments.",
      projects: ["Docker Environments", "Scripting & Tooling"]
    }
  ];

  // AI & ML sub-categories
  const aiCategories = [
    {
      title: "Machine Learning",
      subtitle: "Statistical learning & data manipulation",
      icon: Brain,
      items: [
        { name: "Scikit-learn", status: "Experienced in", note: "Classification, regression & model evaluation" },
        { name: "NumPy & Pandas", status: "Experienced in", note: "High-performance vector operations & data cleaning" },
        { name: "Matplotlib", status: "Comfortable using", note: "Exploratory data visualization & loss plotting" },
        { name: "XGBoost", status: "Experienced in", note: "Gradient boosted trees for tabular benchmarking" }
      ]
    },
    {
      title: "Deep Learning",
      subtitle: "Neural network architectures",
      icon: Cpu,
      items: [
        { name: "PyTorch", status: "Experienced in", note: "Custom tensors, autograd, model training loops" },
        { name: "TensorFlow", status: "Comfortable using", note: "Sequential models & transfer learning" },
        { name: "CNNs", status: "Experienced in", note: "Image classification & spatial feature extraction" },
        { name: "Transformers", status: "Currently Exploring", note: "Self-attention mechanisms & token processing" }
      ]
    },
    {
      title: "Generative AI",
      subtitle: "Language models & agentic systems",
      icon: Sparkles,
      items: [
        { name: "LangChain", status: "Building projects with", note: "Prompt chaining & retrieval component wiring" },
        { name: "Hugging Face", status: "Comfortable using", note: "Pre-trained model loading & dataset hub" },
        { name: "OpenAI API", status: "Experienced in", note: "Embeddings generation & function calling" },
        { name: "RAG Architectures", status: "Building projects with", note: "Vector stores, chunking & context retrieval" },
        { name: "AI Agents", status: "Currently Exploring", note: "Tool execution & autonomous planning" }
      ]
    },
    {
      title: "Computer Vision",
      subtitle: "Visual perception & detection",
      icon: Eye,
      items: [
        { name: "YOLO Object Detection", status: "Building projects with", note: "Real-time bounding box detection & video streams" },
        { name: "ResNet Pipeline", status: "Comfortable using", note: "Medical image classification & transfer learning" },
        { name: "OpenCV", status: "Comfortable using", note: "Image preprocessing & frame extraction" }
      ]
    }
  ];

  // Hackathons
  const hackathons = [
    {
      place: "🥈 Runner-up",
      event: "IIT Roorkee Frontend Development Hackathon",
      desc: "Built a pixel-perfect implementation from a complex Figma design under strict time constraints.",
      badge: "IIT Roorkee"
    },
    {
      place: "🥈 Runner-up",
      event: "IIIT Delhi Hackathon",
      desc: "Collaborated in a competitive development challenge and secured second place with a working software prototype.",
      badge: "IIIT Delhi"
    },
    {
      place: "🥈 Runner-up",
      event: "Thapar University Hackathon",
      desc: "Recognized for innovative problem-solving and rapid technical execution during a 24-hour sprint.",
      badge: "Thapar University"
    }
  ];

  // What I'm Building
  const buildingItems = [
    { title: "AI Applications", desc: "Intelligent interactive software powered by machine learning backends." },
    { title: "LLM-based Tools", desc: "RAG systems, document assistants, and context-aware conversational bots." },
    { title: "Computer Vision Projects", desc: "Real-time object detection and image classification pipelines." },
    { title: "Data Analysis", desc: "Exploratory data analysis, statistical insights, and feature engineering." },
    { title: "Automation", desc: "Scripting repetitive workflows, dataset preprocessing, and API integrations." },
    { title: "Research Projects", desc: "Implementing baseline paper models and testing neural network concepts." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-orange-500/30 selection:text-orange-400">
      <Navigation />

      {/* SECTION 1: HERO / FLOATING SPOTLIGHT CARDS */}
      <section className="pt-36 pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-3 block">
              Capabilities & Tools
            </span>
            <h1 className="font-playfair italic text-5xl sm:text-7xl font-normal leading-tight mb-6">
              My Technical Toolkit
            </h1>
            <p className="text-foreground/80 text-lg sm:text-xl max-w-2xl font-light leading-relaxed">
              I enjoy building intelligent systems by combining software engineering, machine learning, and modern AI frameworks.
            </p>
          </motion.div>

          {/* Featured Technology Spotlight Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "🐍",
                name: "Python",
                tag: "Core Language",
                desc: "Primary language for algorithms, backend automation, and machine learning models."
              },
              {
                icon: "🔥",
                name: "PyTorch",
                tag: "Deep Learning",
                desc: "Building neural networks, autograd tensors, and training loops."
              },
              {
                icon: "⚡",
                name: "Scikit-learn",
                tag: "Machine Learning",
                desc: "Feature engineering, classification, regression, and model evaluation pipelines."
              },
              {
                icon: "🦜🔗",
                name: "LangChain & RAG",
                tag: "Generative AI",
                desc: "Connecting LLMs with vector search for contextual document intelligence."
              }
            ].map((spotlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-orange-500/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{spotlight.icon}</div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 block w-max mb-2">
                  {spotlight.tag}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">{spotlight.name}</h3>
                <p className="text-xs text-foreground/60 leading-relaxed">{spotlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PROGRAMMING & FOUNDATIONS */}
      <section className="py-28 border-b border-white/10 bg-white/[0.01]">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">
                Foundations
              </span>
              <h2 className="font-playfair italic text-4xl sm:text-5xl">Programming & Core Tools</h2>
            </div>
            <p className="text-foreground/60 text-sm max-w-sm">
              Solid software engineering fundamentals supporting every AI model built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmingLanguages.map((lang, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/[0.03] border border-white/10 hover:border-orange-500/30 rounded-xl p-7 transition-all hover:bg-white/[0.05] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400">
                      <lang.icon size={20} />
                    </div>
                    <span className="text-xs text-foreground/50 font-medium px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      {lang.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{lang.name}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    {lang.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-[11px] uppercase tracking-wider text-orange-500 font-semibold mb-2">Used In:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {lang.projects.map((proj, pIdx) => (
                      <span key={pIdx} className="text-xs text-foreground/70 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ARTIFICIAL INTELLIGENCE */}
      <section className="py-28 border-b border-white/10">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">
              AI Stack
            </span>
            <h2 className="font-playfair italic text-4xl sm:text-5xl mb-4">Artificial Intelligence</h2>
            <p className="text-foreground/60 text-sm">Categorized frameworks, libraries, and sub-fields I work with.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400">
                    <cat.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{cat.title}</h3>
                    <p className="text-xs text-foreground/60">{cat.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, iIdx) => (
                    <div 
                      key={iIdx}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white text-base">{item.name}</span>
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                            item.status === "Currently Exploring" 
                              ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" 
                              : item.status === "Building projects with"
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-xs text-foreground/60 mt-1">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPETITIVE PROGRAMMING SHOWCASE */}
      <section className="py-28 border-b border-white/10 bg-white/[0.01]">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">
              Problem Solving Benchmark
            </span>
            <h2 className="font-playfair italic text-4xl sm:text-5xl mb-4">Competitive Programming</h2>
            <p className="text-foreground/60 text-sm">Rigorous algorithmic training and problem solving discipline.</p>
          </div>

          {/* IDE / Terminal Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/80 border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Terminal Window Header */}
            <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-white/50 ml-3">algorithms_stats.py</span>
              </div>
              <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20">
                STATUS: ACTIVE
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Metric Counter Big Highlight */}
                <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                  <span className="text-5xl md:text-6xl font-bold text-orange-500 block font-mono mb-2">
                    200+
                  </span>
                  <span className="text-lg font-semibold text-white block mb-1">
                    Problems Solved
                  </span>
                  <p className="text-xs text-foreground/60">Across LeetCode, Codeforces & Competitive Platforms</p>
                </div>

                {/* Algorithmic Pillars */}
                <div className="md:col-span-7 space-y-4 font-mono text-sm">
                  {[
                    { label: "Algorithms", value: "Sorting, Binary Search, Dynamic Programming, Graphs" },
                    { label: "Data Structures", value: "Trees, Heaps, Hash Maps, Trie, Segment Trees" },
                    { label: "Optimization", value: "Time complexity analysis & memory footprint reduction" },
                    { label: "Debugging", value: "Systematic edge-case tracing & dry runs" }
                  ].map((pillar, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/5 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-orange-400 font-semibold text-xs uppercase tracking-wider">{pillar.label}</span>
                      <span className="text-foreground/80 text-xs sm:text-right">{pillar.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: HACKATHON ACHIEVEMENTS */}
      <section className="py-28 border-b border-white/10">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">
              Recognition
            </span>
            <h2 className="font-playfair italic text-4xl sm:text-5xl mb-4">Hackathon Achievements</h2>
            <p className="text-foreground/60 text-sm">Real hackathons and rapid prototyping competitions won under strict time limits.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hackathons.map((hackathon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-gradient-to-b from-white/[0.06] to-transparent border border-white/10 hover:border-orange-500/40 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl">{hackathon.place.split(" ")[0]}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 px-3 py-1 bg-orange-500/10 rounded-full border border-orange-500/20">
                      {hackathon.badge}
                    </span>
                  </div>
                  <h3 className="font-playfair italic text-2xl text-white mb-3 leading-snug">
                    {hackathon.event}
                  </h3>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                    {hackathon.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-orange-400">
                  <Award size={16} />
                  <span>Second Place Runner-up</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT I'M BUILDING */}
      <section className="py-28">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">
                Focus Areas
              </span>
              <h2 className="font-playfair italic text-4xl sm:text-5xl">What I'm Building</h2>
            </div>
            <p className="text-foreground/60 text-sm max-w-xs">
              Types of projects and applications I actively enjoy designing and developing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white/[0.03] border border-white/10 hover:border-orange-500/30 rounded-xl p-7 transition-all hover:bg-white/[0.06] group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
