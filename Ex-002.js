function palidromos(word) {
  const clearWord = word.toLowerCase().split(" ").join("");
  let reverseWord = "";
  let lengthWord = clearWord.length - 1;
  for (let i = 0; i <= clearWord.length - 1; i++) {
    reverseWord += clearWord[lengthWord];
    lengthWord--;
  }

  return clearWord === reverseWord;
}

console.log(palidromos("O lobo ama o bolo"));

/**
 * Verifique se uma palavra é palíndromos
 */
