import type { Character } from '../types/character'
import { Card } from './Card'

type GameboardProps = {
    characters: Character[]
    onCardClick: (id: number) => void
}

export const Gameboard = ({ characters, onCardClick }: GameboardProps) => (
    <section className="z-10 grid grid-cols-2 gap-10 md:grid-cols-3 xl:grid-cols-5">
        {characters.map((character) => (
            <Card
                key={character.id}
                character={character}
                onCardClick={onCardClick}
            />
        ))}
    </section>
)
