type GameoverProps = {
  restartGame: () => void;
};

export const Gameover = ({ restartGame }: GameoverProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
    <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center shadow-2xl">
      <p className="text-lg font-semibold text-slate-100 sm:text-xl">
        Memory is fragile. Yours just proved it.
      </p>

      <button
        onClick={restartGame}
        className="mt-6 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-semibold text-slate-950 transition-all duration-200 hover:scale-105 hover:bg-emerald-400 active:scale-95 cursor-pointer"
      >
        Try Again, Morty
      </button>
    </div>
  </div>
);
