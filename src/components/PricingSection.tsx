"use client";
import { useRef, useEffect, useCallback } from "react";
import {
  PRICING_MATRIX,
  CURRENCY_CONFIG,
  TIER_DETAILS,
  formatPrice,
  type Currency,
  type BillingCycle,
  type Tier,
} from "@/lib/pricing";
import { IconCheck } from "./Icons";

/**
 * FEATURE 1: Matrix-Driven Pricing & Performance-Isolated Currency Switcher
 *
 * Critical rules enforced:
 * - NO global re-renders on currency/billing changes
 * - Updates isolated to [data-price] text nodes via direct DOM manipulation
 * - useRef-based state (no useState for billing/currency)
 * - Multi-dimensional PRICING_MATRIX drives all values (zero hardcoding)
 */

const TIERS: Tier[] = ["starter", "pro", "enterprise"];
const CURRENCIES: Currency[] = ["USD", "INR", "EUR"];

export default function PricingSection() {
  // Use refs instead of state to prevent React re-renders
  const billingRef = useRef<BillingCycle>("monthly");
  const currencyRef = useRef<Currency>("USD");

  const toggleRef = useRef<HTMLButtonElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);
  const annualLabelRef = useRef<HTMLSpanElement>(null);
  const monthlyLabelRef = useRef<HTMLSpanElement>(null);

  /**
   * Core isolated update function.
   * Finds [data-price-tier] elements and mutates their text nodes directly.
   * This is the ONLY way price strings change — no React state, no re-render.
   */
  const updatePrices = useCallback(() => {
    const billing = billingRef.current;
    const currency = currencyRef.current;

    TIERS.forEach((tier) => {
      const amount = PRICING_MATRIX[tier][billing][currency];
      const formatted = formatPrice(amount, currency);

      // Direct DOM text node mutation — zero component re-render
      const priceEl = document.querySelector<HTMLElement>(
        `[data-price-tier="${tier}"]`
      );
      if (priceEl) {
        // Flash transition via CSS class toggle
        priceEl.classList.add("updating");
        requestAnimationFrame(() => {
          setTimeout(() => {
            priceEl.textContent = formatted;
            priceEl.classList.remove("updating");
          }, 80);
        });
      }

      // Update billing period label
      const periodEl = document.querySelector<HTMLElement>(
        `[data-period-tier="${tier}"]`
      );
      if (periodEl) {
        periodEl.textContent = billing === "annual" ? "/ year" : "/ month";
      }

      // Update savings badge
      const savingsEl = document.querySelector<HTMLElement>(
        `[data-savings-tier="${tier}"]`
      );
      if (savingsEl) {
        if (billing === "annual") {
          const monthlyAmt = PRICING_MATRIX[tier]["monthly"][currency];
          const annualAmt = PRICING_MATRIX[tier]["annual"][currency];
          const savings = Math.round(monthlyAmt * 12 - annualAmt);
          savingsEl.textContent = `Save ${CURRENCY_CONFIG[currency].symbol}${savings}/yr`;
          savingsEl.style.opacity = "1";
          savingsEl.style.transform = "translateY(0)";
        } else {
          savingsEl.style.opacity = "0";
          savingsEl.style.transform = "translateY(4px)";
        }
      }
    });
  }, []);

  const toggleBilling = useCallback(() => {
    billingRef.current =
      billingRef.current === "monthly" ? "annual" : "monthly";
    const isAnnual = billingRef.current === "annual";

    // Animate toggle thumb — CSS transform only, no React state
    if (thumbRef.current) {
      thumbRef.current.style.transform = isAnnual
        ? "translateX(26px)"
        : "translateX(2px)";
    }

    // Update label opacities
    if (monthlyLabelRef.current) {
      monthlyLabelRef.current.style.color = isAnnual
        ? "var(--text-faint)"
        : "var(--text)";
    }
    if (annualLabelRef.current) {
      annualLabelRef.current.style.color = isAnnual
        ? "var(--text)"
        : "var(--text-faint)";
    }

    if (toggleRef.current) {
      toggleRef.current.setAttribute("aria-checked", String(isAnnual));
    }

    updatePrices();
  }, [updatePrices]);

  const onCurrencyChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      currencyRef.current = e.target.value as Currency;
      updatePrices();
    },
    [updatePrices]
  );

  // Initialize prices on mount
  useEffect(() => {
    updatePrices();
  }, [updatePrices]);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <header className="text-center mb-12 reveal">
          <p className="text-xs uppercase tracking-widest text-accent mb-3 font-medium">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="font-display text-4xl md:text-5xl font-700 text-text mb-4"
          >
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-text-dim text-lg max-w-xl mx-auto">
            Start free. Scale without surprises. No hidden fees, no per-seat
            gotchas.
          </p>
        </header>

        {/* ── Controls: Billing Toggle + Currency Switcher ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 reveal">
          {/* Billing Toggle */}
          <div
            className="flex items-center gap-3"
            role="group"
            aria-label="Billing cycle"
          >
            <span
              ref={monthlyLabelRef}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--text)" }}
            >
              Monthly
            </span>

            <button
              ref={toggleRef}
              onClick={toggleBilling}
              role="switch"
              aria-checked="false"
              aria-label="Toggle annual billing"
              className="toggle-track w-14 h-7 flex items-center"
              style={{ padding: "2px" }}
            >
              <span
                ref={thumbRef}
                className="toggle-thumb w-6 h-6"
                style={{ transform: "translateX(2px)" }}
                aria-hidden="true"
              />
            </button>

            <span
              ref={annualLabelRef}
              className="text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              style={{ color: "var(--text-faint)" }}
            >
              Annual
              <span className="text-xs px-2 py-0.5 rounded-full bg-lime/15 text-lime font-medium">
                Save 20%
              </span>
            </span>
          </div>

          {/* Currency Switcher */}
          <div className="relative flex items-center gap-2">
            <label htmlFor="currency-select" className="text-sm text-text-dim">
              Currency:
            </label>
            <select
              id="currency-select"
              className="currency-selector text-sm px-3 py-1.5 min-w-24"
              onChange={onCurrencyChange}
              defaultValue="USD"
            >
              {CURRENCIES.map((c) => (
                <option key={c} value={c}>
                  {CURRENCY_CONFIG[c].symbol} {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ── Pricing Cards ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Pricing tiers"
        >
          {TIERS.map((tier) => {
            const details = TIER_DETAILS[tier];
            return (
              <article
                key={tier}
                role="listitem"
                className={`relative rounded-2xl border p-8 flex flex-col gap-6 card-hover reveal ${
                  details.highlight
                    ? "pricing-highlight border-accent/50"
                    : "glass-card border-border"
                }`}
                aria-label={`${details.name} plan`}
              >
                {/* Badge */}
                {details.badge && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2"
                    aria-label={details.badge}
                  >
                    <span
                      className={`text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap ${
                        details.highlight
                          ? "bg-accent text-white"
                          : "bg-surface border border-border text-text-dim"
                      }`}
                    >
                      {details.badge}
                    </span>
                  </div>
                )}

                {/* Tier header */}
                <header>
                  <h3 className="font-display font-700 text-xl text-text mb-1">
                    {details.name}
                  </h3>
                  <p className="text-text-faint text-sm">{details.tagline}</p>
                </header>

                {/* Price — isolated DOM nodes */}
                <div className="flex items-end gap-1">
                  <span
                    data-price-tier={tier}
                    className="price-value font-display font-700 text-4xl text-text"
                    aria-live="polite"
                    aria-label={`${details.name} plan price`}
                  >
                    {/* Populated by updatePrices() — no hardcoded values */}
                  </span>
                  <span
                    data-period-tier={tier}
                    className="text-text-faint text-sm mb-1.5 ml-0.5"
                    aria-live="polite"
                  >
                    / month
                  </span>
                </div>

                {/* Savings badge */}
                <div
                  data-savings-tier={tier}
                  className="text-xs text-lime font-medium -mt-4 transition-all duration-200"
                  style={{ opacity: 0, transform: "translateY(4px)" }}
                  aria-live="polite"
                />

                {/* CTA */}
                <a
                  href="#"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    details.highlight
                      ? "btn-primary relative z-10"
                      : "btn-ghost"
                  }`}
                  aria-label={`Get started with ${details.name} plan`}
                >
                  <span className={details.highlight ? "relative z-10" : ""}>
                    {tier === "enterprise" ? "Contact Sales" : "Get Started"}
                  </span>
                </a>

                {/* Divider */}
                <div className="section-divider" aria-hidden="true" />

                {/* Feature list */}
                <ul
                  className="flex flex-col gap-3"
                  aria-label={`${details.name} plan features`}
                >
                  {details.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-text-dim"
                    >
                      <span
                        className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{
                          background: details.highlight
                            ? "rgba(108,99,255,0.2)"
                            : "rgba(57,255,107,0.1)",
                        }}
                        aria-hidden="true"
                      >
                        <IconCheck
                          size={10}
                          color={details.highlight ? "#FFC801" : "#D9E8E2"}
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Trust footer */}
        <footer className="text-center mt-12 text-text-faint text-sm reveal">
          <p>
            All plans include a 14-day free trial. No credit card required.
            Cancel anytime.
          </p>
        </footer>
      </div>
    </section>
  );
}
