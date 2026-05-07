export type ApiCharacter = {
  id: number,
  name: string,
  image: string
}

type ApiResponse = {
  results: ApiCharacter[]
}

const API_URL = "https://rickandmortyapi.com/api/character"

export const fetchApiCharacters = async (): Promise<ApiResponse> => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Failed to fetch characters.")
  }

  return response.json()
}
