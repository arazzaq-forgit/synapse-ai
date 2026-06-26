// Multi-dimensional pricing configuration matrix
// Structure: tier -> billing -> currency -> base rate
// Final price = baseRate * regionalTariff * annualMultiplier

export type Currency = "INR" | "USD" | "EUR";
export type BillingCycle = "monthly" | "annual";
export type Tier = "starter" | "pro" | "enterprise";

export const CURRENCY_CONFIG: Record<
  Currency,
  { symbol: string; label: string; locale: string }
> = {
  INR: { symbol: "₹", label: "INR", locale: "en-IN" },
  USD: { symbol: "$", label: "USD", locale: "en-US" },
  EUR: { symbol: "€", label: "EUR", locale: "de-DE" },
};

// Base monthly rates in USD
const BASE_RATES_USD: Record<Tier, number> = {
  starter: 29,
  pro: 79,
  enterprise: 199,
};

// Regional tariff multipliers (conversion + regional pricing)
const REGIONAL_TARIFFS: Record<Currency, number> = {
  USD: 1.0,
  INR: 83.5, // ~1 USD = 83.5 INR with regional adjustment
  EUR: 0.92, // ~1 USD = 0.92 EUR
};

// Annual discount: 20% off
const ANNUAL_MULTIPLIER = 0.8;

// Build the full pricing matrix
export const PRICING_MATRIX: Record<
  Tier,
  Record<BillingCycle, Record<Currency, number>>
> = (
  ["starter", "pro", "enterprise"] as Tier[]
).reduce((tierAcc, tier) => {
  tierAcc[tier] = (["monthly", "annual"] as BillingCycle[]).reduce(
    (billingAcc, cycle) => {
      billingAcc[cycle] = (["USD", "INR", "EUR"] as Currency[]).reduce(
        (currencyAcc, currency) => {
          const base = BASE_RATES_USD[tier];
          const tariff = REGIONAL_TARIFFS[currency];
          const multiplier = cycle === "annual" ? ANNUAL_MULTIPLIER : 1.0;
          currencyAcc[currency] = Math.round(base * tariff * multiplier);
          return currencyAcc;
        },
        {} as Record<Currency, number>
      );
      return billingAcc;
    },
    {} as Record<BillingCycle, Record<Currency, number>>
  );
  return tierAcc;
}, {} as Record<Tier, Record<BillingCycle, Record<Currency, number>>>);

export function formatPrice(amount: number, currency: Currency): string {
  const { symbol } = CURRENCY_CONFIG[currency];
  if (currency === "INR") {
    // Indian number formatting
    return `${symbol}${amount.toLocaleString("en-IN")}`;
  }
  return `${symbol}${amount.toLocaleString("en-US")}`;
}

export const TIER_DETAILS: Record<
  Tier,
  {
    name: string;
    tagline: string;
    features: string[];
    highlight: boolean;
    badge?: string;
  }
> = {
  starter: {
    name: "Starter",
    tagline: "Perfect for teams getting started",
    features: [
      "Up to 10,000 API calls/month",
      "3 automation pipelines",
      "Standard data connectors",
      "Email support",
      "Basic analytics dashboard",
      "99.5% uptime SLA",
    ],
    highlight: false,
  },
  pro: {
    name: "Pro",
    tagline: "For scaling teams that need more",
    features: [
      "Up to 500,000 API calls/month",
      "Unlimited pipelines",
      "50+ premium connectors",
      "Priority 24/7 support",
      "Advanced AI model access",
      "Custom webhook triggers",
      "99.9% uptime SLA",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  enterprise: {
    name: "Enterprise",
    tagline: "Full power for mission-critical ops",
    features: [
      "Unlimited API calls",
      "Dedicated infrastructure",
      "Custom model fine-tuning",
      "Dedicated account manager",
      "SOC 2 Type II compliance",
      "On-premise deployment option",
      "99.99% uptime SLA",
      "Custom SLAs available",
    ],
    highlight: false,
    badge: "Full Control",
  },
};
