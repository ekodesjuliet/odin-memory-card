import type { Difficulty } from '../types/difficulty'
import { DIFFICULTY_CONFIG } from '../types/difficulty'

type DifficultySelectorProps = {
    onDifficultySelect: (difficulty: Difficulty) => void
}

export const DifficultySelector = ({
    onDifficultySelect,
}: DifficultySelectorProps) => (
    <section className="mt-22 flex flex-col items-center gap-10 text-xl">
        {DIFFICULTY_CONFIG.map((config) => (
            <button
                key={config.difficulty}
                type="button"
                onClick={() => onDifficultySelect(config.difficulty)}
                className="group relative w-40 cursor-pointer overflow-hidden rounded-sm bg-green-800 text-amber-50 transition-colors duration-300 hover:shadow-[0_0_12px_#39ff14] active:scale-95 md:w-60 md:p-2"
            >
                <span className="relative z-10 flex items-center justify-between before:text-lime-300 before:content-['['] group-hover:before:text-white after:text-lime-300 after:content-[']'] group-hover:after:text-white md:text-2xl md:before:text-2xl md:after:text-2xl">
                    {config.displayName}
                </span>

                <span className="pointer-events-none absolute inset-0 origin-center scale-x-0 bg-green-400 opacity-25 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
        ))}
    </section>
)
