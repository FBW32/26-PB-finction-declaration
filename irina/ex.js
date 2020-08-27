// Print your answers to the console.


// 1. Reverse
// Create a function to reverse a number.
function reverseNumber(num1)
{
	num1 = num1 + "";
	return num1.split("").reverse().join("");
}
console.log(reverseNumber(123456789)); //987654321


//RETURN STATEMENT
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
//The return statement ends function execution and specifies a value to be returned to the function caller.
/*function getRectArea(width, height) {
    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
  }
  
  console.log(getRectArea(3, 4));
  // expected output: 12
  
  console.log(getRectArea(-3, 4));
  // expected output: 0 */

// 2. Alphabetical Order
// Create a function to sort a string into alphabetical order. Examples: <<<<<<< HEAD

// alphaOrder("webdev") -> expected output: "bdeevw"
function alphaOrder(string1) {
    console.log(string1.split('').sort().join(''));
}
alphaOrder("webdev") //bdeevw
alphaOrder("qwertyuiop") //eiopqrtuwy
// First need to convert the string to array, than sort() array and convert the array to back to a string
// Note: Assume numbers, symbols and punctuation are not included in the string.

// 3. The Greater Numbers
// Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. Examples:
// findGreatest([3, 4, 5], 4) -> expected output: 5
// findGreatest([10, 20, 30], 12) -> expected output: 20, 30 ??? 
// findGreatest([0, 10, 3], 4) -> expected output: 10
function findGreatest(numArray1, num2) {
    console.log(Math.max.apply(null, numArray1));
  }
  findGreatest([3,4,5], 4); //5
  findGreatest([10, 20, 30], 12); //30
  findGreatest([0, 10, 3], 4) // 10

// 4. Dog Years
// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years.
function dogAge(puppyAge) {
    let x = 7;
    console.log(`Your dog is ${puppyAge * x} in human years!`);
}
dogAge(1) //Your dog is 7 in human years!
dogAge(3) //Your dog is 21 in human years!


// 5. A Lifetime Supply...
// Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
function snacksupply(age, amount_per_day) {
    let ageMax = 80;
    let totalAmount = (amount_per_day * 365) * (ageMax - age);
    console.log(`You will need ${totalAmount} of snacks to last you till the age of  ${ageMax}.`);
  }

  snacksupply(25, 2); //You will need 40150 of snacks to last you till the age of  80.
  snacksupply(25, 2.5); //You will need 50187.5 of snacks to last you till the age of  80.
  snacksupply(40, 3); //You will need 43800 of snacks to last you till the age of  80.
  snacksupply(80, 2); //You will need 0 of snacks to last you till the age of  80.

// Bonus - A lifetime supply Accept floating point values for amount per day and round the result.
function snacksupply2(age, amount_per_day) {
    let ageMax = 80;
    let totalAmount = Math.round((amount_per_day * 365) * (ageMax - age));
    console.log(`You will need ${totalAmount} of snacks to last you till the age of  ${ageMax}.`);
  }

  snacksupply2(25, 2.5); //You will need 50188 of snacks to last you till the age of  80.


// 6. For the longest word
// Create a function to find the longest word in string. Examples:
// longestWord("this is a web development course") -> expected output: "development"

function longestWord(str) {
  let array1 = str.match(/\w[a-z]{0,}/gi); // needs the {0,} to read the length property
  let result = array1[0];

  for(let i = 1 ; i < array1.length ; i++) {
    if (result.length < array1[i].length) {
    result = array1[i];
    } 
  }
  console.log(result);
}
longestWord("this is a web development course") // development


//MATCH ()
//The match() method retrieves the result of matching a string against a regular expression. --> will give you an array 
/*str.match(/\w[a-z]{0,}/gi)
If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below. */
/*const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);
console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e'] */

// 7. AEIOU: Vowels
// Create a function that takes a string in its parameters and counts the number of vowels in the string. Examples:

// findVowels("this is a string") -> expected output: 4 vowels found

function findVowels(str) {
  let array1 = str.match(/[aeiou]/g);
  let result = array1.length;
  for(let i = 1 ; i < array1.length ; i++) {
    if (result.length < array1[i].length) {
    result = array1[i];
    } 
  }
  console.log(`${result} vowels found`);
}
findVowels("this is a string") 

//OR

function findVowels2(str)
{
  let vowel_list = 'aeiou';
  let vcount = 0;
  for(var i = 0; i < str.length ; i++)
  {
    if (vowel_list.indexOf(str[i]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return `${vcount} vowels found`;
}
console.log(findVowels2("this is a string")); //4 vowels found

// 8. Data Types
// Create a function that detects the data type of the argument passed.

function dataType(input) {
console.log(`The argument type is:`,typeof(input));
}
dataType([1, 2, 3]) //The argument type is: object
dataType(20) //The argument type is: number
dataType("hello") //The argument type is: string

// 9. Count Occurrences
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
function count(str) { 
    let result = 0; 
    let letter1 = "i";
    letter1 = "t"
    for (let i = 0; i < str.length; i++) { 
        if (str.charAt(i) == letter1) {
        result++; }
    }  
    console.log(`Ocurrences of ${letter1} is ${result}.`); 
} count("this is a string") //Ocurrences of t is 2.

//OR

function count2(str) {
  let letter1 = /[t]/gi;
  let array1 = str.match(letter1);
  let result = array1.length;
  for(let i = 1 ; i < array1.length ; i++) {
    if (result.length < array1[i].length) {
    result = array1[i];
    } 
  }
  console.log(`Ocurrences of t is ${result}.`)
}
count2("this is a string") 


//chartAt()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
//The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
 /*let anyString = 'Brave new world';
console.log("The character at index 2  is '" + anyString.charAt(2)   + "'"); //The character at index 2  is 'a' */




// 10. Counting Letters
// Create a function that counts the number of occurrences of each letter in a string.
function count_letters(str) {
  let count = {};
  str.replace(/\S/g, 
    function(new_str){
    count[new_str] = (isNaN(count[new_str]) ?  1 : count[new_str] + 1);
  });
  console.log(count);
  }
  count_letters("Tree"); //{ T: 1, r: 1, e: 2 }

//REPLACE ()
//The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can //be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
