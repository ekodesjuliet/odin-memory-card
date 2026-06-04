import type { Character } from '../types/character.ts'

type CardProps = {
    character: Character
    onCardClick: (id: number) => void
}

export const Card = ({ character, onCardClick }: CardProps) => (
    <article className="group z-10 flex flex-col items-center gap-2 text-center">
        <button
            type="button"
            onClick={() => onCardClick(character.id)}
            className="relative flex cursor-pointer flex-col items-center overflow-hidden rounded-md border border-lime-400 bg-black/40 drop-shadow-[2px_3px_1px_#00B0FF] transition-all duration-300 hover:scale-105 hover:border-[#00B0FF] hover:shadow-[0_0_25px_rgba(0,255,200,0.35)]"
        >
            <div className="absolute inset-0 bg-linear-to-tl from-black/40 opacity-80 group-hover:opacity-60" />

            <img
                className="w-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-1 group-hover:saturate-150"
                src={character.image}
                alt={character.name}
            />

            <p className="relative z-10 w-30 truncate px-2 py-2 text-xs tracking-wide text-lime-300 drop-shadow-[0_0_6px_rgba(0,255,100,0.6)] group-hover:text-white md:w-50 lg:w-60">
                {character.name}
            </p>
        </button>
    </article>
)
