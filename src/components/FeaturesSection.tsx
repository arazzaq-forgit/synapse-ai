"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { FEATURES } from "@/lib/features";
import { getFeatureIcon, IconChevron } from "./Icons";

/**
 * FEATURE 2: Bento-to-Accordion with State Persistence
 * 
 * Rules enforced:
 * - NO external UI/animation libraries (zero-dependency)
 * - Bento on desktop (≥768px), Accordion on mobile (<768px)
 * - Active index context transfers on window resize
 * - All transitions: native CSS (layout: 300-400ms ease-in-out)
 * - Micro-interactions: 150-200ms ease-out
 */

const MOBILE_BREAKPOINT = 768;

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const prevMobileRef = useRef(false);
  const resizingRef = useRef(false);
  const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync mobile state and transfer active index on resize
  const handleResize = useCallback(() => {
    // Mark resize as in-progress so mouseleave events caused by the
    // layout reflow itself (not genuine cursor movement) are ignored.
    resizingRef.current = true;
    if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
    resizeTimeoutRef.current = setTimeout(() => {
      resizingRef.current = false;
    }, 250);

    const nowMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const wasMobile = prevMobileRef.current;

    if (nowMobile !== wasMobile) {
      // Context transfer: preserve active index across layout switch
      // If transitioning desktop→mobile and something is hovered/active, keep it open
      prevMobileRef.current = nowMobile;
      setIsMobile(nowMobile);
      // activeIndex is already set — accordion will open the corresponding panel
    }
  }, []);

  useEffect(() => {
    const mobile = window.innerWidth < MOBILE_BREAKPOINT;
    setIsMobile(mobile);
    prevMobileRef.current = mobile;

    const observer = new ResizeObserver(handleResize);
    observer.observe(document.documentElement);
    return () => {
      observer.disconnect();
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
    };
  }, [handleResize]);

  // Desktop: hover sets active via mouse events
  const handleBentoMouseEnter = (id: number) => {
    if (!isMobile) setActiveIndex(id);
  };
  const handleBentoMouseLeave = (id: number) => {
    if (!isMobile && !resizingRef.current) {
      setActiveIndex((prev) => (prev === id ? null : prev));
    }
  };
  const handleBentoClick = (id: number) => {
    if (!isMobile) setActiveIndex((prev) => (prev === id ? null : id));
  };

  // Mobile: toggle accordion
  const handleAccordionToggle = (id: number) => {
    setActiveIndex((prev) => (prev === id ? null : id));
  };

  const getBentoClass = (size: string) => {
    if (size === "large") return "bento-large";
    if (size === "medium") return "bento-medium";
    return "bento-small";
  };

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative py-24 px-6 max-w-7xl mx-auto"
    >
      {/* Section header */}
      <header className="text-center mb-16 reveal">
        <p className="text-xs uppercase tracking-widest text-accent mb-3 font-medium">
          Platform Capabilities
        </p>
        <h2
          id="features-heading"
          className="font-display text-4xl md:text-5xl font-700 text-text mb-4"
        >
          Everything your data stack{" "}
          <span className="gradient-text">needs to scale</span>
        </h2>
        <p className="text-text-dim text-lg max-w-xl mx-auto">
          Six core capabilities engineered for the demands of modern,
          high-velocity data operations.
        </p>
      </header>

      {/* ── DESKTOP: Bento Grid ── */}
      <div
        className="bento-grid reveal"
        role="list"
        aria-label="Platform features"
      >
        {FEATURES.map((feature) => (
          <article
            key={feature.id}
            role="listitem"
            className={`${getBentoClass(feature.size)} bento-card ${
              activeIndex === feature.id ? "active" : ""
            }`}
            onMouseEnter={() => handleBentoMouseEnter(feature.id)}
            onMouseLeave={() => handleBentoMouseLeave(feature.id)}
            onClick={() => handleBentoClick(feature.id)}
            tabIndex={0}
            aria-expanded={activeIndex === feature.id}
            aria-label={`${feature.title}: ${feature.description}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleBentoClick(feature.id);
              }
            }}
            style={
              {
                "--feature-accent": feature.accent,
              } as React.CSSProperties
            }
          >
            {/* Accent glow on active */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200"
              style={{
                background: `radial-gradient(ellipse at top left, ${feature.accent}14, transparent 60%)`,
                opacity: activeIndex === feature.id ? 1 : 0,
              }}
              aria-hidden="true"
            />

            {/* Tag */}
            <div className="relative z-10 flex items-start justify-between mb-auto">
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-md border"
                style={{
                  color: feature.accent,
                  borderColor: `${feature.accent}40`,
                  background: `${feature.accent}10`,
                }}
              >
                {feature.tag}
              </span>
            </div>

            {/* Icon */}
            <div className="relative z-10 mt-6 mb-4">
              {getFeatureIcon(feature.icon, feature.size === "large" ? 36 : 28, feature.accent)}
            </div>

            {/* Content */}
            <div className="relative z-10 mt-auto">
              <h3 className="font-display font-600 text-lg text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-text-dim text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Expanded detail (large card or active) */}
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight:
                    feature.size === "large" || activeIndex === feature.id
                      ? "200px"
                      : "0",
                  opacity:
                    feature.size === "large" || activeIndex === feature.id
                      ? 1
                      : 0,
                  marginTop:
                    feature.size === "large" || activeIndex === feature.id
                      ? "12px"
                      : "0",
                }}
              >
                <p className="text-text-faint text-sm leading-relaxed">
                  {feature.detail}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── MOBILE: Accordion ── */}
      <div
        className="accordion-wrapper"
        role="list"
        aria-label="Platform features"
      >
        {FEATURES.map((feature) => {
          const isOpen = activeIndex === feature.id;
          return (
            <article
              key={feature.id}
              className={`accordion-item ${isOpen ? "open" : ""}`}
              role="listitem"
            >
              <button
                className="accordion-trigger"
                onClick={() => handleAccordionToggle(feature.id)}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${feature.id}`}
                id={`accordion-btn-${feature.id}`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${feature.accent}15`,
                      border: `1px solid ${feature.accent}30`,
                    }}
                    aria-hidden="true"
                  >
                    {getFeatureIcon(feature.icon, 20, feature.accent)}
                  </span>
                  <span>
                    <span className="block font-display font-600 text-base text-text">
                      {feature.title}
                    </span>
                    <span className="block text-xs text-text-faint mt-0.5">
                      {feature.tag}
                    </span>
                  </span>
                </span>
                <span className="accordion-icon text-text-faint" aria-hidden="true">
                  <IconChevron size={20} color="currentColor" direction="down" />
                </span>
              </button>

              <div
                id={`accordion-panel-${feature.id}`}
                role="region"
                aria-labelledby={`accordion-btn-${feature.id}`}
                className="accordion-panel"
              >
                <div className="accordion-content pl-12">
                  <p className="text-text-dim text-sm mb-3">
                    {feature.description}
                  </p>
                  <p className="text-text-faint text-sm leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
