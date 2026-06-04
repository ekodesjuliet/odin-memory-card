import { Button } from './Button'
import { Modal } from './Modal'

type HelpModalProps = {
    onClick: () => void
    isPlaying: boolean
}

export const HelpModal = ({ onClick, isPlaying }: HelpModalProps) => {
    const message = isPlaying
        ? 'Okay, so you get points by clicking images, but don’t click any of them more than once! That’s how you lose, and I really don’t want you to lose!'
        : "Pick your difficulty: Morty, Summer, or Rick. Unless you enjoy suffering, start with Morty. Think you're clever? Prove it. The universe has a way of correcting that assumption."

    return (
        <Modal>
            <p className="text-sm font-semibold text-slate-100">{message}</p>

            <div className="pt-2">
                <Button onClick={onClick}>Whatever!</Button>
            </div>
        </Modal>
    )
}
