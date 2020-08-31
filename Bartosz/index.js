// ### Task 1

// #### 1. Reverse
// Create a function to reverse a number.
// Examples: 
// * reverse(34532) -> expected output: 23543

function reversedNum(num) {

    num = num + '';
    let output = num.split("").reverse().join("");    
    console.log(output);    
  }

reversedNum(34532); // 23543

// #### 2. Alphabetical Order
// Create a function to sort a string into alphabetical order. 
// Examples:
// * alphaOrder("webdev") -> expected output: "bdeevw"
// * Note: Assume numbers, symbols and punctuation are not included in the string.  

function alphaOrder(abc){
  let order = abc.split("").sort().join("");
  console.log(order);

}

alphaOrder('webdev'); // bdeevw

// #### 3. The Greater Numbers
// Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. 
// Examples: 
// * findGreatest([3, 4, 5], 4) -> expected output: 5
// * findGreatest([10, 20, 30], 12) -> expected output: 20, 30
// * findGreatest([0, 10, 3], 4) -> expected output: 10

function findGreatest(myArr, number){
  
  const greatBox = [];

  for (let i = 0; i < myArr.length; i++){
    if (myArr[i] > number){
      greatBox.push(myArr[i])
    }
  }
  console.log(`Expected output: `, greatBox.join(", "));
}

findGreatest([3, 4, 5], 4);         // Expected output:  5
findGreatest([10, 20, 30], 12);     // Expected output:  20, 30
findGreatest([0, 10, 3], 4);        // Expected output:  10

// #### 4. Dog Years
// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years. 

// Example
// * dogAge(4) -> expected output example: "Your doggo is 28 years old in human years!"

function dogAge(age){
  let dogYears = age * 7;
  console.log(`Your doggo is ${dogYears} years old in human years!`);
}

dogAge(4); // Your doggo is 28 years old in human years!

// #### 5. A Lifetime Supply...
// Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. 

function lifeTime(age, perDay){

  const maxAge = 100;
  let lifeSupply = (maxAge - age ) * (perDay * 365);
  console.log(`For the rest of your life you'll need ${lifeSupply} snacks!`);

}

lifeTime(25,2) // For the rest of your life you'll need 54750 snacks!
lifeTime(40,3) // For the rest of your life you'll need 65700 snacks!

// #### 6. For the longest word
// Create a function to find the longest word in string. 
// Examples: 
// * longestWord("this is a web development course") ->  expected output: "development"

function longestWord(findLongest){

  let words = findLongest.split(" ");
  let longestWord = 0;
  let word = 0;

  for (let i = 0; i < words.length; i++){
    if (longestWord < words[i].length){
        longestWord = words[i].length;
        word = words[i];
    }
  }
  console.log(word);   
}

longestWord("this is a web development course"); // development

// #### 7. AEIOU: Vowels
// Create a function that takes a string in its parameters and counts the number of vowels in the string. 
// Examples: 
// * findVowels("this is a string") -> expected output: 4 vowels found
// * Notes: vowels are "a, e, i, o u". 

function findVowels(myString){

  let vowels = "a,e,i,o,u";
  let quanity = 0;

  for (let i = 0; i < myString.length; i++){
    if (vowels.indexOf(myString[i]) !== -1){
      quanity = quanity + 1;
    }
  }
  console.log(`${quanity} vowels found`);
}

findVowels("this is a string") // 4 vowels found

// #### 8. Data Types
// Create a function that detects the data type of the argument passed. 
// Examples: 
// * detectType("hello") -> expected output: type of argument is a string. 
// * detectType(4) -> expected output: type of argument is a number.

function detectType(argument){

  data = typeof argument
  console.log(`type of argument is a ${data}`);

}

detectType(4);          // type of argument is a number
detectType("hello");    // type of argument is a string 

// #### 9. Count Occurrences 
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 
// Examples: 
// * countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3 

function countOccurrences(string, letter){

  let start = 0;

  for (let i = 0; i < string.length; i++){
    if (string.split("")[i] === letter){
      start = start + 1;
    }
  }
    console.log(`occuries of ${letter}: ${start}`);
}

countOccurrences("this is a string", "i");  // occuries of i: 3

// #### 10. Counting Letters
// Create a function that counts the number of occurrences of each letter in a string. 
// Examples: 
// * countLetters("tree") -> expected output: t: 1, r: 1, e: 2

function countLetters(letters){

  let string = letters.split("").sort().join("");
  let count = 1;

  for (let i = 0; i < letters.length; i++){
    if (string[i] == string[i + 1]){
      count++;
    } else {
      console.log(string[i] + ': ' + count);
      count = 1;
    }
  }
}

countLetters("tree");     // e: 2
                          // r: 1
                          // t: 1