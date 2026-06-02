import { Homepage } from "./Homepage"
import { Gameboard } from "./Gameboard"
import { Score } from "./Score";
import { GameHeader } from "./GameHeader";
import { Gameover } from "./Gameover"
import { Background } from "./Background"
import { useGame } from "./useGame"
import { HeaderActions } from "./HeaderActions";

export const App = () => {
  const game = useGame()

  return (
    <>
      <Background />

      <HeaderActions
        isMuted={audio.state.isMuted}
        onToggleMute={audio.actions.handleToggleMute}
      />

      {game.state.gameState === "idle" &&
        <Homepage
          onStartGame={game.actions.handleStartGame}
        />
      }

      {game.state.isGameScreen &&
        <>
          <GameHeader
            onBack={game.actions.handleBackToHome}
            score={
              <Score
                currentScore={game.state.currentScore}
                highScore={game.state.highScore}
              />
            }
          />
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
