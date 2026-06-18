'use client';

import React, { useState } from 'react';
import { ExternalLink, FileText, ChevronDown, Check } from 'lucide-react';

export default function ResumeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  
  const resumes = [
    {
      name: 'General AI Systems Resume',
      file: '/resumes/sneha.pdf',
      description: 'Comprehensive view of AI engineering & full stack experience.',
      tag: 'General'
    },
    {
      name: 'AI / Machine Learning Focus',
      file: '/resumes/SnehaPandit_B.pdf',
      description: 'Detailed details on PyTorch, RoBERTa, emotion drift modeling, and RAG pipelines.',
      tag: 'Research & ML'
    },
    {
      name: 'Systems & Backend Focus',
      file: '/resumes/Sneha_A.pdf',
      description: 'Deep dive into FastAPI, WebSockets, BullMQ, Redis, and distributed orchestration.',
      tag: 'Backend & Infra'
    },
    {
      name: 'Enterprise/Amazon Optimized Resume',
      file: '/resumes/sneha_pandit_amazon.pdf',
      description: 'Tailored for scale, enterprise software engineering, and cloud infra.',
      tag: 'Enterprise'
    },
    {
      name: 'Sentia & Panopticon Dossier Resume',
      file: '/resumes/Sentia_Panopticon.pdf',
      description: 'Project-focused resume detailing the architecture of research systems.',
      tag: 'Projects Special'
    }
  ];

  const [selectedResume, setSelectedResume] = useState(resumes[0]);

  const handleSelect = (resume: typeof resumes[0]) => {
    setSelectedResume(resume);
    setIsOpen(false);
  };

  return (
    <div className="relative font-mono text-xs text-foreground">
      {/* Label */}
      <span className="block text-text-muted text-[10px] uppercase tracking-wider font-semibold mb-2">
        Select Resume Variant
      </span>

      {/* Trigger Button */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-[#111827] border border-border rounded px-4 py-2.5 text-left cursor-pointer hover:border-accent/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-accent" />
              <div>
                <span className="font-semibold text-[11px]">{selectedResume.name}</span>
                <span className="ml-2 px-1.5 py-0.5 rounded text-[8px] bg-accent/10 text-accent font-bold uppercase">
                  {selectedResume.tag}
                </span>
              </div>
            </div>
            <ChevronDown size={14} className={`text-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Options */}
          {isOpen && (
            <div className="absolute left-0 right-0 mt-1.5 bg-[#111827] border border-border rounded shadow-xl z-50 overflow-hidden">
              {resumes.map((resume) => (
                <button
                  key={resume.file}
                  onClick={() => handleSelect(resume)}
                  className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors border-b border-border/40 last:border-b-0 cursor-pointer ${
                    selectedResume.file === resume.file 
                      ? 'bg-accent/5 text-foreground' 
                      : 'hover:bg-accent/5/20 text-text-muted hover:text-foreground'
                  }`}
                >
                  <div className="mt-0.5">
                    {selectedResume.file === resume.file ? (
                      <Check size={12} className="text-accent" />
                    ) : (
                      <div className="w-3 h-3" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[10px]">{resume.name}</span>
                      <span className="px-1.5 py-0.2 rounded text-[7px] bg-[#0B0F19] text-text-muted border border-border/50 uppercase font-semibold">
                        {resume.tag}
                      </span>
                    </div>
                    <p className="text-[9px] text-text-muted mt-1 leading-normal">
                      {resume.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* View PDF Button */}
        <a
          href={selectedResume.file}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-accent hover:bg-accent/90 text-[#0B0F19] px-4 py-2.5 rounded font-semibold transition-colors shrink-0"
        >
          <ExternalLink size={14} />
          <span>View PDF</span>
        </a>
      </div>
    </div>
  );
}
