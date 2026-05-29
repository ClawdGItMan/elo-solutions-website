type BrandMarkProps = {
  bg?: string;
  ring?: string;
  dot?: string;
};

/** Elo concentric-mark logo. Defaults to the light-surface (nav) palette;
 *  pass the dark-surface colors for the footer. */
export function BrandMark({
  bg = "#1A1A16",
  ring = "#E9E6DD",
  dot = "#1E5C44",
}: BrandMarkProps) {
  return (
    <svg className="brand__mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8.5" fill={bg} />
      <circle cx="16" cy="16" r="8.5" fill="none" stroke={ring} strokeWidth="2" />
      <circle cx="16" cy="16" r="3" fill={dot} />
    </svg>
  );
}
