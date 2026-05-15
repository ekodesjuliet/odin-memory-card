type ScoreProps = {
  currentScore: number,
  highScore: number
}

export const Score = ({ currentScore, highScore }: ScoreProps) => (
  <section>
    <p>
      Score: {currentScore}
    </p>
    <p>
      High Score: {highScore}
    </p>
  </section>
)
