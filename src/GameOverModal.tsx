import { Button } from "./Button";
import { Modal } from "./Modal";

type GameOverModalProps = {
  onTryAgain: () => void;
};

export const GameOverModal = ({ onTryAgain }: GameOverModalProps) => (
  <Modal>
    <p className="text-sm font-semibold text-slate-100">
      Your brain couldn’t handle a simple pattern.
    </p>

    <div className="pt-2">
      <Button onClick={onTryAgain}>
        Run it back!
      </Button>
    </div>
  </Modal>
);
