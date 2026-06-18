'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  FileText, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Server, 
  Cloud, 
  Award, 
  BookOpen, 
  GitBranch, 
  ArrowUpRight, 
  Code,
  MapPin,
  Calendar,
  Briefcase
} from 'lucide-react';
import { Github, Linkedin, Twitter } from '@/components/Icons';


import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';
import SentiaDiagram from '@/components/SentiaDiagram';
import BhumiDiagram from '@/components/BhumiDiagram';
import PanopticonDiagram from '@/components/PanopticonDiagram';
import GithubHeatmap from '@/components/GithubHeatmap';
import ResumeSelector from '@/components/ResumeSelector';

export default function Home() {
  // Navigation links
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Open Source', href: '#opensource' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white font-sans overflow-x-hidden">
      
      {/* Sticky Header Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-all">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-xs">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-bold tracking-tight text-foreground"
          >
            <span className="text-accent">&gt;_</span> SNEHA.PANDIT
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-text-muted hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <a 
              href="https://github.com/snehapandit2006/snehapandit2006" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-foreground transition-colors"
            >
              <Github size={16} />
            </a>
            <a 
              href="https://linkedin.com/in/sneha-pandit-19010729b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-foreground transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="https://x.com/youknowme_how" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-foreground transition-colors"
            >
              <Twitter size={14} />
            </a>
            <a 
              href="#contact" 
              className="px-3 py-1.5 rounded border border-accent/30 text-accent hover:bg-accent-muted transition-all font-semibold font-mono"
            >
              Resume dossier
            </a>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[93vh] flex flex-col justify-center items-center px-6 border-b border-border overflow-hidden">
        {/* Subtle animated particles */}
        <NeuralNetworkBackground />

        <div className="max-w-3xl w-full text-center z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur font-mono text-[10px] text-text-muted"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            Active AI & ML Systems Research
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground font-sans uppercase"
          >
            Sneha Pandit
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs text-accent uppercase tracking-widest font-semibold"
          >
            AI Systems Engineer / Researcher
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-muted max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Building Multimodal AI, Retrieval-Augmented Generation (RAG) Systems,
            and Human-Centered Intelligent Products with focus on safety, evaluation, and latency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-[11px] text-text-muted"
          >
            B.Tech AI & ML <span className="text-border">|</span> GLA University
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 pt-4 font-mono text-xs"
          >
            <a 
              href="#projects" 
              className="px-6 h-11 flex items-center justify-center bg-accent text-[#0B0F19] rounded font-bold transition-all hover:bg-accent/90"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 h-11 flex items-center justify-center border border-border rounded font-bold text-text-muted hover:text-foreground hover:bg-card transition-all"
            >
              Resume
            </a>
            <a 
              href="https://github.com/snehapandit2006/snehapandit2006" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 h-11 flex items-center justify-center border border-border rounded font-bold text-text-muted hover:text-foreground hover:bg-card transition-all"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 font-mono text-[9px] text-text-muted"
        >
          <span>SCROLL</span>
          <div className="w-[1px] h-6 bg-border" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-b border-border max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold sticky top-20">
              01 // Core Philosophy
            </h2>
          </div>
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              I build intelligent systems that combine machine learning, backend engineering, and human-centered design.
            </h3>
            
            <p className="text-text-muted text-sm leading-relaxed">
              My approach focuses on evidence-based engineering, prioritizing quantitative evaluation metrics, latency profiles, and safety constraints. Rather than wrapping APIs, I specialize in multimodal sensory fusion, vector embedding optimization, and deterministic task scheduling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 font-mono text-xs">
              <div className="p-4 bg-card border border-border rounded">
                <div className="text-accent font-semibold mb-2 uppercase tracking-wide">Research Interests</div>
                <ul className="space-y-1.5 text-text-muted list-disc list-inside">
                  <li>Multimodal AI</li>
                  <li>Retrieval-Augmented Generation</li>
                  <li>Human-AI Interaction</li>
                  <li>Distributed Backend Systems</li>
                  <li>AI Safety & Evaluation</li>
                </ul>
              </div>

              <div className="p-4 bg-card border border-border rounded">
                <div className="text-accent font-semibold mb-2 uppercase tracking-wide">Current Status</div>
                <ul className="space-y-1.5 text-text-muted list-disc list-inside">
                  <li>Project Admin @ GSSoC&apos;26</li>
                  <li>Google Cloud Arcade Facilitator</li>
                  <li>Freelance AI Developer</li>
                  <li>Uttar Pradesh, India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 px-6 border-b border-border max-w-5xl mx-auto">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              02 // Featured Implementations
            </h2>
            <p className="text-text-muted font-mono text-[10px] uppercase">
              Production-ready systems and research engines
            </p>
          </div>

          {/* Project 1: Sentia (Cinematic Card) */}
          <div className="space-y-6">
            <div className="p-8 bg-card border border-border rounded-lg relative overflow-hidden glow-border">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                
                {/* Text Details */}
                <div className="space-y-6 lg:w-1/2">
                  <div className="flex items-center gap-2 font-mono text-[9px]">
                    <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-bold uppercase">
                      Primary Project
                    </span>
                    <span className="text-text-muted">Python / PyTorch / FastAPI / WebSockets</span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-foreground mb-1">
                      Sentia
                    </h3>
                    <p className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                      Multimodal Emotion Drift Analytics Platform
                    </p>
                  </div>

                  <p className="text-text-muted text-xs leading-relaxed">
                    Designed and built a distributed system for tracking emotion drift over time across multimodal inputs (text, voice, behavior). Integrates custom PyTorch RoBERTa-based embeddings with a WebSocket-based low-latency broadcast dashboard. Evaluated on the 58k GoEmotions dataset, achieving a macro F1 score &gt; 0.70.
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-border pt-4 font-mono text-[10px]">
                    <div>
                      <div className="text-text-muted">EMOTION CLUSTER DATA</div>
                      <div className="text-foreground font-semibold">58k GoEmotions Entries</div>
                    </div>
                    <div>
                      <div className="text-text-muted">CLASSIFIER F1 VALUE</div>
                      <div className="text-accent font-bold">Macro F1 &gt; 0.70</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 font-mono text-xs">
                    <a 
                      href="/resumes/Sentia_Panopticon.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-accent hover:underline"
                    >
                      <span>Read Technical Report</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Pipeline visual */}
                <div className="w-full lg:w-1/2">
                  <SentiaDiagram />
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Bhumi */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg flex flex-col justify-between glow-border">
              <div className="space-y-4">
                <div className="flex justify-between items-center font-mono text-[9px]">
                  <span className="px-2 py-0.5 rounded bg-[#60A5FA]/10 text-accent font-bold uppercase">
                    Personal Project
                  </span>
                  <span className="text-text-muted">LangChain / FastAPI / Vector DB</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Bhumi</h3>
                  <p className="font-mono text-[10px] text-accent uppercase tracking-wider font-semibold">
                    Smart Land Governance AI Engine
                  </p>
                </div>

                <p className="text-text-muted text-xs leading-relaxed">
                  A high-integrity search engine for citizen land inquiries and governance. Utilizes LangChain RAG pipelines connected to structured government registries, verifying legal documents with zero-hallucination vector indexing.
                </p>
                
                <div className="border-t border-border/50 pt-3 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-text-muted">RECORDS INTEGRITY</span>
                  <span className="text-foreground font-semibold">Grounded context parsing</span>
                </div>
                
                <div className="flex items-center gap-4 font-mono text-xs pt-2">
                  <a 
                    href="/technical_reports/Bhumi1.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent hover:underline"
                  >
                    <span>Download SIH Thesis</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
              
              <div className="mt-6">
                <BhumiDiagram />
              </div>
            </div>

            {/* Project 3: Panopticon */}
            <div className="p-6 bg-card border border-border rounded-lg flex flex-col justify-between glow-border">
              <div className="space-y-4">
                <div className="flex justify-between items-center font-mono text-[9px]">
                  <span className="px-2 py-0.5 rounded bg-[#60A5FA]/10 text-accent font-bold uppercase">
                    Observability Engine
                  </span>
                  <span className="text-text-muted">BullMQ / Redis / WebSockets</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Panopticon</h3>
                  <p className="font-mono text-[10px] text-accent uppercase tracking-wider font-semibold">
                    Political-Economic Observability Engine
                  </p>
                </div>

                <p className="text-text-muted text-xs leading-relaxed">
                  Distributed telemetry network processing over 10k events/day. Runs scheduled scrape workers via BullMQ, extracts named entity graphs with low-latency LLMs, and broadcasts real-time anomaly alerts through WebSockets.
                </p>
                
                <div className="border-t border-border/50 pt-3 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-text-muted">INGRESS SCALE</span>
                  <span className="text-foreground font-semibold">10,000+ events / day</span>
                </div>

                <div className="flex items-center gap-4 font-mono text-xs pt-2">
                  <a 
                    href="/technical_reports/Panopticon.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent hover:underline"
                  >
                    <span>Read Architectural Blueprint</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <PanopticonDiagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="py-24 px-6 border-b border-border max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold sticky top-20">
              03 // Experience Log
            </h2>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div className="relative border-l border-border pl-6 space-y-12">
              
              {/* GSOC */}
              <div className="relative">
                <span className="absolute -left-[30px] top-1 w-2 h-2 rounded-full bg-accent ring-4 ring-[#0B0F19]" />
                <div className="font-mono text-[10px] text-accent uppercase tracking-wider mb-1 flex items-center gap-2 font-bold">
                  <Calendar size={12} />
                  <span>2026 - Present</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Project Admin</h3>
                <h4 className="font-mono text-xs text-text-muted">GirlScript Summer of Code (GSSoC&apos;26)</h4>
                <p className="text-text-muted text-xs mt-2 leading-relaxed">
                  Leading developer coordination and PR code reviews. Moderating contribution paths, establishing repository guidelines, and managing deployment strategies.
                </p>
              </div>

              {/* GC Arcade */}
              <div className="relative">
                <span className="absolute -left-[30px] top-1 w-2 h-2 rounded-full bg-border ring-4 ring-[#0B0F19]" />
                <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-2 font-bold">
                  <Calendar size={12} />
                  <span>2025</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Arcade Facilitator</h3>
                <h4 className="font-mono text-xs text-text-muted">Google Cloud Platform India</h4>
                <p className="text-text-muted text-xs mt-2 leading-relaxed">
                  Facilitated GCP infrastructure labs, guiding over 200+ students in deploying containers, training neural nets, and configuring serverless endpoints on GCP.
                </p>
              </div>

              {/* Janshayog */}
              <div className="relative">
                <span className="absolute -left-[30px] top-1 w-2 h-2 rounded-full bg-border ring-4 ring-[#0B0F19]" />
                <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-2 font-bold">
                  <Calendar size={12} />
                  <span>2025</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">AI Accessibility Developer</h3>
                <h4 className="font-mono text-xs text-text-muted">Janshayog Initiative</h4>
                <p className="text-text-muted text-xs mt-2 leading-relaxed">
                  Designed low-latency screen accessibility pipelines for governmental schemes platforms. Created lightweight keyboard navigation modules.
                </p>
              </div>

              {/* Portal Developer */}
              <div className="relative">
                <span className="absolute -left-[30px] top-1 w-2 h-2 rounded-full bg-border ring-4 ring-[#0B0F19]" />
                <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-2 font-bold">
                  <Calendar size={12} />
                  <span>2025</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Full Stack Developer</h3>
                <h4 className="font-mono text-xs text-text-muted">Government Scheme Portal</h4>
                <p className="text-text-muted text-xs mt-2 leading-relaxed">
                  Engineered backend storage microservices for citizen verification files. Audited SQL queries, reducing API endpoint latencies by 35%.
                </p>
              </div>

              {/* Freelance */}
              <div className="relative">
                <span className="absolute -left-[30px] top-1 w-2 h-2 rounded-full bg-border ring-4 ring-[#0B0F19]" />
                <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-2 font-bold">
                  <Calendar size={12} />
                  <span>2022 - 2026</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Freelance Web Developer</h3>
                <h4 className="font-mono text-xs text-text-muted">10+ Client Deployments</h4>
                <p className="text-text-muted text-xs mt-2 leading-relaxed">
                  Configured and deployed web systems, corporate landing portals, and database models for local and international SME clients.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-6 border-b border-border max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold sticky top-20">
              04 // Research Dossier
            </h2>
          </div>
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-foreground">
              Investigating the boundaries of alignment, multi-sensory intelligence, and observability.
            </h3>
            
            <p className="text-text-muted text-xs leading-relaxed">
              Most student portfolios lack research artifacts. Below are the published write-ups and architectural blueprints corresponding to projects built, showcasing scientific rigor and implementation details.
            </p>

            <div className="space-y-4 pt-4 font-mono text-xs">
              
              {/* Report 1 */}
              <a 
                href="/resumes/Sentia_Panopticon.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-card border border-border rounded hover:border-accent/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="font-semibold text-[11px] text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5">
                    <BookOpen size={12} />
                    <span>Sentia & Panopticon Multimodal Technical Report</span>
                  </div>
                  <p className="text-[9px] text-text-muted leading-relaxed">
                    Analyzing RoBERTa-based temporal drift algorithms and BullMQ scaling logs.
                  </p>
                </div>
                <div className="text-[9px] text-accent font-bold mt-2 sm:mt-0 flex items-center gap-1">
                  <span>VIEW PDF</span>
                  <ExternalLink size={10} />
                </div>
              </a>

              {/* Report 2 */}
              <a 
                href="/technical_reports/Bhumi1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-card border border-border rounded hover:border-accent/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="font-semibold text-[11px] text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5">
                    <BookOpen size={12} />
                    <span>Bhumi RAG Architecture Thesis</span>
                  </div>
                  <p className="text-[9px] text-text-muted leading-relaxed">
                    Evaluations on Hallucination Guardrails, semantic similarity indices, and state registries.
                  </p>
                </div>
                <div className="text-[9px] text-accent font-bold mt-2 sm:mt-0 flex items-center gap-1">
                  <span>VIEW PDF</span>
                  <ExternalLink size={10} />
                </div>
              </a>

              {/* Report 3 */}
              <a 
                href="/technical_reports/Panopticon.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-card border border-border rounded hover:border-accent/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="font-semibold text-[11px] text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5">
                    <BookOpen size={12} />
                    <span>Panopticon Distributed Telemetry Report</span>
                  </div>
                  <p className="text-[9px] text-text-muted leading-relaxed">
                    Full analysis of LLM named entity graphs and low-latency WebSocket clusters.
                  </p>
                </div>
                <div className="text-[9px] text-accent font-bold mt-2 sm:mt-0 flex items-center gap-1">
                  <span>VIEW PDF</span>
                  <ExternalLink size={10} />
                </div>
              </a>

              {/* Report 4 */}
              <a 
                href="/technical_reports/Synopsis.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-card border border-border rounded hover:border-accent/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="font-semibold text-[11px] text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5">
                    <BookOpen size={12} />
                    <span>Core Research Synopsis Dossier</span>
                  </div>
                  <p className="text-[9px] text-text-muted leading-relaxed">
                    Unified synopsis compiling emotional drift analytics, vector data parsing, and edge latency logs.
                  </p>
                </div>
                <div className="text-[9px] text-accent font-bold mt-2 sm:mt-0 flex items-center gap-1">
                  <span>VIEW PDF</span>
                  <ExternalLink size={10} />
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 border-b border-border max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              05 // Key Achievements
            </h2>
            <p className="text-text-muted font-mono text-[10px] uppercase">
              Competitions & Industry validation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 bg-card border border-border rounded-lg relative overflow-hidden glow-border">
              <Award className="text-accent mb-3" size={24} />
              <div className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1">
                Smart India Hackathon
              </div>
              <h3 className="text-base font-extrabold text-foreground mb-2">
                🏆 National Finalist
              </h3>
              <p className="text-[10px] text-text-muted leading-normal">
                Selected as a national finalist for an AI-based smart governance system during SIH.
              </p>
            </div>

            <div className="p-5 bg-card border border-border rounded-lg relative overflow-hidden glow-border">
              <Award className="text-accent mb-3" size={24} />
              <div className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1">
                IBM Praambh
              </div>
              <h3 className="text-base font-extrabold text-foreground mb-2">
                🏆 Phase 2 Selection
              </h3>
              <p className="text-[10px] text-text-muted leading-normal">
                Secured selection in the national AI innovation incubator for early-stage engineering models.
              </p>
            </div>

            <div className="p-5 bg-card border border-border rounded-lg relative overflow-hidden glow-border">
              <Award className="text-accent mb-3" size={24} />
              <div className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1">
                GSSoC
              </div>
              <h3 className="text-base font-extrabold text-foreground mb-2">
                🏆 Project Admin
              </h3>
              <p className="text-[10px] text-text-muted leading-normal">
                Vetted by core organizers to supervise and maintain key open source repositories for GSSoC&apos;26.
              </p>
            </div>

            <div className="p-5 bg-card border border-border rounded-lg relative overflow-hidden glow-border">
              <Award className="text-accent mb-3" size={24} />
              <div className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1">
                Google Cloud
              </div>
              <h3 className="text-base font-extrabold text-foreground mb-2">
                🏆 Arcade Facilitator
              </h3>
              <p className="text-[10px] text-text-muted leading-normal">
                Recognized for cloud tech dissemination, aiding 200+ students on Google Cloud infrastructure.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Open Source Contribution Heatmap Section */}
      <section id="opensource" className="py-24 px-6 border-b border-border max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              06 // Git Contribution Stream
            </h2>
            <p className="text-text-muted font-mono text-[10px] uppercase">
              Activity heatmaps & open source metrics
            </p>
          </div>

          <GithubHeatmap />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 border-b border-border max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold sticky top-20">
              07 // Skill Graph
            </h2>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-6">
              
              {/* Category 1 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cpu size={14} className="text-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-foreground">
                    AI Systems & Research
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['PyTorch', 'Transformers', 'RoBERTa', 'LangChain', 'RAG', 'Vector Databases', 'Multimodal AI', 'Behavioral Modeling', 'AI Safety & Evaluation'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded bg-[#111827] border border-border text-xs text-text-muted hover:border-accent hover:text-foreground hover:scale-105 transition-all duration-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Server size={14} className="text-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-foreground">
                    Backend & Event Loop
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'Node.js', 'Express', 'Prisma', 'BullMQ', 'Redis', 'MongoDB', 'PostgreSQL', 'WebSockets', 'SQL'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded bg-[#111827] border border-border text-xs text-text-muted hover:border-accent hover:text-foreground hover:scale-105 transition-all duration-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cloud size={14} className="text-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-foreground">
                    Infrastructure & Automation
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Linux', 'Azure', 'GitHub Actions', 'GCP (Google Cloud)', 'CI/CD Pipelines'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded bg-[#111827] border border-border text-xs text-text-muted hover:border-accent hover:text-foreground hover:scale-105 transition-all duration-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold sticky top-20">
              08 // Connect
            </h2>
          </div>
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-foreground">
              Interested in collaborating, hiring, or discussing AI systems research? Let&apos;s talk.
            </h3>

            {/* Resume selector widget */}
            <div className="bg-card border border-border rounded-lg p-6 glow-border">
              <ResumeSelector />
            </div>

            {/* Connect options grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              
              <a 
                href="mailto:sneha20061901@gmail.com"
                className="flex items-center gap-3 p-4 bg-card border border-border rounded hover:border-accent/40 transition-colors group"
              >
                <Mail size={16} className="text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[9px] text-text-muted uppercase font-bold">Email Address</div>
                  <div className="text-foreground font-semibold">sneha20061901@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:7881184884"
                className="flex items-center gap-3 p-4 bg-card border border-border rounded hover:border-accent/40 transition-colors group"
              >
                <Phone size={16} className="text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[9px] text-text-muted uppercase font-bold">Phone Connection</div>
                  <div className="text-foreground font-semibold">+91 7881184884</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/sneha-pandit-19010729b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-card border border-border rounded hover:border-accent/40 transition-colors group"
              >
                <Linkedin size={16} className="text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[9px] text-text-muted uppercase font-bold">LinkedIn</div>
                  <div className="text-foreground font-semibold">in/sneha-pandit-19010729b</div>
                </div>
              </a>

              <a 
                href="https://github.com/snehapandit2006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-card border border-border rounded hover:border-accent/40 transition-colors group"
              >
                <Github size={16} className="text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[9px] text-text-muted uppercase font-bold">GitHub Profile</div>
                  <div className="text-foreground font-semibold">github/snehapandit2006</div>
                </div>
              </a>

              <a 
                href="https://x.com/youknowme_how"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-card border border-border rounded hover:border-accent/40 transition-colors group sm:col-span-2"
              >
                <Twitter size={14} className="text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[9px] text-text-muted uppercase font-bold">Twitter / X</div>
                  <div className="text-foreground font-semibold">@youknowme_how</div>
                </div>
              </a>

            </div>

            <div className="text-center pt-8 text-[10px] text-text-muted font-mono">
              Designed with strict adherence to #0B0F19 & #111827 & #F8FAFC & #60A5FA specs. <br />
              All rights reserved. © {new Date().getFullYear()} Sneha Pandit.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
