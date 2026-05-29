import { Homepage } from "./Homepage"
import { Gameboard } from "./Gameboard"
import { Score } from "./Score";
import { Gameover } from "./Gameover"
import { Background } from "./Background"
import { useGame } from "./useGame"

export const App = () => {
  const game = useGame()

  return (
    <>
      <Background />

      {game.state.gameState === "idle" &&
        <Homepage
          onStartGame={game.actions.handleStartGame}
        />
      }

      {game.state.isGameScreen &&
        <>
          <header
            className="
            relative
            z-10
            mt-5
            w-full
            flex
            items-center
            justify-between
            px-6
            gap-4
            "
          >
            <button
              onClick={game.actions.handleBackToHome}
              className="
              text-sm
              text-slate-200
              bg-slate-900/70
              px-3
              py-1.5
              rounded-md
              border
              border-slate-800
              hover:bg-slate-700/60
              transition-colors
              cursor-pointer
              "
            >
              Back
            </button>
            <Score
              currentScore={game.state.currentScore}
              highScore={game.state.highScore}
            />
          </header>
          <main
            className="flex flex-col"
          >
            <Gameboard
              characters={game.state.characters}
              onCardClick={game.actions.handleCardClick}
            />
          </main>
        </>
      }

      {game.state.gameState === "ended" &&
        <Gameover
          onTryAgain={game.actions.handleTryAgain}
        />
      }
    </>
  )
}
