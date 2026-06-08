import { useEffect, useState } from 'react'
import 'ldrs/react/Quantum.css'
import { Quantum } from 'ldrs/react'
import { Homepage } from './components/Homepage'
import { Gameboard } from './components/Gameboard'
import { Score } from './components/Score'
import { TopBar } from './components/TopBar'
import { GameOverModal } from './components/GameOverModal'
import { Background } from './components/Background'
import { HelpModal } from './components/HelpModal'
import { WinningModal } from './components/WinningModal'
import { useGame } from './hooks/useGame'
import { useAudio } from './hooks/useAudio'

export const App = () => {
    const game = useGame()
    const { audioRef, isMuted, bgMusic, handleToggleMute } = useAudio()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false)
        }, 5000)

        return () => clearTimeout(timeoutId)
    }, [])

    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black">
                <Quantum size="150" speed="2" color="#9ae600" />
            </div>
        )
    }

    return (
        <>
            <Background />

            <audio ref={audioRef} src={bgMusic}></audio>

            <TopBar
                showBackButton={game.state.isGameScreen}
                onBack={game.actions.handleBackToHome}
                isMuted={isMuted}
                onToggleMute={handleToggleMute}
                onToggleHelp={game.actions.handleToggleHelp}
            />
            {game.state.isHelpOpen && (
                <HelpModal
                    isPlaying={game.state.isGameScreen}
                    onClick={game.actions.handleToggleHelp}
                />
            )}
            {game.state.gameState === 'idle' && (
                <Homepage onStartGame={game.actions.handleStartGame} />
            )}
            {game.state.isGameScreen && (
                <>
                    <main className="m-6 flex flex-col gap-6">
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
            )}
            {game.state.gameState === 'ended' && (
                <GameOverModal onTryAgain={game.actions.handleTryAgain} />
            )}

            {game.state.maxScore === game.state.currentScore &&
                game.state.gameState === 'active' && (
                    <WinningModal onClick={game.actions.handleTryAgain} />
                )}
        </>
    )
}
