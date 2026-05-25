import type { Character } from "./character"

type CardProps = {
  character: Character
  onCardClick: (id: number) => void
}

export const Card = ({ character, onCardClick }: CardProps) => (
  <article
    className="
    flex
    flex-col
    items-center
    text-center
    text-amber-300
    text-sm
    gap-2
    z-10
    "
  >
    <button
      type="button"
      className="cursor-pointer"
      onClick={() => onCardClick(character.id)}
    >
      <img
        className="
        rounded-sm
        "
        src={character.image}
        alt={character.name}
      />
      <p>{character.name}</p>
    </button>
  </article>
)
