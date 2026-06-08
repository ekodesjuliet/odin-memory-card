import { Button } from './Button'
import { Modal } from './Modal'

type WinningModalProps = {
    onClick: () => void
}

export const WinningModal = ({ onClick }: WinningModalProps) => (
    <Modal>
        <p className="text-sm font-semibold text-slate-100">
            “Ugh… fine. You did it.”
        </p>

        <div className="pt-2">
            <Button onClick={onClick}>Do it again.</Button>
        </div>
    </Modal>
)
