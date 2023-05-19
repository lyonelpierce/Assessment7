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

console.time("addToZero []");
console.log(addToZero([])); // 5.068ms
console.timeEnd("addToZero []");

console.time("addToZero [1]");
console.log(addToZero([1])); // 0.069ms
console.timeEnd("addToZero [1]");

console.time("addToZero [1, 2, 3]");
console.log(addToZero([1, 2, 3])); // 0.056ms
console.timeEnd("addToZero [1, 2, 3]");

console.time("addToZero [1, 2, 3, -2]");
console.log(addToZero([1, 2, 3, -2])); // 0.056ms
console.timeEnd("addToZero [1, 2, 3, -2]");

console.log("----------------------------------------");
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

console.time("hasUniqueChars 'Monday'");
console.log(hasUniqueChars("Monday")); // 0.117ms // O(n) => O(6) => O(1)
console.timeEnd("hasUniqueChars 'Monday'");

console.time("hasUniqueChars 'Moonday'");
console.log(hasUniqueChars("Moonday")); // 0.136ms // O(n) => O(7) => O(1)
console.timeEnd("hasUniqueChars 'Moonday'");
console.log("----------------------------------------");

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

console.time("isPangram 'The quick brown fox jumps over the lazy dog!'");
console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // 0.173ms
console.timeEnd("isPangram 'The quick brown fox jumps over the lazy dog!'");

console.time("isPangram 'I like cats, but not mice'");
console.log(isPangram("I like cats, but not mice")); // 0.264ms
console.timeEnd("isPangram 'I like cats, but not mice'");
console.log("----------------------------------------");

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

console.time("findLongestWord");
console.log(findLongestWord(["hi", "hello"])); // 0.19ms
console.timeEnd("findLongestWord");
