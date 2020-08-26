//2.1
function reverseNumber(number1) {
  return (
    parseFloat(number1.toString().split("").reverse().join("")) *
    Math.sign(number1)
  );
}
console.log(reverseNumber(-3236));
console.log(reverseNumber(97));
console.log(reverseNumber(45.9));

//2.2

function sortWord(word) {
  let myarr = word.split("").sort().join("");
  return myarr;
}
console.log(sortWord("fdlgjdhbasjasqwewpy"));

//3
function findGreater(arr, number) {
  let result = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > number) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(findGreater([2, 6, 8], 3));

//4
function dogYears(age) {
  let i = age * 7;
  let result = `your dog is ${i} years ol human years!`;
  return result;
}
console.log(dogYears(2));

//5
function lifeSupply(age, amount) {
  let mayAge = 80;
  let rest = 80 - age;
  let result = Math.round(rest * 365 * amount);
  let resultStr = `you will need ${rest} years to 80 and ${result} coffe`;
  return resultStr;
}
console.log(lifeSupply(30, 2));

//6
function longestWord(str) {
  let myResult = str.split(" ");
  let finalstr = "";
  for (let i = 0; i <= myResult.length - 1; i++) {
    if (myResult[i].length > finalstr.length) {
      finalstr = myResult[i];
    }
  }
  return finalstr;
}

console.log(longestWord("this is a web development course"));

//7

function findVowel(str) {
  let result = str.toUpperCase().split("");
  let sum = 0;
  for (let i = 0; i <= result.length - 1; i++) {
    if (
      result[i] == "A" ||
      result[i] == "E" ||
      result[i] == "I" ||
      result[i] == "O" ||
      result[i] == "U"
    ) {
      sum = sum + 1;
    }
  }
  return sum;
}
console.log(findVowel("this is a string"));

//8
function findType(obj) {
  return typeof obj;
}

console.log(findType(3));
console.log(findType("hello"));
console.log(findType([]));

//9

function countLetter(str, Char) {
  let result = str.split("");
  let sum = 0;
  for (let i = 0; i <= result.length - 1; i++) {
    if (result[i] == Char) {
      sum = sum + 1;
    }
  }
  return sum;
}
console.log(countLetter("hello arezoo", "o"));

//10
