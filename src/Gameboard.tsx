import type { Character } from "./character";
import { Card } from "./Card";

type GameboardProps = {
  characters: Character[]
}

export const Gameboard = ({ characters }: GameboardProps) => (
  <section>
    {
      characters.map(character => (
        <Card
          key={character.id}
          character={character}
        />
      ))
    }
  </section>
)
