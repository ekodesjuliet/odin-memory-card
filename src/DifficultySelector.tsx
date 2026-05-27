import type { Difficulty } from "./App"
import { DIFFICULTY_CONFIG } from "./App"

type DifficultySelectorProps = {
  onStartGame: (difficulty: Difficulty) => void
}

export const DifficultySelector = ({ onStartGame }: DifficultySelectorProps) => (
  <section className="flex flex-col gap-10 text-xl mt-22 items-center">

    {DIFFICULTY_CONFIG.map(config => (
      <button
        key={config.difficulty}
        type="button"
        onClick={() => onStartGame(config.difficulty)}
        className="
        w-40 md:w-60
        md:p-2
        rounded-sm
        bg-green-800
        text-amber-50
        cursor-pointer
        transition-colors duration-300
        active:scale-95
        overflow-hidden
        relative
        hover:shadow-[0_0_12px_#39ff14]
        group
        "
      >
        <span className="
          relative z-10
          flex justify-between
          before:content-['[']
          after:content-[']']
          md:before:text-2xl
          md:after:text-2xl
          before:text-lime-300
          after:text-lime-300
          group-hover:before:text-white
          group-hover:after:text-white
          md:text-2xl
          items-center
          ">
          {config.displayName}
        </span>

        <span
          className="
          absolute inset-0
          origin-center
          bg-green-400
          opacity-25
          scale-x-0
          transition-transform duration-300
          group-hover:scale-x-100
          pointer-events-none
          "
        />
      </button>
    ))}

  </section >
)
