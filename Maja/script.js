/* 1. 

Create a function to reverse a number. */

let Num = [3, 4, 5, 3, 2];

for (let i = Num.length - 1; i >= 0; i--) {
    console.log("number 1 ==>", Num[i]);
}

// number 1 ==> 2
// number 1 ==> 3
// number 1 ==> 5
// number 1 ==> 4
// number 1 ==> 3

/* 2.

Create a function to sort a string into alphabetical order. Examples: <<<<<<< HEAD
alphaOrder("webdev") -> expected output: "bdeevw" */


let newWord = [];
let word = ["H", "E", "A", "D"];

function alphabetical(word) {
    newWord = word.split("") .sort() .join("");
}
alphabetical("head");
console.log(newWord); // adeh

//------------xx------------------


function alphabet(string) {
    console.log(string.split('').sort().join(''));
}

alphabet("webdev");

/* 3. 

The Greater Numbers
Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. Examples:

findGreatest([3, 4, 5], 4) -> expected output: 5 */


function newFunction(ArrayNum, Num) {
    const box = []; 
for  (i = 0; i < ArrayNum.length; i++) {
    if (Math.max(ArrayNum[i]) > Num) {
    box.push(ArrayNum[i]);
}
}
console.log(box.join());
}

newFunction([3, 4, 5], 4);  // 5
newFunction([10, 20, 30], 12) // 20, 30
newFunction([0, 10, 3], 4)  // 10

/* 4. 

Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years. */


function dogOld(years) {
let YearsCalululation = years * 7;
/* for (i = 0; i < years.length; i*=7) {
    YearsCalululation.push(years[i])
} */
console.log(`Your doggo is ${YearsCalululation} years old in human years!`);
}  
dogOld(4);  // Your doggo is 28 years old in human years!

/* 5.

A Lifetime Supply...
Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.

Examples:

calcSupply(25, 2) -> expected output: You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80.
calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps (3 a day) to last you till the age of 80. */

function calcSupply(age, TimesAday) {
    const YearsLeft = 80 - age;
    console.log(`Years left`, YearsLeft);
    const daysAyear = 365;
    const daysTotal = YearsLeft * daysAyear;
    console.log(`days total`, daysTotal);
    const total = daysTotal * TimesAday;
    console.log(`total supply`, total);
    const SupplyPerDay = total / daysTotal;
    console.log(`supply per day`, SupplyPerDay);
    console.log(`You will need ${total} bars of chocolate ${TimesAday} a day to last you till the age of ${age}`);

} 

calcSupply(25, 2); // You will need 40150 bars of chocolate 2 a day to last you till the age of 25
/* calcSupply(40, 3); */ // You will need 43800 bars of chocolate 3 a day to last you till the age of 40

/* 6.

For the longest word
Create a function to find the longest word in string. Examples:

longestWord("this is a web development course") -> expected output: "development" */

function theLongestText(text) {
    let splitText = text.split(" ");
    console.log(splitText);
    let longestWord = 0;
    for (let i = 0; i < splitText.length; i++) {
       if(splitText[i].length > longestWord) {
longestWord = splitText[i].length;
       } 
    }
     console.log(longestWord); 
}

theLongestText("this is a web development course");  // 11 ???


/* 7. 

AEIOU: Vowels
Create a function that takes a string in its parameters and counts the number of vowels in the string. Examples:

findVowels("this is a string") -> expected output: 4 vowels found

Notes: vowels are "a, e, i, o u".
 */
 
function VowelsCounter(string) {
  var vowelList = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < string.length ; x++) {
    if (vowelList.indexOf(string[x]) !== -1) {
      vcount += 1;
    }
  }
  console.log(vcount);
}


VowelsCounter("The quick brown fox");  // 5


/* 8. 

Data Types
Create a function that detects the data type of the argument passed.

Examples:

detectType("hello") -> expected output: type of argument is a string.
detectType(4) -> expected output: type of argument is a number. */

function detectsDataType(data) {
    if (typeof data === "string") {
        console.log("string");
    } else {
        console.log('number');
    }
}
detectsDataType("hello");  // string
/* detectsDataType(4); */

/* 9.

 Count Occurrences
Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

Examples:

countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3 */

/* function countOccurrences(string, letter) {
   let count = string.split("letter").length - 1
   console.log(count);
}
countOccurrences("this is a string", "i"); */



function countOccurrences(str, letter) 
{
 var letterCount = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letterCount += 1;
      }
  }
 console.log(letterCount);
}

countOccurrences("this is a string", "i");  // 3



/* 10. 

Counting Letters
Create a function that counts the number of occurrences of each letter in a string.

Examples:

countLetters("tree") -> expected output: t: 1, r: 1, e: 2

 */

 function conumberOccurrencesunt(string) {
  let string1 = string.split("").sort().join("");
  let counter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string1[i] == string1[i + 1]) {
      counter++;
    } else {
      console.log(string1[i] + " " + counter);
      counter = 1;
    }
  }
}
conumberOccurrencesunt("tree"); 
 
// e 2
// r 1
// t 1