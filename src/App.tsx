import { Homepage } from "./Homepage"
import { Gameboard } from "./Gameboard"
import { Score } from "./Score";
import { TopBar } from "./TopBar";
import { Gameover } from "./Gameover"
import { Background } from "./Background"
import { useGame } from "./useGame"
import { useAudio } from "./useAudio";
import { Button } from "./Button";

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
        onToggleHelp={game.actions.handleToggleHelp}
      />

      {game.state.isHelpOpen &&
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center shadow-2xl">
            <p className="text-xs font-semibold text-slate-100">
              Get points by clicking on an image but don't click on any more than once!
            </p>

            <div className="pt-2">
              <Button onClick={game.actions.handleToggleHelp}>
                Okey dokey!
              </Button>
            </div>
          </div>
        </div>
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
        <Gameover
          onTryAgain={game.actions.handleTryAgain}
        />
      }
    </>
  )
}
