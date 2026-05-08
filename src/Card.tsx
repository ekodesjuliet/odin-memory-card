import type { Character } from "./character"

type CardProps = {
  character: Character
  onCardClick: (id: number) => void
}

export const Card = ({ character, onCardClick }: CardProps) => (
  <article
    onClick={() => onCardClick(character.id)}
  >
    <img src={character.image} alt={character.name} />
    <p>{character.name}</p>
  </article>
)
