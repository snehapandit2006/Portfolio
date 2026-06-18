'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function PanopticonDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [logs, setLogs] = useState<string[]>([
    'Observability Engine started.',
    'Distributed BullMQ workers active: 4',
    'Listening on stream: events_incoming_queue...'
  ]);
  const [stats, setStats] = useState({
    eventsProcessed: 8940,
    activeWorkers: 4,
    queueLatency: '18ms'
  });

  // Event templates for simulated real-time logs
  const eventTemplates = [
    'BullMQ: Dequeued Job #__ID__ - scrape_media_stream',
    'LLM Extractor: Extracted entities: [Entity: BJP, Topic: Economic Policy]',
    'Database: Upserted node "Coal Contract #890" -> [Relations: +3]',
    'WebSocket Telemetry: Broadcast event to 42 clients',
    'LLM Extractor: Extracted entities: [Entity: Adani Power, Topic: Grid Tariff]',
    'BullMQ: Worker #3 finished chunk processing in __LATENCY__ms',
    'Anomalies: Emotion volatility spike detected in Delhi media cluster (+12.4%)'
  ];

  useEffect(() => {
    // 1. Canvas network animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = 160);

    const nodes = [
      { id: 'Worker 1', x: 40, y: 30, vx: 0.1, vy: 0.1, label: 'BullMQ Worker 1' },
      { id: 'Worker 2', x: 80, y: 130, vx: -0.1, vy: 0.1, label: 'BullMQ Worker 2' },
      { id: 'Ingress', x: 180, y: 80, vx: 0.15, vy: -0.1, label: 'Event Ingress' },
      { id: 'LLM', x: 260, y: 40, vx: -0.1, vy: -0.15, label: 'LLM Entity Extractor' },
      { id: 'DB', x: 340, y: 110, vx: 0.1, vy: 0.08, label: 'Graph DB' },
      { id: 'WS', x: 120, y: 50, vx: -0.05, vy: 0.12, label: 'WebSocket PubSub' },
    ];

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background lines (faint grids)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      for (let i = 20; i < width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let j = 20; j < height; j += 40) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(width, j);
        ctx.stroke();
      }

      // Update and draw nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        // Bounce
        if (n.x < 15 || n.x > width - 15) n.vx *= -1;
        if (n.y < 15 || n.y > height - 15) n.vy *= -1;

        // Draw connections
        nodes.forEach((target) => {
          if (n.id !== target.id) {
            const dx = n.x - target.x;
            const dy = n.y - target.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(target.x, target.y);
              ctx.strokeStyle = `rgba(96, 165, 250, ${(1 - dist / 120) * 0.08})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        });

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#60A5FA';
        ctx.fill();

        ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
        ctx.font = '8px monospace';
        ctx.fillText(n.label, n.x + 8, n.y + 3);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 160;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // 2. Real-time telemetry generator
    const logInterval = setInterval(() => {
      const randomTemplate = eventTemplates[Math.floor(Math.random() * eventTemplates.length)];
      const formattedLog = randomTemplate
        .replace('__ID__', Math.floor(1000 + Math.random() * 9000).toString())
        .replace('__LATENCY__', Math.floor(12 + Math.random() * 30).toString());

      setLogs((prev) => {
        const updated = [...prev, `[${new Date().toLocaleTimeString()}] ${formattedLog}`];
        if (updated.length > 20) {
          updated.shift();
        }
        return updated;
      });

      setStats((prev) => ({
        eventsProcessed: prev.eventsProcessed + 1,
        activeWorkers: Math.random() > 0.85 ? Math.floor(3 + Math.random() * 3) : prev.activeWorkers,
        queueLatency: `${Math.floor(12 + Math.random() * 10)}ms`
      }));
    }, 1800);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <div className="w-full bg-[#111827] border border-border rounded-lg p-6 font-mono text-xs text-foreground glow-border">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-text-muted text-[10px] uppercase tracking-wider font-semibold">Panopticon Network Telemetry</span>
        </div>
        <div className="text-[10px] text-green-400 font-semibold uppercase">
          Live: ~10,540 events/day
        </div>
      </div>

      {/* Canvas Graphic */}
      <div className="bg-[#0B0F19] rounded border border-border/50 relative overflow-hidden h-40 mb-4">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/40 text-[8px] text-text-muted">
          EVENT GRAPH OBSERVATION STREAM
        </div>
      </div>

      {/* Live metrics and Logger */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Logger */}
        <div className="md:col-span-2 bg-[#0B0F19] border border-border/50 rounded p-3 h-32 overflow-y-auto font-mono text-[9px] leading-relaxed text-[#F8FAFC]">
          <div className="text-text-muted border-b border-border/30 pb-1 mb-1.5 flex justify-between items-center text-[8px]">
            <span>TELEMETRY STREAMS</span>
            <span>Workers connected: {stats.activeWorkers}</span>
          </div>
          {logs.map((log, idx) => (
            <div key={idx} className="truncate text-slate-300">
              <span className="text-accent/80 font-bold">&gt;</span> {log}
            </div>
          ))}
        </div>

        {/* Telemetry Stats */}
        <div className="bg-[#0B0F19] border border-border/50 rounded p-3 flex flex-col justify-between h-32">
          <div>
            <div className="text-[8px] text-text-muted uppercase tracking-wider mb-2 border-b border-border/30 pb-1">
              Engine Health
            </div>
            <div className="mb-2">
              <div className="text-[9px] text-text-muted">Events Processed</div>
              <div className="text-sm font-semibold text-foreground">{stats.eventsProcessed}</div>
            </div>
            <div>
              <div className="text-[9px] text-text-muted">Queue Latency</div>
              <div className="text-sm font-semibold text-accent">{stats.queueLatency}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
