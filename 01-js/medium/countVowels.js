/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let copyStr = str.toLowerCase();
    let vowels = "aeiou";

    let count = 0;
    for(let each in copyStr){
      if(vowels.indexOf(copyStr[each]) >= 0) count++;
    }
    console.log(count);
    return count;
}

countVowels("programming");


module.exports = countVowels;