import type { Character } from "./character";
import { Card } from "./Card";

type GameboardProps = {
  cardCount: number,
  characters: Character[],
  onCardClick: (id: number) => void
}

export const Gameboard = ({ cardCount, characters, onCardClick }: GameboardProps) => (
  <section>
    {
      characters.slice(0, cardCount)
        .map(character => (
          <Card
            key={character.id}
            character={character}
            onCardClick={onCardClick}
          />
        ))
    }
  </section>
)
