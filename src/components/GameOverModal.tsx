import { Button } from './Button'
import { Modal } from './Modal'

type GameOverModalProps = {
    onTryAgain: () => void
}

export const GameOverModal = ({ onTryAgain }: GameOverModalProps) => (
    <Modal>
        <p className="text-sm font-semibold text-slate-100">
            You lost a memory game. That’s honestly kind of embarrassing.
        </p>

        <div className="pt-2">
            <Button onClick={onTryAgain}>Fine.</Button>
        </div>
    </Modal>
)
