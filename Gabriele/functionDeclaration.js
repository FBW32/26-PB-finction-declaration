// 1. Reverse
// Create a function to reverse a number.
// Examples:
// reverse(34532) -> expected output: 23543

function reverse(number) {
    number = number + "";
    console.log(parseFloat(number.split("").reverse().join("")));    
}

reverse(34532); // 23543


// 2. Alphabetical Order
// Create a function to sort a string into alphabetical order.
// Examples:
// <<<<<<< HEAD
// alphaOrder("webdev") -> expected output: "bdeevw"
// Note: Assume numbers, symbols and punctuation are not included in the string.


function alphOrd(myStr) {
    console.log(myStr.split("").sort().join(""));

}

alphOrd("Istudywebdev");  // Ibddeestuvwy



// 3. The Greater Numbers
// Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument.
// Examples:

// findGreatest([3, 4, 5], 4) -> expected output: 5
// findGreatest([10, 20, 30], 12) -> expected output: 20, 30
// findGreatest([0, 10, 3], 4) -> expected output: 10


function findGreatest(myArr, myNum) {
        for (let i = 0; i < myArr.length; i++) {

            if (myArr[i] > myNum) {
                console.log(myArr[i]);
            }
        }

}

findGreatest([10,2,7,3], 4);  // 10, 7




// 4. Dog Years
// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// Example
// dogAge(4) -> expected output example: "Your doggo is 28 years old in human years!"



function puppyAge(humanYears) {
    
        dogAge = (humanYears * 7);
        console.log(`Your doggo is ${dogAge} years old in human years!`);
    
} ;

puppyAge(3); // Your doggo is 21 years old in human years!

puppyAge(7); // Your doggo is 49 years old in human years!


// 5. A Lifetime Supply...
// Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.

// Examples:

// calcSupply(25, 2) -> expected output: You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80.
// calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps (3 a day) to last you till the age of 80.
// Bonus - A lifetime supply
// Accept floating point values for amount per day and round the result.


function calcSupply(myAge, iceCream) {
            
    if ((yearsLeft = 80 - myAge) && (iceCream = 1 * yearsLeft * 365)) {

        console.log(`You will need ${iceCream} ice-creams to last you till the age of 80`);
    };
};

calcSupply(38, 1);  // You will need 15330 ice-creams to last you till the age of 80

calcSupply(70, 1);  // You will need 3650 ice-creams to last you till the age of 80



// 6. For the longest word
// Create a function to find the longest word in string.
// Examples:

// longestWord("this is a web development course") -> expected output: "development"


function longestWord(myLongStr) {
   
    //    let words = myLongStr.split(" ");

    //    let lengths = words.map(words => words.length); // [ 1, 2, 6,  2, 5, 9, 2, 10]

    //   console.log(lengths.indexOf(Math.max(...lengths))); // 7. This is the index of the longest word. 

      let splitArr = myLongStr.split(" ");
      let longestWord = 0;

      for (let i = 0; i < splitArr.length; i ++) {
          if (splitArr[i].length > longestWord) {
              longestWord = splitArr[i].length;
          }
      }
console.log(longestWord);  // 10 
    
    }


longestWord("I am trying to learn functions in JavaScript");


// 7. AEIOU: Vowels
// Create a function that takes a string in its parameters and counts the number of vowels in the string.
// Examples:

// findVowels("this is a string") -> expected output: 4 vowels found

// Notes: vowels are "a, e, i, o u".


function findVowels(givenString) {

let newArr = givenString.split("");
let sum = 0;

        for (let i = 0; i <= newArr.length; i ++) {
            if (("a" === newArr[i]) || 
                ("e" ===  newArr[i] ) || 
                ("i" === newArr[i])  || 
                ("o" === newArr[i]) || 
                ("u" === newArr[i]))  {
               
                    sum = sum + 1;
            }
        }
    
console.log(sum);
}

findVowels("this is a string"); // 4
findVowels("this is another string");  // 6


// 8. Data Types
// Create a function that detects the data type of the argument passed.

// Examples:

// detectType("hello") -> expected output: type of argument is a string.
// detectType(4) -> expected output: type of argument is a number.


function findDataType(myInput) {

let foundData = typeof myInput;

    if (typeof myInput === " ") {
    myInput === "this is a string";
    } else if (typeof myInput === [ ]) {
    myInput === "this is an object";
    } else if (typeof myInput === 'number') {
         myInput === "this is a number";
     }  else if (typeof myInput === 'boolean') {
        myInput === "this is a boolean";
    }


    console.log(foundData);
    }

findDataType("example");  // string
findDataType(28); // number
findDataType([3, "ciao", 7]);  // object
findDataType(false);  // boolean 


// 9. Count Occurrences
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Examples:

// countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3


function letterInStr(myStr, myLetter) {

    randomLett = 0;
    for (let i = 0; i <= myStr.length; i++) {
        if (myStr.split("")[i] === myLetter) {

            randomLett = randomLett + 1;
        }
    }
     console.log(randomLett);


}

letterInStr("ciao, sono Gabriele", "b")  // 1
letterInStr("Hallo, ich bin Gabriele", "i")  // 3


// 10. Counting Letters
// Create a function that counts the number of occurrences of each letter in a string.
// Examples:
// countLetters("tree") -> expected output: t: 1, r: 1, e: 2

