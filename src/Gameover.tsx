import { Button } from "./Button";

type GameoverProps = {
  onTryAgain: () => void;
};

export const Gameover = ({ onTryAgain }: GameoverProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
    <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center shadow-2xl">
      <p className="text-lg font-semibold text-slate-100 sm:text-xl">
        Memory is fragile. Yours just proved it.
      </p>

      <div className="pt-2">
        <Button onClick={onTryAgain}>
          Try Again, Morty
        </Button>
      </div>
    </div>
  </div>
);
