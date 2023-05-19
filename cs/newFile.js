// Sum Zero

function addToZero(numbers) {
  const complements = new Set();

  for (let number of numbers) {
    if (complements.has(-number)) {
      return true;
    }
    complements.add(number);
  }

  return false;
}

console.log("AddToZero");
console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

// Unique Characters

function hasUniqueChars(word) {
  const charSet = new Set();

  for (let char of word) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }

  return true;
}

console.log("UniqueChars");
console.log(hasUniqueChars("Monday")); // O(n) => O(6) => O(1)
console.log(hasUniqueChars("Moonday")); // O(n) => O(7) => O(1)

// Pangram Sentence

function isPangram(sentence) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const lowercaseSentence = sentence.toLowerCase();

  for (let char of abc) {
    if (!lowercaseSentence.includes(char)) {
      return false;
    }
  }

  return true;
}

console.log("isPangram");
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

// Longest Word

function findLongestWord(words) {
  let longestLength = 0;

  for (let word of words) {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }

  return longestLength;
}

console.log("findLongestWord");
console.log(findLongestWord(["hi", "hello"]));
