export const selectRandomWord = (words) => {
  const randomWord = words[Math.floor(Math.random() * words.length)]
  return randomWord
}
