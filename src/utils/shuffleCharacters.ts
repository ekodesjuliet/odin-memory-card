import type { Character } from "./character";

export const shuffleCharacters = (characters: Character[]) => {
  const shuffled = [...characters]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled
}
