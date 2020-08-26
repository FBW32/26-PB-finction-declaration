// Functions Exercises

/* 1. Reverse
    Create a function to reverse a number.
    Examples:
    reverse(34532) -> expected output: 23543
*/
function reverseNum(num) {
    num = num + "";
    let output = num.split("").reverse().join("");
    console.log(output);
}reverseNum(569834); // 23543

/* 2. Alphabetical Order
    Create a function to sort a string into alphabetical order. Examples: <<<<<<< HEAD
    alphaOrder("webdev") -> expected output: "bdeevw"
    Note: Assume numbers, symbols and punctuation are not included in the string.
*/
function alphabeticalOrder(myString) {
    let output = myString.split("").sort().join("");
    console.log(output);
}alphabeticalOrder("javascript"); // aacijprstv

/* 3. The Greater Numbers
    Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. Examples:
    findGreatest([3, 4, 5], 4) -> expected output: 5
    findGreatest([10, 20, 30], 12) -> expected output: 20, 30
    findGreatest([0, 10, 3], 4) -> expected output: 10
*/
function greaterNumbers(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
         let largest = arr[i];
             console.log(largest);
        }
        
    }
}greaterNumbers([3, 4, 5], 4); // 5
greaterNumbers([10, 20, 30], 15); 
// 20
// 30

/* 4. Dog Years
    Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years.
    Example
    dogAge(4) -> expected output example: "Your doggo is 28 years old in human years!"
*/
function dogAge(age) {
    let dogYears = 7 * age;
    console.log(`Your doggo is ${dogYears} years old in human years!`);
}dogAge(5); // Your doggo is 35 years old in human years!

/* 5. A Lifetime Supply...
    Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
    Examples:
    calcSupply(25, 2) -> expected output: You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80.
    calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps (3 a day) to last you till the age of 80.
    Bonus - A lifetime supply Accept floating point values for amount per day and round the result.
*/
function calcSupply(age, amtPerDay) {
    let maxAge = 100;
    let lifetimeNeed = ((amtPerDay * 365) * (maxAge -age));
    console.log(`You will need ${lifetimeNeed} bars of chocolates (${amtPerDay} a day) to last you till the age of ${age}.`);
}calcSupply(80, 2); // You will need 14600 bars of chocolates (2 a day) to last you till the age of 80.
calcSupply(80, 3.5); // You will need 25550 bars of chocolates (3.5 a day) to last you till the age of 80.

/* 6. For the longest word
    Create a function to find the longest word in string. Examples:
    longestWord("this is a web development course") -> expected output: "development" 
*/
function longestWord(myString) {
    let str = myString.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    console.log(word);
}longestWord("this is a web development course"); // development

/* 7. AEIOU: Vowels
    Create a function that takes a string in its parameters and counts the number of vowels in the string. Examples:
    findVowels("this is a string") -> expected output: 4 vowels found
    Notes: vowels are "a, e, i, o u".
*/
function findVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count += 1;
        }
    }
    console.log(`${count} vowels found`);
}findVowels("this is a string Example"); // 7 vowels found

/* 8. Data Types
    Create a function that detects the data type of the argument passed.
    Examples:
    detectType("hello") -> expected output: type of argument is a string.
    detectType(4) -> expected output: type of argument is a number.
*/
function detectType(argument) {
    if (typeof(argument) === 'string') {
        console.log(`type of argument is a string.`);
    } else if (typeof(argument) === 'boolean') {
        console.log(`type of argument is a boolean.`);
    } else if (typeof(argument) === 'function') {
        console.log(`type of argument is a function.`);
    } else if (typeof(argument) === 'number') {
        console.log(`type of argument is a number.`);
    } else if (typeof(argument) === 'undefined') {
        console.log(`type of argument is a undefined.`);
    } else if (typeof(argument) === 'object') {
        console.log(`type of argument is a object.`);
    }
}detectType(123); // type of argument is a number.
detectType("Hello"); // type of argument is a string.
detectType(true); // type of argument is a boolean.

/* 9. Count Occurrences
    Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
    Examples:
    countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3
*/
function countOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    console.log(`occurrences of ${letter}: ${count}`);
}countOccurrences("web development", "e"); // occurrences of e: 4
countOccurrences("this is a string", "i"); // occurrences of i: 3

/* 10. Counting Letters
    Create a function that counts the number of occurrences of each letter in a string.
    Examples:
    countLetters("tree") -> expected output: t: 1, r: 1, e: 2
*/
function countLetters(str) {
    let string1 = str.split("").sort().join("");
    let counter = 1;
     for (let i = 0; i < str.length; i++) {
      if (string1[i] == string1[i + 1]) {
        counter++;
      } else {
        console.log(string1[i] + " " + counter);
        counter = 1;
      }
    }
}countLetters("tree"); 
// e 2
// r 1
// t 1
