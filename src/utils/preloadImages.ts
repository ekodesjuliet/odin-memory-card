import type { Character } from '../types/character'

export const preloadImages = async (characters: Character[]) => {
    return Promise.all(
        characters.map((character) => {
            return new Promise<void>((resolve) => {
                const img = new Image()
                img.src = character.image
                img.onload = () => resolve()
                img.onerror = () => resolve()
            })
        })
    )
}
