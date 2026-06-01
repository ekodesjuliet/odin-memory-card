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
            items-center
            justify-between
            px-6
            gap-4
            "
  >
    <Button onClick={onBack}>
      Back
    </Button>
    {score}
  </header >
)
