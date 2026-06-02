import { VolumeMute, VolumeFull, HelpCircle } from "@boxicons/react"
import { Button } from "./Button";

type GameHeaderProps = {
  onBack: () => void
  isMuted: boolean,
  onToggleMute: () => void,
  isGameScreen: boolean,
  onToggleHelp: () => void
}

export const TopBar = ({ onBack, isMuted, onToggleMute, isGameScreen, onToggleHelp }: GameHeaderProps) => (
  <header
    className={
      `flex w-full items-center mt-6 relative z-10 px-6 ${isGameScreen ? "justify-between" : "justify-end"
      }`}
  >

    {isGameScreen &&
      <Button onClick={onBack}>
        Back
      </Button>
    }

    <div className="flex gap-3">
      {
        isMuted
          ? <VolumeMute
            size="xs"
            className="text-lime-400 cursor-pointer"
            onClick={onToggleMute}
          />
          : <VolumeFull
            size="xs"
            className="text-lime-400 cursor-pointer"
            onClick={onToggleMute}
          />
      }

      <HelpCircle
        size="xs"
        className="text-lime-400 cursor-pointer"
        onClick={onToggleHelp}
      />
    </div>
  </header>
)
