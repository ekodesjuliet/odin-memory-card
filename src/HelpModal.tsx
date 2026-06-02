import { Button } from "./Button";
import { Modal } from "./Modal";

type HelpModalProps = {
  onClick: () => void;
};

export const HelpModal = ({ onClick }: HelpModalProps) => (
  <Modal>
    <p className="text-sm font-semibold text-slate-100">
      Get points by clicking on an image but don't click on any more than once!
    </p>

    <div className="pt-2">
      <Button onClick={onClick}>
        Whatever!
      </Button>
    </div>
  </Modal>
);
