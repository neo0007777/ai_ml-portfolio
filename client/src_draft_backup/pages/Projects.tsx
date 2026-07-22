import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tags: string[];
  techStack: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "1",
      title: "AI Chatbot with RAG",
      description: "Intelligent chatbot powered by LLMs and Retrieval-Augmented Generation",
      problem: "Users needed a way to query documents and get accurate, contextual answers",
      solution: "Built a RAG system using LangChain, vector embeddings, and GPT-4",
      tags: ["GenAI", "NLP", "Full Stack"],
      techStack: ["LangChain", "OpenAI", "FastAPI", "React", "Pinecone"],
      github: "https://github.com/neo0007777",
      demo: "#",
    },
    {
      id: "2",
      title: "Real-time Object Detection",
      description: "YOLO-based object detection system for real-time video processing",
      problem: "Need for fast, accurate object detection in video streams",
      solution: "Implemented YOLOv8 with optimizations for edge deployment",
      tags: ["CV", "DL", "MLOps"],
      techStack: ["YOLOv8", "PyTorch", "OpenCV", "FastAPI", "Docker"],
      github: "https://github.com/neo0007777",
      demo: "#",
    },
    {
      id: "3",
      title: "Stock Price Predictor",
      description: "LSTM-based time series forecasting for stock market prediction",
      problem: "Predicting stock prices with high accuracy for investment decisions",
      solution: "Built LSTM model with technical indicators and ensemble methods",
      tags: ["ML", "DL", "Full Stack"],
      techStack: ["TensorFlow", "Pandas", "Scikit-learn", "Streamlit"],
      github: "https://github.com/neo0007777",
      demo: "#",
    },
    {
      id: "4",
      title: "Image Classification Pipeline",
      description: "End-to-end CNN pipeline for medical image classification",
      problem: "Classifying medical images with high accuracy for diagnosis support",
      solution: "Implemented ResNet50 with transfer learning and data augmentation",
      tags: ["CV", "DL", "Research"],
      techStack: ["PyTorch", "Torchvision", "NumPy", "Matplotlib"],
      github: "https://github.com/neo0007777",
      demo: "#",
    },
    {
      id: "5",
      title: "Recommendation Engine",
      description: "Collaborative filtering system for personalized recommendations",
      problem: "Providing relevant product recommendations to users",
      solution: "Built hybrid recommendation system using matrix factorization",
      tags: ["ML", "Full Stack"],
      techStack: ["Scikit-learn", "Pandas", "FastAPI", "PostgreSQL"],
      github: "https://github.com/neo0007777",
      demo: "#",
    },
    {
      id: "6",
      title: "Sentiment Analysis Tool",
      description: "NLP model for real-time sentiment analysis of social media",
      problem: "Understanding customer sentiment from social media data",
      solution: "Fine-tuned BERT model for multi-class sentiment classification",
      tags: ["NLP", "GenAI"],
      techStack: ["Transformers", "PyTorch", "FastAPI", "React"],
      github: "https://github.com/neo0007777",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-white/10">
        <div className="container">
          <h1 className="font-playfair italic text-6xl md:text-7xl mb-6">Featured Projects</h1>
          <p className="text-xl text-foreground/80 max-w-3xl leading-relaxed">
            A selection of my AI/ML projects showcasing expertise in machine learning, deep learning, 
            and full-stack development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-colors group"
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <p className="text-foreground/60 text-sm">{project.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/80 text-sm mb-4">{project.description}</p>

                  {/* Problem & Solution */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div>
                      <p className="text-orange-500 font-semibold mb-1">Problem:</p>
                      <p className="text-foreground/70">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-orange-500 font-semibold mb-1">Solution:</p>
                      <p className="text-foreground/70">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-orange-500 font-semibold text-sm mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 rounded text-xs text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-foreground px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
