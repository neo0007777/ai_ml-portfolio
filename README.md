# Shiva Sharma — AI/ML Engineer Portfolio

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-orange?style=for-the-badge)](http://localhost:3000)
[![GitHub](https://img.shields.io/badge/GitHub-neo0007777-181717?style=for-the-badge&logo=github)](https://github.com/neo0007777)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Shiva_Sharma-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/shiva-sharma-8ab069352/)

A modern, high-performance developer portfolio built for an **AI/ML Engineer**. Features interactive spotlights, fluid micro-animations, real-world GenAI/RAG projects, competitive programming milestones, and open-source contributions.

---

## 🌟 Key Highlights

- ⚡ **Interactive Spotlight & Animations**: Custom canvas reveal effects, glassmorphic UI components, and smooth page transitions powered by **Framer Motion** & **Vite**.
- 🔄 **Relay**: Open-source context-handoff protocol & AI agent middleware with Structured Knowledge Checkpoints, "Why-NOT" Dead-End Memory Store, and sub-5ms Multi-Signal Hybrid Reranker.
- 🌾 **FarmSathi**: AI-powered agricultural advisory platform utilizing **Groq (Llama 3)**, **RAG**, **Pinecone/Qdrant**, and live government/weather APIs.
- ⚖️ **NyayaSetu**: Citation-grounded legal assistant with hybrid **Groq + Ollama** online/offline inference over thousands of Indian court judgments.
- 🏆 **Hackathons & Honors**: Runner-up at **IIT Roorkee**, **IIIT Delhi**, and **Thapar University** hackathons.
- 💻 **Competitive Programming**: **Codeforces Pupil** rank with **200+ problems solved**.
- 🌐 **Open Source**: 6 merged PRs, **Hacktoberfest** contributor, and active participant in **LFX** & **GSoC**.

---

## 🚀 Featured Projects

### 1. [Relay](https://github.com/neo0007777/relay)
> **Context-Handoff Protocol & AI Agent Middleware**
- **Challenge**: Autonomous AI coding agents (Claude Code, OpenHands, Aider) suffer from context window exhaustion and state degradation across multi-file engineering tasks.
- **Architecture**: Implemented Structured Knowledge Checkpoints and a novel "Why-NOT" Dead-End Memory Store (reducing retries to 0.00, $p=0.0001$). Built a Multi-Signal Hybrid Reranker combining Qdrant dense vector embeddings with AST topological proximity and edit recency scoring for sub-5ms JIT context retrieval. Designed RelayBench v2, an autonomous 288-run live agent evaluation suite across 32 repository tasks with 100% pytest verification coverage (50/50 tests passing).
- **Tech Stack**: Python, LangGraph, FastAPI, Qdrant, Next.js, Docker

### 2. [FarmSathi](https://github.com/neo0007777/FarmSathi)
> **AgriTech & GenAI Advisory Platform**
- **Challenge**: Smallholder farmers often struggle to access reliable agricultural information spread across weather services, mandi prices, government schemes, and expert crop advisory.
- **Architecture**: Built using LLMs + RAG with Groq (Llama 3) and Pinecone/Qdrant vector search. Integrated live government APIs, weather forecasts, mandi prices, and crop disease diagnosis into a unified farmer dashboard.
- **Tech Stack**: Groq (Llama 3), RAG, FastAPI, React, Pinecone/Qdrant, Government APIs

### 3. [NyayaSetu](https://github.com/raghav775/Nyayasetu-clean)
> **Citation-Grounded LegalTech AI Assistant**
- **Challenge**: Legal professionals spend significant time searching thousands of court judgments and drafting legal documents while ensuring every response is backed by authentic legal citations.
- **Architecture**: Developed using a citation-grounded RAG pipeline with Qdrant vector search over thousands of Indian court judgments. Automated document generation using 1,800+ legal templates with hybrid Groq + Ollama inference.
- **Tech Stack**: Groq, Ollama, RAG, Qdrant, FastAPI, React

---

## 💼 Experience & Open Source

- 🏢 **AI/ML Intern — Vetifi**: Developing AI-powered veterinary solutions using LLMs, RAG pipelines, FastAPI backends, and vector databases.
- 💻 **Open Source Contributor & Scholar**: 6 merged PRs, Hacktoberfest contributor, and contributing towards **LFX** & **GSoC**.
- 🎯 **Leadership**: Core Member of University Tech Fest.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 19, TypeScript, TailwindCSS, Framer Motion, Lucide Icons, Wouter
- **Backend & AI**: Python, FastAPI, Groq API, LangChain, PyTorch, Qdrant, Pinecone
- **Tooling & Build**: Vite 7, Node.js, Express, ESBuild

---

## 💻 Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone git@github.com:neo0007777/ai_ml-portfolio.git
   cd ai_ml-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Run TypeScript check**:
   ```bash
   npm run check
   ```

---

## 📬 Contact Information

- **Email**: [shivaumj@gmail.com](mailto:shivaumj@gmail.com)
- **Phone**: +91 78768 07069
- **GitHub**: [github.com/neo0007777](https://github.com/neo0007777)
- **LinkedIn**: [linkedin.com/in/shiva-sharma-8ab069352](https://www.linkedin.com/in/shiva-sharma-8ab069352/)
- **Codeforces**: [codeforces.com/profile/shiva_0079](https://codeforces.com/profile/shiva_0079)

---

© 2026 Shiva Sharma. All rights reserved.
