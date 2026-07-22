import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, BookOpen, Github, Trophy, Award, Star, Target, Users, MessageSquare } from "lucide-react";

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

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      type: "internship",
      title: "ML Engineer Intern",
      organization: "Tech Company",
      period: "Jun 2024 - Aug 2024",
      description: "Developed and optimized machine learning models for production systems.",
      highlights: [
        "Built end-to-end ML pipeline processing 1M+ records daily",
        "Improved model accuracy by 15% through feature engineering",
        "Deployed models using Docker and Kubernetes",
      ],
      icon: Briefcase,
    },
    {
      type: "internship",
      title: "Data Science Intern",
      organization: "AI Startup",
      period: "Jan 2024 - May 2024",
      description: "Worked on computer vision and NLP projects for product development.",
      highlights: [
        "Implemented YOLO object detection for real-time inference",
        "Created data annotation pipeline for 50K+ images",
        "Achieved 92% accuracy on image classification task",
      ],
      icon: Briefcase,
    },
    {
      type: "research",
      title: "Research Assistant",
      organization: "University AI Lab",
      period: "Sep 2023 - Dec 2023",
      description: "Conducted research on transformer architectures and attention mechanisms.",
      highlights: [
        "Published paper on efficient attention mechanisms",
        "Implemented novel training techniques",
        "Presented findings at AI conference",
      ],
      icon: BookOpen,
    },
    {
      type: "opensource",
      title: "Open Source Contributor",
      organization: "PyTorch & Hugging Face",
      period: "Ongoing",
      description: "Active contributor to major open source ML projects.",
      highlights: [
        "Contributed 50+ pull requests to PyTorch",
        "Maintained ML utilities library with 2K+ stars",
        "Helped fix critical bugs in model implementations",
      ],
      icon: Github,
    },
  ];

  const achievements: Achievement[] = [
    {
      title: "1st Place - AI/ML Hackathon",
      category: "hackathon",
      organization: "Tech Conference 2024",
      date: "March 2024",
      description: "Won first place for building an AI chatbot that solved real-world customer support challenges",
      icon: Trophy,
    },
    {
      title: "2nd Place - Data Science Competition",
      category: "competition",
      organization: "Kaggle Global",
      date: "February 2024",
      description: "Ranked 2nd in international machine learning competition with 5000+ participants",
      icon: Award,
    },
    {
      title: "Best Innovation Award",
      category: "award",
      organization: "University AI Lab",
      date: "December 2023",
      description: "Recognized for innovative approach to efficient transformer training",
      icon: Star,
    },
    {
      title: "Finalist - ML Engineering Challenge",
      category: "competition",
      organization: "Google Cloud",
      date: "November 2023",
      description: "Reached finals in Google's machine learning engineering challenge",
      icon: Target,
    },
    {
      title: "Hackathon Winner",
      category: "hackathon",
      organization: "AI Summit 2023",
      date: "September 2023",
      description: "Built and deployed a computer vision application in 24 hours",
      icon: Trophy,
    },
    {
      title: "Research Excellence Award",
      category: "award",
      organization: "University",
      date: "May 2023",
      description: "Awarded for outstanding research contributions in deep learning",
      icon: Star,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "internship":
        return "bg-blue-500/20 text-blue-400";
      case "research":
        return "bg-purple-500/20 text-purple-400";
      case "opensource":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-orange-500/20 text-orange-400";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "internship":
        return "Internship";
      case "research":
        return "Research";
      case "opensource":
        return "Open Source";
      default:
        return "Experience";
    }
  };

  const getAchievementIconColor = (category: string) => {
    switch (category) {
      case "hackathon":
        return "text-yellow-500";
      case "competition":
        return "text-blue-500";
      case "award":
        return "text-purple-500";
      case "certification":
        return "text-green-500";
      default:
        return "text-orange-500";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "hackathon":
        return "Hackathon";
      case "competition":
        return "Competition";
      case "award":
        return "Award";
      case "certification":
        return "Certification";
      default:
        return "Achievement";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-white/10">
        <div className="container">
          <h1 className="font-playfair italic text-6xl md:text-7xl mb-6">
            Experience & Achievements
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl leading-relaxed">
            My professional journey through internships, research, open source contributions, 
            hackathon victories, and academic awards in AI & Machine Learning.
          </p>
        </div>
      </section>

      {/* Statistics / Key Metrics */}
      <section className="py-16 border-b border-white/10 bg-white/[0.02]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Hackathons Participated" },
              { number: "8", label: "Competition Placements" },
              { number: "12", label: "Awards & Recognitions" },
              { number: "50+", label: "Projects Completed" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-colors">
                <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">{stat.number}</p>
                <p className="text-foreground/80 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work & Research Experience Timeline */}
      <section className="py-20 border-b border-white/10">
        <div className="container">
          <h2 className="font-playfair italic text-4xl mb-12">Work & Research Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${getTypeColor(exp.type)}`}>
                      <exp.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-foreground/80 font-medium">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(exp.type)}`}>
                      {getTypeLabel(exp.type)}
                    </span>
                    <span className="text-foreground/60 text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-orange-500">Key Highlights:</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-3 text-foreground/70 text-sm">
                        <span className="text-orange-500 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Awards Grid */}
      <section className="py-20 border-b border-white/10">
        <div className="container">
          <h2 className="font-playfair italic text-4xl mb-12">Achievements & Honors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/10`}>
                    <achievement.icon size={24} className={getAchievementIconColor(achievement.category)} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-foreground/80 font-medium text-sm">{achievement.organization}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-foreground/80`}>
                    {getCategoryLabel(achievement.category)}
                  </span>
                  <span className="text-foreground/60 text-sm">{achievement.date}</span>
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles & Open Source */}
      <section className="py-20 border-b border-white/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coding Profiles */}
            <div>
              <h2 className="font-playfair italic text-4xl mb-8">Coding Profiles</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "LeetCode",
                    stats: "1500+ Problems Solved",
                    rating: "Top 5%",
                    link: "#",
                  },
                  {
                    name: "Codeforces",
                    stats: "Expert Rating",
                    rating: "1800+",
                    link: "#",
                  },
                  {
                    name: "GitHub",
                    stats: "500+ Repositories",
                    rating: "2K+ Stars",
                    link: "https://github.com/neo0007777",
                  },
                ].map((profile, idx) => (
                  <a
                    key={idx}
                    href={profile.link}
                    target={profile.link.startsWith("http") ? "_blank" : undefined}
                    rel={profile.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-orange-500 transition-colors">
                          {profile.name}
                        </h3>
                        <p className="text-foreground/80 text-sm">{profile.stats}</p>
                      </div>
                      <p className="text-orange-500 font-semibold text-lg">{profile.rating}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Open Source Contributions */}
            <div>
              <h2 className="font-playfair italic text-4xl mb-8">Open Source</h2>
              <div className="space-y-4">
                {[
                  {
                    project: "PyTorch",
                    contributions: "50+ Pull Requests",
                    description: "Contributed to core ML framework improvements",
                  },
                  {
                    project: "Hugging Face Transformers",
                    contributions: "30+ Pull Requests",
                    description: "Enhanced model implementations and documentation",
                  },
                  {
                    project: "TensorFlow",
                    contributions: "20+ Pull Requests",
                    description: "Fixed bugs and improved performance",
                  },
                ].map((contrib, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold">{contrib.project}</h3>
                      <span className="text-orange-500 font-semibold text-sm">{contrib.contributions}</span>
                    </div>
                    <p className="text-foreground/70 text-sm">{contrib.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Mentorship */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-playfair italic text-4xl mb-12">Leadership & Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Users className="text-orange-500" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Mentoring</h3>
              </div>
              <p className="text-foreground/80 mb-4">
                I actively mentor junior developers and students interested in machine learning. 
                I've helped 10+ individuals transition into ML roles.
              </p>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• Code reviews and technical guidance</li>
                <li>• Career advice and interview prep</li>
                <li>• Project guidance and feedback</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-orange-500" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Community Engagement</h3>
              </div>
              <p className="text-foreground/80 mb-4">
                Active in the AI/ML community through technical talks, workshops, and knowledge sharing.
              </p>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• Speaker at ML conferences and meetups</li>
                <li>• Open source project maintenance</li>
                <li>• Active contributor to ML discussion forums</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
