type ButtonProps = {
  text: string
  variant?: "primary" | "secondary"
  onClick?: () => void
}

export default function Button({
  text,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-semibold transition"

  const styles =
    variant === "primary"
      ? "bg-[#ccff00] text-black hover:opacity-80"
      : "border border-gray-500 text-white hover:bg-white hover:text-black"

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {text}
    </button>
  )
}