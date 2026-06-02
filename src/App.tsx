import { Homepage } from "./Homepage"
import { Gameboard } from "./Gameboard"
import { Score } from "./Score";
import { GameHeader } from "./GameHeader";
import { Gameover } from "./Gameover"
import { Background } from "./Background"
import { useGame } from "./useGame"
import { HeaderActions } from "./HeaderActions";
import { useAudio } from "./useAudio";

export const App = () => {
  const game = useGame()
  const audio = useAudio()

  return (
    <>
      <Background />

      <audio
        ref={audio.state.audioRef}
        src={audio.state.bgMusic}>
      </audio>

      {!game.state.isGameScreen &&
        <HeaderActions
          isGameScreen={game.state.isGameScreen}
          isMuted={audio.state.isMuted}
          onToggleMute={audio.actions.handleToggleMute}
        />
      }

      {game.state.gameState === "idle" &&
        <Homepage
          onStartGame={game.actions.handleStartGame}
        />
      }

      {game.state.isGameScreen &&
        <>
          <GameHeader
            onBack={game.actions.handleBackToHome}
            actions={
              <HeaderActions
                isMuted={audio.state.isMuted}
                onToggleMute={audio.actions.handleToggleMute}
              />
            }
          />
          <main
            className="flex flex-col m-6 gap-6"
          >

            <Score
              currentScore={game.state.currentScore}
              highScore={game.state.highScore}
            />

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
