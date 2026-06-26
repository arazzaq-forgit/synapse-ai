"use client";
import { useEffect, useRef } from "react";
import { IconArrow } from "./Icons";

const STATS = [
  { value: "10M+", label: "Events/sec" },
  { value: "<10ms", label: "P99 Latency" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50+", label: "Connectors" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    canvas.width = w;
    canvas.height = h;

    // Particle nodes
    const nodes: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const alpha = ((100 - dist) / 100) * 0.12;
            ctx.strokeStyle = `rgba(108, 99, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${n.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      if (!canvas) return;
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(108,99,255,0.12) 0%, rgba(108,99,255,0.04) 40%, transparent 70%)",
          animation: "glow-pulse 4s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="anim-hero inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8 mb-8">
          <span
            className="w-1.5 h-1.5 rounded-full bg-lime"
            style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
            aria-hidden="true"
          />
          <span className="text-xs font-medium text-accent-bright tracking-wide uppercase">
            Now in General Availability
          </span>
        </div>

        {/* Headline */}
        <h1
          id="hero-headline"
          className="anim-hero-1 font-display text-5xl sm:text-6xl md:text-7xl font-700 leading-[1.08] tracking-tight mb-6"
        >
          Automate Every
          <br />
          <span className="gradient-text">Data Pipeline</span>
          <br />
          with Neural AI
        </h1>

        {/* Subheadline */}
        <p className="anim-hero-2 text-lg sm:text-xl text-text-dim max-w-2xl mx-auto mb-10 leading-relaxed">
          Enterprise-grade orchestration that self-heals, auto-scales, and
          processes millions of events per second. Connect any data source to
          any destination in minutes, not months.
        </p>

        {/* CTAs */}
        <div className="anim-hero-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="btn-primary px-8 py-3.5 rounded-xl text-base font-semibold relative z-10 flex items-center gap-2 group"
          >
            <span className="relative z-10">Start Building Free</span>
            <IconArrow
              size={18}
              color="white"
            />
          </a>
          <a
            href="#features"
            className="btn-ghost px-8 py-3.5 rounded-xl text-base font-medium flex items-center gap-2"
          >
            See Platform Demo
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M7 6.5l5 2.5-5 2.5V6.5z" fill="currentColor" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <dl
          className="anim-hero-4 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              style={{ animationDelay: `${0.3 + i * 0.05}s` }}
            >
              <dt className="text-text-faint text-xs uppercase tracking-widest mb-1">
                {s.label}
              </dt>
              <dd className="font-display font-700 text-2xl text-text stat-value">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Scroll indicator */}
        <div className="anim-hero-5 mt-16 flex justify-center" aria-hidden="true">
          <div
            className="flex flex-col items-center gap-2 text-text-faint"
            style={{ animation: "float-y 2.5s ease-in-out infinite" }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="8" cy="7" r="2" fill="currentColor" style={{ animation: "float-y 2.5s ease-in-out infinite" }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
