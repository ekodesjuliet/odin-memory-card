import type { ReactNode } from "react"

type ButtonProps = {
  onClick: () => void
  children: ReactNode
}

export const Button = ({ onClick, children }: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className="
      cursor-pointer
      transition-all
      duration-200
      font-medium
      select-none
      text-xs
      text-black
      bg-lime-400/90
      px-5 py-3
      rounded-xl
      shadow-[0_0_10px_rgba(132, 255, 100, 0.25)]
      hover:bg-lime-300
      hover:shadow-[0_0_18px_rgba(132, 255, 100, 0.35)]
      hover:scale-[1.03]
      active:scale-[0.98]
    "
  >
    {children}
  </button >
)

