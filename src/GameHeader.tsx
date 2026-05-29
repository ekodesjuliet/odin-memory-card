import type { ReactNode } from "react";

type GameHeaderProps = {
  onBack: () => void
  score: ReactNode
}

export const GameHeader = ({ onBack, score }: GameHeaderProps) => (
  <header
    className="
            relative
            z-10
            mt-5
            w-full
            flex
            items-center
            justify-between
            px-6
            gap-4
            "
  >
    <button
      onClick={onBack}
      className="
              text-sm
              text-slate-200
              bg-slate-900/70
              px-3
              py-1.5
              rounded-md
              border
              border-slate-800
              hover:bg-slate-700/60
              transition-colors
              cursor-pointer
              "
    >
      Back
    </button>
    {score}
  </header>
)
