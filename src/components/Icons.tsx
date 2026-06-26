"use client";

/**
 * Icon set sourced directly from the provided SVG asset pack
 * (public/svgs/). Path data is copied verbatim from the originals;
 * fill/stroke hardcoded to #000000 in the source files has been
 * replaced with `currentColor`/the `color` prop so each icon can be
 * recolored per the brand palette (colorPallet.pdf) at the call site.
 */

type IconProps = { size?: number; color?: string };

export function IconCog({ size = 32, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
        <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
      </g>
    </svg>
  );
}

export function IconLink({ size = 32, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function IconCube({ size = 32, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fill={color}
        d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"
      />
    </svg>
  );
}

export function IconChartPie({ size = 32, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
      </g>
    </svg>
  );
}

export function IconTrendingUp({ size = 32, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function IconArrowPath({ size = 32, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function IconCheck({ size = 16, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevron({
  size = 20,
  color = "currentColor",
  direction = "down",
}: IconProps & { direction?: "up" | "down" | "left" | "right" }) {
  const rotations = { down: 0, up: 180, left: 90, right: -90 };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
      aria-hidden="true"
    >
      <path d="m19.5 8.25l-7.5 7.5l-7.5-7.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function IconSearch({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fill={color}
        d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
      />
    </svg>
  );
}

export function IconXMark({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 18L18 6M6 6l12 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Synapse AI Logo">
      <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
      <path
        d="M10.343 13.94c.045-.271.28-.47.555-.47h.547c.275 0 .51.199.555.47l.075.447c.035.212.192.382.39.465c.199.082.427.071.602-.054l.369-.264a.563.563 0 0 1 .725.06l.387.387c.195.194.22.501.06.725l-.264.369c-.125.175-.136.403-.053.602c.082.198.252.355.464.39l.447.075c.271.045.47.28.47.555v.547c0 .275-.199.51-.47.555l-.447.075c-.212.035-.382.192-.464.39c-.083.199-.072.427.053.602l.264.369c.16.224.135.53-.06.725l-.387.387a.563.563 0 0 1-.725.06l-.369-.264c-.175-.125-.403-.136-.601-.053c-.199.082-.356.252-.39.464l-.076.447c-.045.271-.28.47-.555.47h-.547c-.275 0-.51-.199-.555-.47l-.074-.447c-.036-.212-.193-.382-.39-.464c-.2-.083-.428-.072-.603.053l-.369.264a.563.563 0 0 1-.725-.06l-.387-.387a.562.562 0 0 1-.06-.725l.264-.369c.125-.175.136-.403.054-.602c-.083-.198-.253-.355-.465-.39l-.447-.075a.563.563 0 0 1-.47-.555v-.547c0-.275.199-.51.47-.555l.447-.075c.212-.035.382-.191.465-.39c.082-.199.071-.427-.054-.602l-.264-.369a.562.562 0 0 1 .06-.725l.387-.387a.563.563 0 0 1 .725-.06l.369.264c.175.125.403.136.602.054c.198-.083.355-.253.39-.465l.075-.447Z"
        fill="white"
        opacity="0.95"
      />
      <circle cx="14.5" cy="18" r="1.5" fill="white" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#FFC801" />
          <stop offset="100%" stopColor="#FF9932" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconArrow({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 10h12M12 6l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Maps Feature.icon keys (src/lib/features.ts) to the asset-pack icon set above. */
export function getFeatureIcon(icon: string, size = 28, color = "currentColor") {
  switch (icon) {
    case "cog-8-tooth": return <IconCog size={size} color={color} />;
    case "link": return <IconLink size={size} color={color} />;
    case "cube-16-solid": return <IconCube size={size} color={color} />;
    case "chart-pie": return <IconChartPie size={size} color={color} />;
    case "arrow-trending-up": return <IconTrendingUp size={size} color={color} />;
    case "arrow-path": return <IconArrowPath size={size} color={color} />;
    default: return <IconCog size={size} color={color} />;
  }
}
