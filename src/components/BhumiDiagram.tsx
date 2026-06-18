'use client';

import React, { useState } from 'react';

export default function BhumiDiagram() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    'System ready. Standing by for Citizen Query.'
  ]);

  const pipeline = [
    {
      title: 'Citizen Query',
      action: 'Receive natural language prompt',
      log: 'Received: "Who owns survey plot 452 in Mathura and are there disputes?"',
      detail: 'Parsed: [survey_no: "452", location: "Mathura"]'
    },
    {
      title: 'Vector Database',
      action: 'Semantic vector similarity search',
      log: 'Query vector embedding matches local land records index...',
      detail: 'Result: Found 3 relevant context nodes (Cosine Similarity: 0.932)'
    },
    {
      title: 'RAG Pipeline',
      action: 'Context augmentation & LLM prompt synthesis',
      log: 'Merging context blocks into prompt template...',
      detail: 'Grounding guardrails active: hallucination risk threshold < 0.05'
    },
    {
      title: 'Land Records',
      action: 'Structured record verification',
      log: 'Cross-referencing database ID with Uttar Pradesh Bhulekh registry...',
      detail: 'Registry Status: Verified. Current Title: Devendra Singh (since 2012). Encumbrances: None.'
    },
    {
      title: 'Answer Generation',
      action: 'Deterministic grounded response generation',
      log: 'Formatting legal-grounded vernacular answer...',
      detail: 'Output: "Plot 452 in Mathura is registered under Devendra Singh. No disputes found in active court registry files."'
    }
  ];

  const runSimulation = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);
    setTerminalLines(['Initiating Smart India Hackathon RAG query pipeline...']);

    for (let i = 0; i < pipeline.length; i++) {
      setCurrentStep(i);
      setTerminalLines(prev => [
        ...prev,
        `[STEP ${i + 1}/5] ${pipeline[i].title} - ${pipeline[i].action}`,
        `  -> ${pipeline[i].log}`,
        `  -> ${pipeline[i].detail}`
      ]);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    setIsRunning(false);
  };

  return (
    <div className="w-full bg-[#111827] border border-border rounded-lg p-6 font-mono text-xs text-foreground glow-border">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-text-muted text-[10px] uppercase tracking-wider font-semibold">Bhumi RAG Engine Simulation</span>
        </div>
        <button
          onClick={runSimulation}
          disabled={isRunning}
          className={`px-3 py-1 rounded text-[10px] border transition-all ${
            isRunning 
              ? 'border-border text-text-muted cursor-not-allowed bg-transparent' 
              : 'border-accent text-accent hover:bg-accent-muted bg-transparent cursor-pointer'
          }`}
        >
          {isRunning ? 'PIPELINE RUNNING...' : 'TRIGGER QUERY RUN'}
        </button>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
        {pipeline.map((step, idx) => {
          let state = 'idle'; // idle, active, completed
          if (currentStep === idx) state = 'active';
          else if (currentStep > idx) state = 'completed';

          return (
            <div
              key={step.title}
              className={`p-3 rounded border transition-all duration-300 relative ${
                state === 'active'
                  ? 'border-accent bg-[#0B0F19] text-foreground shadow-[0_0_12px_rgba(96,165,250,0.1)]'
                  : state === 'completed'
                  ? 'border-[#60A5FA]/30 bg-[#0B0F19]/80 text-[#60A5FA]'
                  : 'border-border bg-[#0B0F19]/20 text-text-muted'
              }`}
            >
              {/* Step indicator */}
              <div className="absolute top-2 right-2 text-[9px] font-bold text-text-muted/60">
                0{idx + 1}
              </div>
              <div className="font-semibold text-[10px] mb-1">{step.title}</div>
              <div className="text-[8px] opacity-80 leading-relaxed">{step.action}</div>
              {state === 'active' && (
                <div className="absolute bottom-1 left-0 right-0 h-[2px] bg-accent animate-pulse" />
              )}
            </div>
          );
        })}
      </div>

      {/* Terminal Output */}
      <div className="bg-[#0B0F19] border border-border/80 rounded p-4 h-48 overflow-y-auto font-mono text-[10px] leading-relaxed text-[#F8FAFC]">
        <div className="text-text-muted border-b border-border/40 pb-1.5 mb-2 flex justify-between items-center">
          <span>CONSOLE LOGS</span>
          <span>SIH Finalist Node v1.0.4</span>
        </div>
        {terminalLines.map((line, idx) => {
          let color = 'text-[#F8FAFC]';
          if (line.startsWith('Initiating') || line.startsWith('[STEP')) {
            color = 'text-accent font-semibold';
          } else if (line.startsWith('  ->')) {
            color = 'text-text-muted pl-4';
          } else if (line.includes('Verified') || line.includes('Output')) {
            color = 'text-green-400 font-semibold';
          }
          return (
            <div key={idx} className={`${color}`}>
              {line}
            </div>
          );
        })}
        {isRunning && (
          <div className="text-accent animate-pulse pl-1 mt-1">█ Processing...</div>
        )}
      </div>
    </div>
  );
}
