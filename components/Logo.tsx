// NW monogram: the N's right leg and the W's left leg are the same stroke,
// fusing the two letters into one connected mark.
const MONOGRAM_PATH =
  "M8,8 L8,56 M8,8 L34,56 M34,8 L34,56 L54,18 L74,56 L94,8";

export default function Logo({
  size = 34,
  color = "#2E372C",
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  const width = (size * 100) / 64;
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 100 64"
      fill="none"
      className={className}
      role="img"
      aria-label="Nicole Wang"
    >
      <path
        d={MONOGRAM_PATH}
        stroke={color}
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
