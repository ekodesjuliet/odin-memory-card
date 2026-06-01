import type { ReactNode } from "react";
import { Button } from "./Button";

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
            flex-col
            items-center
            justify-between
            px-6 xl:px-8 2xl:px-28
            gap-4
            "
  >
    <div className="self-start">
      <Button onClick={onBack}>
        Back
      </Button>
    </div>
    {score}
  </header >
)
