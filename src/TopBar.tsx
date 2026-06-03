import { VolumeMute, VolumeFull, HelpCircle, ArrowLeftStroke } from "@boxicons/react"
import { Button } from "./Button";

type GameHeaderProps = {
  onBack: () => void
  isMuted: boolean,
  onToggleMute: () => void,
  showBackButton: boolean,
  onToggleHelp: () => void
}

export const TopBar = ({ onBack, isMuted, onToggleMute, showBackButton, onToggleHelp }: GameHeaderProps) => (
  <header
    className={
      `flex w-full items-center mt-6 relative z-10 px-6 2xl:px-10 ${showBackButton ? "justify-between" : "justify-end"
      }`}
  >

    {showBackButton &&
      <Button onClick={onBack} variant="icon">
        <ArrowLeftStroke
          size="md"
          className="text-lime-400 cursor-pointer"
        />
      </Button>
    }

    <div className="flex gap-6">
      {
        isMuted
          ?
          <Button onClick={onToggleMute} variant="icon">
            <VolumeMute
              size="sm"
              className="text-lime-400 cursor-pointer"
            />
          </Button>
          :
          <Button onClick={onToggleMute} variant="icon">
            <VolumeFull
              size="sm"
              className="text-lime-400 cursor-pointer"
            />
          </Button>
      }

      <Button onClick={onToggleHelp} variant="icon">
        <HelpCircle
          size="sm"
          className="text-lime-400 cursor-pointer"
        />
      </Button>
    </div>
  </header>
)
