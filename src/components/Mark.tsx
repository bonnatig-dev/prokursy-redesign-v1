type MarkProps = {
  fill?: string
  ink?: string
  size?: number
}

/** Simple own monogram, not the Drift logo. */
export function Mark({ fill = '#321C04', ink = '#FFF9F2', size = 40 }: MarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill={fill} />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fill={ink}
        fontFamily="'Golos Text', Arial, sans-serif"
        fontSize="18"
        fontWeight="600"
      >
        Б
      </text>
    </svg>
  )
}
