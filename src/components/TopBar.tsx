import {
    VolumeMute,
    VolumeFull,
    HelpCircle,
    ArrowLeftStroke,
} from '@boxicons/react'
import { Button } from './Button'

type GameHeaderProps = {
    onBack: () => void
    isMuted: boolean
    onToggleMute: () => void
    showBackButton: boolean
    onToggleHelp: () => void
}

export const TopBar = ({
    onBack,
    isMuted,
    onToggleMute,
    showBackButton,
    onToggleHelp,
}: GameHeaderProps) => (
    <header
        className={`relative z-10 mt-6 flex w-full items-center px-2 ${
            showBackButton ? 'justify-between' : 'justify-end'
        }`}
    >
        {showBackButton && (
            <Button onClick={onBack} variant="icon">
                <ArrowLeftStroke
                    size="md"
                    className="cursor-pointer text-lime-400"
                />
            </Button>
        )}

        <div className="flex gap-0">
            {isMuted ? (
                <Button onClick={onToggleMute} variant="icon">
                    <VolumeMute
                        size="sm"
                        className="cursor-pointer text-lime-400"
                    />
                </Button>
            ) : (
                <Button onClick={onToggleMute} variant="icon">
                    <VolumeFull
                        size="sm"
                        className="cursor-pointer text-lime-400"
                    />
                </Button>
            )}

            <Button onClick={onToggleHelp} variant="icon">
                <HelpCircle
                    size="sm"
                    className="cursor-pointer text-lime-400"
                />
            </Button>
        </div>
    </header>
)
