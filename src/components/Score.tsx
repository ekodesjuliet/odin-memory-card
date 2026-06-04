type ScoreProps = {
  currentScore: number,
  highScore: number
}

export const Score = ({ currentScore, highScore }: ScoreProps) => (
  <section
    className="
      flex
      self-center
      place-content-between
      rounded-md
      bg-slate-900/70
      px-4
      py-3
      border
      border-slate-800
      w-full md:w-80
      z-10
    "
  >
    <p className="text-sm text-lime-400">
      Score: <span className="text-slate-100 font-medium">{currentScore}</span>
    </p>

    <p className="text-sm text-cyan-400">
      Best: <span className="text-slate-100 font-medium">{highScore}</span>
    </p>
  </section>
)
