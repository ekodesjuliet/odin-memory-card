export type ApiCharacter = {
    id: number
    name: string
    image: string
}

type ApiResponse = {
    results: ApiCharacter[]
}

export const fetchApiCharacters = async (): Promise<ApiResponse> => {
    const page = Math.floor(Math.random() * 41) + 1

    const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
    )

    if (!response.ok) {
        throw new Error('Failed to fetch characters.')
    }

    return response.json()
}
