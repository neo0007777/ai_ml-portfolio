import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { Briefcase, BookOpen, Github, Trophy, Award, Star, Target, ArrowUpRight } from "lucide-react";

interface ExperienceItem {
  type: "internship" | "research" | "opensource";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  icon: typeof Briefcase;
}

interface Achievement {
  title: string;
  category: "hackathon" | "competition" | "award" | "certification";
  organization: string;
  date: string;
  description: string;
  icon: typeof Trophy;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      type: "internship",
      title: "AI/ML Intern",
      organization: "Vetifi",
      period: "Present",
      description: "Developing AI-powered veterinary solutions using LLMs, RAG pipelines, and modern AI frameworks.",
      highlights: [
        "Contributing to backend development using FastAPI, Python, and vector databases",
        "Building and optimizing AI workflows for information retrieval and domain-specific question answering",
        "Collaborating with the founding team on production-grade AI systems and agentic workflows",
      ],
      icon: Briefcase,
    },
    {
      type: "opensource",
      title: "Open Source Contributor & Scholar",
      organization: "Global Open Source Programs",
      period: "Ongoing",
      description: "Active in global open source initiatives, programs, and community contributions.",
      highlights: [
        "6 PRs merged across open source repositories",
        "Hacktoberfest contributor",
        "Currently participating / contributing in LFX & GSoC",
      ],
      icon: Github,
    },
  ];

  const achievements: Achievement[] = [
    {
      title: "IIT Roorkee Frontend Development Hackathon",
      category: "hackathon",
      organization: "IIT Roorkee",
      date: "Runner-up 🥈",
      description: "Built a pixel-perfect implementation from a complex Figma design under strict time constraints.",
      icon: Trophy,
    },
    {
      title: "IIIT Delhi Hackathon",
      category: "hackathon",
      organization: "IIIT Delhi",
      date: "Runner-up 🥈",
      description: "Collaborated in a competitive development challenge and secured second place with a working software prototype.",
      icon: Trophy,
    },
    {
      title: "Thapar University Hackathon",
      category: "hackathon",
      organization: "Thapar University",
      date: "Runner-up 🥈",
      description: "Recognized for innovative problem-solving and rapid technical execution during a 24-hour sprint.",
      icon: Trophy,
    },
    {
      title: "Core Member",
      category: "award",
      organization: "University Tech Fest",
      date: "Leadership",
      description: "Active Core Member organizing and managing events for the university technical festival.",
      icon: Award,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "internship": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "research": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "opensource": return "bg-green-500/20 text-green-400 border-green-500/30";
      default: return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "internship": return "Internship";
      case "research": return "Research";
      case "opensource": return "Open Source";
      default: return "Experience";
    }
  };

  const getAchievementColor = (category: string) => {
    switch (category) {
      case "hackathon": return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
      case "competition": return "text-blue-400 bg-blue-500/10 border-blue-500/20";
      case "award": return "text-purple-400 bg-purple-500/10 border-purple-500/20";
      case "certification": return "text-green-400 bg-green-500/10 border-green-500/20";
      default: return "text-orange-400 bg-orange-500/10 border-orange-500/20";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "hackathon": return "Hackathon";
      case "competition": return "Competition";
      case "award": return "Award";
      case "certification": return "Certification";
      default: return "Achievement";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-orange-500/30 selection:text-orange-400">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-36 pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[200px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />
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
              Career & Achievements
            </motion.span>
            <h1 className="font-playfair italic text-5xl sm:text-7xl font-normal leading-tight mb-6">
              Experience & Honors
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-foreground/80 text-lg sm:text-xl max-w-2xl font-light leading-relaxed"
            >
              My professional journey through internships, research, open source contributions,
              hackathon victories, and academic awards in AI & Machine Learning.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Work & Research Experience Timeline */}
      <section className="py-28 border-b border-white/10">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">Timeline</span>
            <h2 className="font-playfair italic text-4xl sm:text-5xl">Work & Research Experience</h2>
          </motion.div>

          {/* Timeline layout */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/60 via-white/10 to-transparent hidden md:block"
            />

            <div className="space-y-8 md:pl-20">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="relative bg-white/[0.03] border border-white/10 hover:border-orange-500/30 rounded-2xl p-8 transition-colors duration-300 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[52px] top-8 w-3 h-3 rounded-full bg-orange-500 border-2 border-background shadow-[0_0_8px_rgba(232,112,42,0.6)] hidden md:block" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border ${getTypeColor(exp.type)}`}>
                        <exp.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-0.5 group-hover:text-orange-400 transition-colors">{exp.title}</h3>
                        <p className="text-foreground/60 font-medium text-sm">{exp.organization}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${getTypeColor(exp.type)}`}>
                        {getTypeLabel(exp.type)}
                      </span>
                      <span className="text-foreground/40 text-xs font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-5 leading-relaxed text-sm font-light">{exp.description}</p>

                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <p className="text-[11px] font-semibold text-orange-500 uppercase tracking-wider mb-3">Key Highlights</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <motion.li
                          key={hIdx}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: hIdx * 0.08 }}
                          className="flex gap-3 text-foreground/70 text-sm"
                        >
                          <span className="text-orange-500 mt-0.5 shrink-0">▸</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-28 border-b border-white/10 bg-white/[0.01]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">Recognition</span>
            <h2 className="font-playfair italic text-4xl sm:text-5xl mb-4">Achievements & Honors</h2>
            <p className="text-foreground/60 text-sm">Real hackathons and competitions won under strict time limits.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] } }}
                className="bg-white/[0.03] border border-white/10 hover:border-orange-500/30 rounded-2xl p-7 transition-colors duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border ${getAchievementColor(achievement.category)}`}>
                    <achievement.icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-0.5 group-hover:text-orange-400 transition-colors leading-snug">{achievement.title}</h3>
                    <p className="text-foreground/50 text-sm">{achievement.organization}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-semibold border ${getAchievementColor(achievement.category)}`}>
                    {getCategoryLabel(achievement.category)}
                  </span>
                  <span className="text-foreground/40 text-xs font-mono">{achievement.date}</span>
                </div>

                <p className="text-foreground/60 text-sm leading-relaxed font-light">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles & Open Source */}
      <section className="py-28">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Coding Profiles */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">Profiles</span>
                <h2 className="font-playfair italic text-4xl sm:text-5xl">Coding Profiles</h2>
              </motion.div>
              <div className="space-y-4">
                {[
                  { name: "Codeforces", stats: "200+ Problems Solved", rating: "Pupil", link: "https://codeforces.com/profile/shiva_0079" },
                  { name: "GitHub", stats: "Repositories & Projects", rating: "Open Source", link: "https://github.com/neo0007777" },
                ].map((profile, idx) => (
                  <motion.a
                    key={idx}
                    href={profile.link}
                    target={profile.link.startsWith("http") ? "_blank" : undefined}
                    rel={profile.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    custom={idx}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-center justify-between bg-white/[0.03] border border-white/10 hover:border-orange-500/30 rounded-xl p-6 transition-colors duration-300 group"
                  >
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-orange-400 transition-colors">{profile.name}</h3>
                      <p className="text-foreground/60 text-sm">{profile.stats}</p>
                    </div>
                    <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm">
                      <span>{profile.rating}</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Open Source */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-10"
              >
                <span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-2 block">Contributions</span>
                <h2 className="font-playfair italic text-4xl sm:text-5xl">Open Source</h2>
              </motion.div>
              <div className="space-y-4">
                {[
                  { project: "Open Source Repositories", contributions: "6 Merged PRs", description: "Successfully submitted and merged 6 PRs across open source projects" },
                  { project: "Hacktoberfest", contributions: "Completed", description: "Participated and completed open source contribution milestones" },
                  { project: "LFX & GSoC", contributions: "In Progress", description: "Currently working and preparing contributions for LFX & GSoC" },
                ].map((contrib, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-xl p-6 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-semibold text-white">{contrib.project}</h3>
                      <span className="text-orange-500 font-semibold text-xs">{contrib.contributions}</span>
                    </div>
                    <p className="text-foreground/60 text-sm font-light">{contrib.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
