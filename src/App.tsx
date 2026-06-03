import { Homepage } from "./Homepage"
import { Gameboard } from "./Gameboard"
import { Score } from "./Score";
import { TopBar } from "./TopBar";
import { GameOverModal } from "./GameOverModal"
import { Background } from "./Background"
import { useGame } from "./useGame"
import { useAudio } from "./useAudio";
import { HelpModal } from "./HelpModal";

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
        showBackButton={game.state.isGameScreen}
        onBack={game.actions.handleBackToHome}
        isMuted={audio.state.isMuted}
        onToggleMute={audio.actions.handleToggleMute}
        onToggleHelp={game.actions.handleToggleHelp}
      />

      {game.state.isHelpOpen &&
        <HelpModal
          onClick={game.actions.handleToggleHelp}
        />
      }

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
        <GameOverModal
          onTryAgain={game.actions.handleTryAgain}
        />
      }
    </>
  )
}
