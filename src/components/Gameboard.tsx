import type { Character } from "./character";
import { Card } from "./Card";

type GameboardProps = {
  characters: Character[],
  onCardClick: (id: number) => void
}

export const Gameboard = ({ characters, onCardClick }: GameboardProps) => (
  <section
    className="
    grid
    gap-10
    grid-cols-2 md:grid-cols-3 xl:grid-cols-5
    z-10
    "
  >
    {
      characters.map(character => (
        <Card
          key={character.id}
          character={character}
          onCardClick={onCardClick}
        />
      ))
    }
  </section>
)
