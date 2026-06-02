import type { ReactNode } from "react";
import { Button } from "./Button";

type GameHeaderProps = {
  onBack: () => void
  actions: ReactNode
}

export const GameHeader = ({ onBack, actions }: GameHeaderProps) => (
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
    <div className="flex place-content-between w-full items-center">
      <Button onClick={onBack}>
        Back
      </Button>
      {actions}
    </div>
  </header >
)
