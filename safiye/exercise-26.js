//#### 1. Reverse
function reverse(num) {
  let Arr = Array.from(String(num), Number);
  Arr.reverse();
  let stringArr = "";
  for (let i = 0; i <= Arr.length - 1; i++) {
    stringArr = stringArr + Arr[i];
  }
  console.log("the reverse from " + num + " is " + stringArr);
}
reverse(2345);
//#### 2. Alphabetical Order
let str = "string";
function alphaOrder(astring) {
  arrFromString = astring.split("");
  arrFromString.sort();
  let stringArr = "";
  for (let i = 0; i <= arrFromString.length - 1; i++) {
    stringArr = stringArr + arrFromString[i];
  }
  console.log(stringArr);
}
alphaOrder(str);
//#### 3. The Greater Numbers
function findGratest(arrOfNumbers, num) {
  let gratestNumbers = "";
  for (let i = 0; i <= arrOfNumbers.length - 1; i++) {
    if (arrOfNumbers[i] > num) {
      if (gratestNumbers !== "") {
        gratestNumbers = gratestNumbers + ", ";
      }
      gratestNumbers = gratestNumbers + arrOfNumbers[i];
    }
  }
  console.log(gratestNumbers);
}
findGratest([10, 20, 30], 12);
//#### 4. Dog Years
function calculateDogYear(dogsAge) {
  let dogYear = dogsAge * 7;
  console.log("Your doggo is " + dogYear + " old in human years!");
}
calculateDogYear(4);
//#### 5. A Lifetime Supply
let favoriteSnack = "chocolate";

function calcSupply(age, amountPerDay) {
  let numberOfAmount = amountPerDay.replace(/\D/g, "");
  let stringOfAmount = amountPerDay.replace(/[^a-z]/gi, "");
  if (stringOfAmount[stringOfAmount.length - 1] !== "s") {
    stringOfAmount = stringOfAmount + "s";
  }
  let maxAge = 80;
  let need = (maxAge - age) * 365 * numberOfAmount;
  console.log(
    `You will need ${need} ${stringOfAmount} of ${favoriteSnack}(${amountPerDay} a day) to last you till the age of ${maxAge}.`
  );
}
calcSupply(40, "2 bars");
//**Bonus - A lifetime supply**
// Accept floating point values for amount per day and round the result.
//#### 6. For the longest word
function longestWord(str) {
  let arr = str.split(" ");
  let howlong = [];
  for (let i = 0; i < arr.length; i++) {
    howlong.push(arr[i].length);
  }
  //find the largest number in an array
  let longest = Math.max.apply(Math, howlong);
  for (let k = 0; k < arr.length; k++) {
    if (arr[k].length == longest) {
      console.log(arr[k]);
    }
  }
}
longestWord("can hello worlddd thisisthelargestworldinthisstring");

//#### 7. AEIOU: Vowels
function findVowels(str) {
  console.log(`${str.match(/[aeiou]/gi).length} vowels found.`);
}
findVowels("this is a string");
//#### 8. Data Types
function detectType(argument) {
  console.log(`type of argument is ${typeof argument}.`);
}
detectType(true);
//#### 9. Count Occurrences
function countOccurrences(str, letter) {
  let howmany = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      howmany += 1;
    }
  }
  if (howmany > 1) {
    console.log(`ocuurrences of ${letter}: ${howmany}`);
  } else {
    console.log(`ocuurrence of ${letter}: ${howmany}`);
  }
}
countOccurrences("this is the string", "g");
//#### 10. Counting Letters
function countLetters(str) {
  let isChecked = false;
  for (let i = 0; i < str.length; i++) {
    let howmany = 0;
    let letter = str[i];
    let strBeforeLetter = str.slice(0, i);
    //check if there is the same letter before.
    if (strBeforeLetter.indexOf(letter) == -1) {
      //bastan o harf icin kac tane var diye tara.
      for (let n = 0; n < str.length; n++) {
        if (str[n] == letter) {
          howmany += 1;
        }
      }
      if (howmany > 1) {
        console.log(`ocuurrences of ${letter}: ${howmany}`);
      } else {
        console.log(`ocuurrence of ${letter}: ${howmany}`);
      }
    }
  }
}

countLetters("tree");
