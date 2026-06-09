import { useEffect, useState } from 'react'
import { useGame } from './hooks/useGame'
import { useAudio } from './hooks/useAudio'
import { Homepage } from './components/Homepage'
import { Gameboard } from './components/Gameboard'
import { Score } from './components/Score'
import { TopBar } from './components/TopBar'
import { GameOverModal } from './components/GameOverModal'
import { Background } from './components/Background'
import { HelpModal } from './components/HelpModal'
import { WinningModal } from './components/WinningModal'
import { LoadingScreen } from './components/LoadingScreen'

export const App = () => {
    const game = useGame()
    const { isMuted, handleToggleMute } = useAudio()
    const [isAppReady, setIsAppReady] = useState<boolean>(false)
    const isLoading = !isAppReady || game.state.gameState === 'loading'

    useEffect(() => {
        document.fonts.ready.then(() => {
            setIsAppReady(true)
        })
    }, [])

    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <>
            <Background />

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
