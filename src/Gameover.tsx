type GameoverProps = {
  restartGame: () => void
}

export const Gameover = ({ restartGame }: GameoverProps) => (
  <div className="overlay">
    <dialog open>
      <p>Memory is fragile. Yours just proved it.</p>
      <button
        onClick={restartGame}
      >
        Try Again, Morty!
      </button>
    </dialog>
  </div>
)
