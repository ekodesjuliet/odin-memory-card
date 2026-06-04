import type { Character } from './character'
import { fetchApiCharacters } from './rickAndMortyApi'

export const fetchCharacters = async (): Promise<Character[]> => {
    const data = await fetchApiCharacters()

    return data.results.map((char) => ({
        id: char.id,
        name: char.name,
        image: char.image,
    }))
}
