'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SentiaDiagram() {
  const [activeStep, setActiveStep] = useState(0);
  const [metrics, setMetrics] = useState({
    driftRate: 0.12,
    emotion: 'Joy',
    f1Score: 0.72,
    latency: '45ms'
  });

  const steps = [
    { name: 'Text Input', icon: '📝', desc: 'Raw text streams' },
    { name: 'Emotion Model', icon: '🧠', desc: 'RoBERTa-based embeddings' },
    { name: 'Fusion Layer', icon: '⚡', desc: 'Multimodal representations' },
    { name: 'Drift Analytics', icon: '📊', desc: 'Temporal drift deviation' },
    { name: 'Dashboard', icon: '🖥️', desc: 'Real-time WebSocket feed' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
      
      // Randomly update mock metrics to make it feel "live"
      setMetrics({
        driftRate: parseFloat((0.08 + Math.random() * 0.1).toFixed(2)),
        emotion: ['Joy', 'Anger', 'Surprise', 'Sadness', 'Neutral'][Math.floor(Math.random() * 5)],
        f1Score: parseFloat((0.71 + Math.random() * 0.03).toFixed(2)),
        latency: `${Math.floor(40 + Math.random() * 15)}ms`
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#111827] border border-border rounded-lg p-6 font-mono text-xs text-foreground glow-border">
      <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-text-muted text-[10px] uppercase tracking-wider font-semibold">Sentia Fusion Pipeline</span>
        </div>
        <div className="text-[10px] text-accent font-semibold">
          F1 Score: {metrics.f1Score} (GoEmotions)
        </div>
      </div>

      {/* Horizontal Pipeline flow */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 px-2 py-4">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <React.Fragment key={step.name}>
              {/* Step Card */}
              <div 
                className={`relative flex flex-col items-center p-3 rounded border text-center transition-all duration-500 w-full md:w-[15%] z-10 ${
                  isActive 
                    ? 'border-accent bg-[#0B0F19] text-foreground shadow-[0_0_12px_rgba(96,165,250,0.15)]Scale-105' 
                    : 'border-border bg-[#0B0F19]/50 text-text-muted hover:border-accent/40'
                }`}
              >
                <div className="text-xl mb-1">{step.icon}</div>
                <div className="font-semibold text-[10px] leading-tight mb-1 text-center truncate w-full">
                  {step.name}
                </div>
                <div className="text-[8px] text-text-muted opacity-80 leading-snug line-clamp-2">
                  {step.desc}
                </div>

                {isActive && (
                  <motion.div 
                    layoutId="glow-ring"
                    className="absolute -inset-px border border-accent rounded pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>

              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex flex-1 items-center justify-center relative w-full h-1">
                  <div className="w-full h-[1px] bg-border" />
                  <div 
                    className={`absolute h-1.5 w-1.5 rounded-full bg-accent transition-all duration-[2500ms] ease-linear`}
                    style={{
                      left: isActive ? '100%' : '0%',
                      opacity: isActive ? 1 : 0,
                      transform: 'translateY(-50%)',
                      boxShadow: '0 0 6px #60A5FA'
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Real-time telemetry monitoring */}
      <div className="mt-6 border-t border-border pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#0B0F19] p-4 rounded border border-border/50">
        <div>
          <div className="text-text-muted text-[9px] uppercase tracking-wider mb-1">Active State</div>
          <div className="text-foreground font-semibold flex items-center gap-1.5">
            <span className="text-accent">&gt;</span> {steps[activeStep].name}
          </div>
        </div>
        <div>
          <div className="text-text-muted text-[9px] uppercase tracking-wider mb-1">Emotion Drift</div>
          <div className="text-foreground font-semibold">
            {metrics.driftRate} Deviation
          </div>
        </div>
        <div>
          <div className="text-text-muted text-[9px] uppercase tracking-wider mb-1">Dominant Emotion</div>
          <div className="text-foreground font-semibold text-accent">
            {metrics.emotion}
          </div>
        </div>
        <div>
          <div className="text-text-muted text-[9px] uppercase tracking-wider mb-1">Latency</div>
          <div className="text-foreground font-semibold">
            {metrics.latency}
          </div>
        </div>
      </div>
    </div>
  );
}
