// #### 1. Reverse. Create a function to reverse a number.
let num = 12345;
let numToStr = num.toString();
let numToArr = numToStr.split('');
let numRev = numToArr.reverse();
let newNum = numRev.join('')

console.log(newNum);
// or 
function reversFunction(x) {
    return x = x.toString().split("").reverse().join("");
}
console.log(reversFunction(56789));
//======XXXX------
// #### 2. Alphabetical Order
function orderFunction (str) {
    return str.split('').sort().join('');
}
console.log(orderFunction("webdev"));

//======XXXX------
//#### 3. The Greater Numbers
let arr = [50, 40, 30, 20]
function myFunction(arr,x) {
    for (i= 0; i<= arr.length; ++i) {
            if (arr[i] > x) {
            console.log(arr[i]);
            }
        }
    
}
console.log(myFunction(arr,25));

//======XXXX------
// #### 4. Dog Years
let dogAge = 3;
function age_function(a) {
    return dogAge = (a * 7);
};
console.log(`your doggo is ${age_function(dogAge)} years old in human years!`);

//======XXXX------
// #### 5. A Lifetime Supply... 
let age = 25;
let consumePerDay = 3;
function chocolateFunction(age, consumePerDay){
        age = (80- age);
        age= age *(12*30);
        let supply = (age * consumePerDay);
        return l= Math.round(supply);
}
console.log(`You will need ${chocolateFunction(25,3)} bars of chocolate (${consumePerDay}per day) to last you till the age of 80.`);

//======XXXX------
// #### 6. For the longest word
function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = [];
    for (i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    } return word;
}
console.log(longestWord("this is a web development course"));

//======XXXX------
//#### 7. AEIOU: Vowels
function vowelsCounter(string1) {
    let str1 = string1.split(' ');
    let vowelsNum = 0;
    let newWord = [];
    for (i=0; i < string1.length; i++) {
        if (string1[i] =="a" ||
            string1[i] =="e" ||
            string1[i] =="i" ||
            string1[i] =="o" ||
            string1[i] =="u" ) {
                vowelsNum++;
                newWord = string1[i];
            }
    } return vowelsNum;
}
console.log(vowelsCounter(" this is a string "));

//======XXXX------
// #### 8. Data Types
function detector(x) {
    return (typeof x);
}
console.log(detector(2356));

//======XXXX------
// #### 9. Count Occurrences
let characterOccur = 0;
function occurrenceFunction(string,j) {
    for(i=0; i< string.length; i++) {
        let str2 = string.split(' ');
        if (string[i] == j) {
            characterOccur += 1; 
        }

    } return characterOccur;
}
console.log(occurrenceFunction(" this is a string ", "i"));

//======XXXX------
// #### 10. Counting Letters
let letterRepeat = 1;
function countLetters(string) {
    let str10 = string.split('');
    for (i = 0; i < string.length; i++) {
        let letterName = string.charAt(i);
            if (string.charAt(i) === string.charAt(i+1)){
                letterRepeat++;
            }else {
                console.log(letterName + ":" + letterRepeat);
            }
        }
    }

console.log(countLetters("tree"));


