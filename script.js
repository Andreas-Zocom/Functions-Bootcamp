// find lagest number
function findLargerNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Calculate area
function calculateRectangleArea(length, width) {
  return length * width;
}

//Checking if a number is even or odd:
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Checking if a string is empty:
function isStringEmpty(str) {
  if (str === "") {
    return true;
  } else {
    return false;
  }
}

// Checking if a year is a leap years:
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

//3. Determining if a number is positive, negative, or zero
function checkNumberStatus(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// 10 timmy and sarah
function areTheyInLove(flower1Petals, flower2Petals) {
  if (
    (flower1Petals % 2 === 0 && flower2Petals % 2 !== 0) ||
    (flower1Petals % 2 !== 0 && flower2Petals % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}
// Example usage:
const flower1Petals = 3;
const flower2Petals = 4;

const inLoves = areTheyInLove(flower1Petals, flower2Petals);
console.log(inLoves);
// Output will be true

//11 Du kommer att få ett ord. Din uppgift är att returnera det mellersta tecknet i ordet. 
//Om ordets längd är udda, returnera det mellersta tecknet. 
//Om ordets längd är jämnt, returnera de två mellersta tecknen

//12: Skriv en funktion som retunerar längden av det kortaste ordet i en 
// mening **kan innehålla en loop för att lösas exempelvis en for loop

function findShortestWordLength(str) {
  const words = str.split(" ");
  // Initialize a variable to store the length of the shortest word,
  let shortestLength = Infinity;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordLength = word.length;
    // Update the shortestLength if the current word is shorter.
    if (wordLength < shortestLength) {
      shortestLength = wordLength;
    }
  }
  return shortestLength;
}
// Example usage:
const inputString = "The quick brown fox jumps over the lazy dog";
const shortestLength = findShortestWordLength(inputString);
console.log(shortestLength); // Output will be 3 (for "The" and "dog")

// Kolla efter ett primtal
function isPrime(number) {
  // Handle special cases for 0 and 1.
  if (number <= 1) {
    return false;
  }
  // Check for divisibility from 2 to the square root of the number.
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // It's divisible by a number other than 1 and itself.
    }
  }
  return true; // It's prime.
}

// Example usage:
const num1 = 17; // Prime number
const num2 = 10; // Not a prime number

console.log(isPrime(num1)); // Output will be true
console.log(isPrime(num2)); // Output will be fals

/* 
     		 1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
 */

// kolla summan av talen i traingel
function sumOfNthRow(n) {
  if (n <= 0) {
    return 0; // Returnera 0 om n är mindre än eller lika med 0.
  }

  let rowStart = 1; // Startvärdet för varje rad.
  let sum = 0; // Variabel för att räkna summan.

  // Loopa genom varje rad och addera nummer till summan.
  for (let i = 0; i < n; i++) {
    let current = rowStart; // Det första numret i raden.
    for (let j = 0; j <= i; j++) {
      sum += current; // Lägg till numret i summan.
      current += 2; // Öka med 2 för nästa nummer i raden.
    }
    rowStart += 2; // Öka startvärdet för nästa rad med 2.
  }

  return sum;
}
// Exempelanvändning:
const n = 4; // Beräkna summan av den 4:e raden.
const result = sumOfNthRow(n);
console.log(result); // Utmatningen blir 64 (eftersom 13 + 15 + 17 + 19 = 64)
