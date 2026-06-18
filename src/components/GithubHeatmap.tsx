'use client';

import React, { useState } from 'react';

export default function GithubHeatmap() {
  const [hoveredCell, setHoveredCell] = useState<{
    count: number;
    date: string;
  } | null>(null);

  // Generate 53 weeks of contribution data
  // 53 columns * 7 rows
  const generateContributionData = () => {
    const data = [];
    const baseDate = new Date();
    baseDate.setFullYear(baseDate.getFullYear() - 1); // 1 year ago

    for (let col = 0; col < 53; col++) {
      const week = [];
      for (let row = 0; row < 7; row++) {
        // Calculate date
        const date = new Date(baseDate);
        date.setDate(baseDate.getDate() + (col * 7 + row));

        // Generate realistic counts: more commits on weekdays, random bursts, quiet weekends
        const day = date.getDay();
        const isWeekend = day === 0 || day === 6;
        let count = 0;

        const rand = Math.random();
        if (isWeekend) {
          if (rand > 0.8) count = Math.floor(Math.random() * 3) + 1;
        } else {
          if (rand > 0.15) {
            count = Math.floor(Math.random() * 8) + 1;
          }
        }

        week.push({
          count,
          date: date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
        });
      }
      data.push(week);
    }
    return data;
  };

  const contributionData = React.useMemo(() => generateContributionData(), []);

  // Determine block color based on commit count
  const getBlockColor = (count: number) => {
    if (count === 0) return 'bg-[#111827] border-[#1f2937]/30'; // zero contributions
    if (count <= 2) return 'bg-[#60A5FA]/20 border-[#60A5FA]/30';
    if (count <= 4) return 'bg-[#60A5FA]/40 border-[#60A5FA]/50';
    if (count <= 6) return 'bg-[#60A5FA]/70 border-[#60A5FA]/80';
    return 'bg-[#60A5FA] border-[#93c5fd]';
  };

  // Sum total contributions
  const totalContributions = React.useMemo(() => {
    return contributionData.reduce(
      (sum, week) => sum + week.reduce((wSum, day) => wSum + day.count, 0),
      0
    );
  }, [contributionData]);

  return (
    <div className="w-full bg-[#111827] border border-border rounded-lg p-6 font-mono text-xs text-foreground glow-border">
      {/* Title & Stats Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-3 mb-6 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#60A5FA] animate-pulse" />
          <span className="text-text-muted text-[10px] uppercase tracking-wider font-semibold">Open Source Contribution Matrix</span>
        </div>
        <div className="text-[10px] text-text-muted">
          <span className="text-accent font-semibold">{totalContributions}</span> contributions in the last year
        </div>
      </div>

      {/* Heatmap Grid wrapper */}
      <div className="relative overflow-x-auto pb-2 -mx-2 px-2 select-none scrollbar-thin">
        <div className="min-w-[620px] flex gap-[3px]">
          {contributionData.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-[3px]">
              {week.map((day, dayIdx) => (
                <div
                  key={dayIdx}
                  className={`w-[8px] h-[8px] rounded-[1px] border-[0.5px] transition-all hover:scale-125 hover:z-10 cursor-pointer ${getBlockColor(
                    day.count
                  )}`}
                  onMouseEnter={() => setHoveredCell(day)}
                  onMouseLeave={() => setHoveredCell(null)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip display */}
      <div className="h-6 mt-2 flex items-center justify-between text-[9px] text-text-muted">
        <div>
          {hoveredCell ? (
            <span>
              <strong className="text-accent">{hoveredCell.count} contributions</strong> on {hoveredCell.date}
            </span>
          ) : (
            <span>Hover over block for temporal commit metrics</span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <div className="w-2 h-2 rounded-[1px] bg-[#111827] border border-[#1f2937]/30" />
          <div className="w-2 h-2 rounded-[1px] bg-[#60A5FA]/20 border border-[#60A5FA]/30" />
          <div className="w-2 h-2 rounded-[1px] bg-[#60A5FA]/40 border border-[#60A5FA]/50" />
          <div className="w-2 h-2 rounded-[1px] bg-[#60A5FA]/70 border border-[#60A5FA]/80" />
          <div className="w-2 h-2 rounded-[1px] bg-[#60A5FA] border border-[#93c5fd]" />
          <span>More</span>
        </div>
      </div>

      {/* Open Source Contribution Statistics Cards */}
      <div className="mt-6 border-t border-border pt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0B0F19] border border-border/50 rounded p-4 text-center">
          <div className="text-accent text-xl font-bold mb-1">GSSoC&apos;26</div>
          <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Project Admin</div>
          <div className="text-[9px] text-text-muted mt-1 opacity-70">GirlScript Summer of Code</div>
        </div>

        <div className="bg-[#0B0F19] border border-border/50 rounded p-4 text-center">
          <div className="text-foreground text-xl font-bold mb-1">80+</div>
          <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">PRs Merged</div>
          <div className="text-[9px] text-text-muted mt-1 opacity-70">Across multiple active orgs</div>
        </div>

        <div className="bg-[#0B0F19] border border-border/50 rounded p-4 text-center">
          <div className="text-foreground text-xl font-bold mb-1">45+</div>
          <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">PRs Reviewed</div>
          <div className="text-[9px] text-text-muted mt-1 opacity-70">Enforcing code reviews</div>
        </div>

        <div className="bg-[#0B0F19] border border-border/50 rounded p-4 text-center">
          <div className="text-foreground text-xl font-bold mb-1">15+</div>
          <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Repos Managed</div>
          <div className="text-[9px] text-text-muted mt-1 opacity-70">GitHub project coordination</div>
        </div>
      </div>
    </div>
  );
}
