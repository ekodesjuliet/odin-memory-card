import type { Character } from "./character";
import { Card } from "./Card";

type GameboardProps = {
  cardCount: number,
  characters: Character[]
}

export const Gameboard = ({ cardCount, characters }: GameboardProps) => (
  <section>
    {
      characters.slice(0, cardCount)
        .map(character => (
          <Card
            key={character.id}
            character={character}
          />
        ))
    }
  </section>
)
