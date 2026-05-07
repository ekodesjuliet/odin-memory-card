import type { Character } from "./character"

type CardProps = {
  character: Character
}

export const Card = ({ character }: CardProps) => (
  <article>
    <img src={character.image} alt={character.name} />
    <p>{character.name}</p>
  </article>
)
