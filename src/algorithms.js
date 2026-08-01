/*
export function isPalindrome(str) {
    const cleanStr = str.toLowerCase();

    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr === reversedStr;
}
console.log(isPalindrome("racecar"));

console.log(isPalindrome("hello"));
*/


/*
export function isAnagram(str1, str2) {
    const formatString = (str) => 
        str.toLowerCase().split('').sort().join('');

    return formatString(str1) === formatString(str2);

}

console.log(isAnagram("finder", "friend"));
console.log(isAnagram("hello", "buy"));
*/


/*
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5]));
*/


/*
export function findLongestWord(str) {
    const word = str.split(' ');
    let longest = '';

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
*/

/*
export function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello world"));
*/

/*
export function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;  
}
*/

/*
export function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 
*/

/*
export function findMax(arr) {
    if (arr.length === 0) return null; 

    let max = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([3, 9, 2, 56, 11]));  
*/

/*
export function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}
*/

/*
export function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
  }
  */

/*
  const grades = [3, 4, 5, 2, 5, 4, 3, 5];

  const goodGrades = grades.filter(grade => grade === 5 );

  const count = goodGrades.length;

  console.log(goodGrades);
  console.log(count);
*/



function isPalidromeSimple(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9а-яё]/g, '');

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
}

console.log(isPalidromeSimple("ckookc"));
console.log(isPalidromeSimple("hola"));