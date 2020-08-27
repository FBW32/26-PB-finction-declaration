// Print your answers to the console.

console.log("")
console.log("QUESTION 1: REVERSE")
// 1. Reverse
// Create a function to reverse a number.

// Examples:
// reverse(34532) -> expected output: 23543

function reverseNumber1(numberStr1) {
    numberStr1 = numberStr1 + "";
    return numberStr1.split("").reverse("").join("")
}
console.log(reverseNumber1(34532));
// 23543




console.log("")
console.log("QUESTION 2: ALPHABETICAL ORDER")
// 2. Alphabetical Order
// Create a function to sort a string into alphabetical order. Examples: <<<<<<< HEAD

// alphaOrder("webdev") -> expected output: "bdeevw"
// Note: Assume numbers, symbols and punctuation are not included in the string.

function alphaOrder1(alphaString1) {
    return alphaString1.split("").reverse().join("");
}
console.log(alphaOrder1("webdev"));
// vedbew



console.log("")
console.log("QUESTION 3: GREATER NUMBERS")
// 3. The Greater Numbers
// Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. Examples:

// findGreatest([3, 4, 5], 4) -> expected output: 5
// findGreatest([10, 20, 30], 12) -> expected output: 20, 30
// findGreatest([0, 10, 3], 4) -> expected output: 10

function findGreatest1([num1, num2, num3], numX) {
    if ((num1 > numX) && (num2 > numX) && (num3 > numX)) {
        console.log(num1, num2, num3)
    }
    else if ((num1 > numX) && (num2 > numX)) {
        console.log(num1, num2)
    }
    else if ((num1 > numX) && (num3 > numX)) {
        console.log(num1, num3)
    }
    else if ((num2 > numX) && (num3 > numX)) {
        console.log(num2, num3)
    }
    else if (num1 > numX) {
        console.log(num1)
    }
    else if (num2 > numX) {
        console.log(num1)
    }
    else if (num3 > numX) {
        console.log(num1)
    }
    else (`None of the numbers are bigger than ${numX}`)
}
findGreatest1([9, 10, 10], 4);
// 10 10




console.log("")
console.log("QUESTION 4: DOG YEARS")
// 4. Dog Years
// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years.
// Example
// dogAge(4) -> expected output example: "Your doggo is 28 years old in human years!"

// 1 human year = 7 dog years

function dogAge(humanYears) {
    humanAge1 = humanYears * 7
    console.log(`Your doggo is ${humanAge1} years old in human years!`)
}
dogAge(4);
// Your doggo is 28 years old in human years!



console.log("")
console.log("QUESTION 5: LIFETIME SUPPLY")
// 5. A Lifetime Supply...
// Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.

// Examples:

// calcSupply(25, 2) -> expected output: You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80.
// calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps (3 a day) to last you till the age of 80.
// Bonus - A lifetime supply Accept floating point values for amount per day and round the result.

function calcSupply(age, amountPerDay) {
    let food1 = ((80 - age) * 365) * amountPerDay
    console.log(`You will need ${food1} of your favourite snack!`)
}
calcSupply(25, 2);
// You will need 40150 of your favourite snack!
calcSupply(40, 3);
// You will need 43800 of your favourite snack!




console.log("")
console.log("QUESTION 6: FIND LONGEST WORD")
// 6. For the longest word
// Create a function to find the longest word in string. Examples:

// longestWord("this is a web development course") -> expected output: "development"

function findLongestWord(longest1) {
    let strSplit1 = longest1.split(' ');
    let longestWord = 0;
    for (let i = 0; i < strSplit1.length; i++) {
        if (strSplit1[i].length > longestWord) {
            longestWord = strSplit1[strSplit1[i].length];
        }
    }
    console.log(`The longest word in this string is ${longestWord}!`)
}
findLongestWord("this is a web development course");
// The longest word in this string is development!




console.log("")
console.log("QUESTION 7: AEIOU")
// 7. AEIOU: Vowels
// Create a function that takes a string in its parameters and counts the number of vowels in the string. Examples:

// findVowels("this is a string") -> expected output: 4 vowels found

// Notes: vowels are "a, e, i, o u".

function vowelsString(numberofVowels) {
    let vowels = 'aeiouAEIOU';
    let countVowels = 0;
    let countConsonants = 0;
    for (let i = 0; i < numberofVowels.length; i++) {
        if (vowels.indexOf(numberofVowels[i]) !== -1) {
            countVowels += 1;
        }
        else {
            countConsonants += 1;
        }
    }
    console.log(`There are ${countVowels} vowels and ${countConsonants} consonants in this string!`);
}
vowelsString("this is a string hello!");

// !== -1 --> for vowels
// === -1 --> for consonants




console.log("")
console.log("QUESTION 8: DATA TYPES")
// 8. Data Types
// Create a function that detects the data type of the argument passed.

// Examples:

// detectType("hello") -> expected output: type of argument is a string.
// detectType(4) -> expected output: type of argument is a number.

function detectType(data1) {
    dataType = typeof data1
    console.log(`${data1} is a ${dataType} type!`)
}
detectType("hello");
// string
detectType(4);
// number




console.log("")
console.log("QUESTION 9: COUNT OCCURANCES")
// 9. Count Occurrences
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Examples:

// countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3

function countOccurrences(stringInput, letter1) {
    let splitStringInput = stringInput.split('');
    // console.log(splitStringInput)
    let count2 = 0;
    for (let i = 0; i < stringInput.length; i++) {
        if (splitStringInput[i] === letter1) {
            count2 += 1;
        }
    }
    console.log(`There is ${count2} of lettter ${letter1}!`)
}

countOccurrences("this is a string", "i");
//
// countOccurrences("this is a string", "e");
//




console.log("")
console.log("QUESTION 10: COUNTING LETTERS")
// 10. Counting Letters
// Create a function that counts the number of occurrences of each letter in a string.

// Examples:

// countLetters("tree") -> expected output: t: 1, r: 1, e: 2


function countLetters(lettersString) {
    letterArray = lettersString.split("").sort().join("");
    let letterCount = 1;
    for (let i = 0; i < letterArray.length; i++) {
        if (letterArray[i] === letterArray[i + 1]) {
            letterCount++;
        }
        else {
            console.log(letterArray[i] + " " + letterCount)
            letterCount = 1;
        }
    }
}
countLetters("Tarratatata!");

// !== -1 --> for vowels
// === -1 --> for consonants
