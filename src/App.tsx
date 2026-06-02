import { Homepage } from "./Homepage"
import { Gameboard } from "./Gameboard"
import { Score } from "./Score";
import { TopBar } from "./TopBar";
import { Gameover } from "./Gameover"
import { Background } from "./Background"
import { useGame } from "./useGame"
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

      <TopBar
        isGameScreen={game.state.isGameScreen}
        onBack={game.actions.handleBackToHome}
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
