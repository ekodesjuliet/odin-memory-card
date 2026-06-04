export const DIFFICULTY_CONFIG = [
    {
        difficulty: 'easy',
        cardCount: 8,
        displayName: 'Morty',
    },
    {
        difficulty: 'medium',
        cardCount: 12,
        displayName: 'Summer',
    },
    {
        difficulty: 'hard',
        cardCount: 20,
        displayName: 'Rick',
    },
] as const

export type Difficulty = (typeof DIFFICULTY_CONFIG)[number]['difficulty']
