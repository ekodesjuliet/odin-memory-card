type ScoreProps = {
    currentScore: number
    highScore: number
}

export const Score = ({ currentScore, highScore }: ScoreProps) => (
    <section className="z-10 flex w-full place-content-between self-center rounded-md border border-slate-800 bg-slate-900/70 px-4 py-3 md:w-80">
        <p className="text-sm text-lime-400">
            Score:{' '}
            <span className="font-medium text-slate-100">{currentScore}</span>
        </p>

        <p className="text-sm text-cyan-400">
            Best:{' '}
            <span className="font-medium text-slate-100">{highScore}</span>
        </p>
    </section>
)
