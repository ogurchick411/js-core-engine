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


/*
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
*/

/*
const products = [
  { name: "Phone", price: 470},
  { name : "Case", price: 30},
  { name: "Headphones", price: 170},
  { name: "Glass", price: 80}
];

const expensiveProducts = products.filter(item => items.price > 200);
const expensiveNames = expensiveProducts.map(item => item.name);

console.log("Expensive items:", expensiveNames);
*/


/*
function getUniqueElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];

    if (!uniqueArr.includes(currentItem)) {
      uniqueArr.push(currentItem);
    }
  }

  return uniqueArr;

}

const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
console.log(getUniqueElements(numbers));
*/

/*
function findCommonElements(firstArray, secondArray) {
  const intersectionArr = [];

  for (let i = 0; i < firstArray.length; i++) {
    const currentItem = firstArrayp[i];

    if (secondArray.includes(currentItem) && !intersectionArr.includes(currentItem)) {
      intersectionArr.push(currentItem);
    } 
  }

  return intersectionArr;

}

const listA = [1, 2, 3, 4, 5];
const listB = [3, 4, 5, 6, 7];

console.log("common elements:", findCommonElements(listA, listB));
*/


/*
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const temp = arr[left];
        
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

const originalArray = [1, 2, 3, 4, 5];
console.log("Reversed array:", reverseArrayInPlace(originalArray));
*/

/*
function firstUniqChar(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return i;
    }
  }

  return -1;

}

console.log("first unique index:", firstUniqChar("leetcode"));
console.log("first unique index:", firstUniqChar("loveleetcode"));
*/

/*
function twoSum(nums, target) {
  const previousValues = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const neededValue = target - currentNumber;

    if (neededValue in previousValues) {
      return [previousValues[neededValue], i];
    }

    previousValues[currentNumber] = i;

  }
  return [];
}

const numbers = [2, 7, 11, 15];
const targetSum = 13;

console.log("found indices", twoSum(numbers, targetSum));
*/


/*
function findFirstDuplicate(nums) {
  const seenNumbers = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];

    if (currentNumber in seenNumbers) {
      return currentNumber;
    }

    seenNumbers[currentNumber] = true;
  }
  return null;
}

const numbersList = [2, 1 ,3, 5, 3, 2];
console.log("first duplicate:", findFirstDuplicate(numbersList));
*/

/*
function hasPairWithDifference(nums, target) {
  const seenNumbers = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];

    const neededFirst = currentNumber - target;
    const neededSecond = currentNumber + target;

    if (neededFirst in seenNumbers || neededSecond in seenNumbers) {
      return true;
    }

    seenNumbers[currentNumber] = true;
  }
  return false;
}

const arrayData = [5, 2, 8, 3, 11];
const targetDifference = 3;


console.log("has pair with difference:", hasPairWithDifference(arrayData, targetDifference));
*/

/*
function findMaxNum(nums) {
  let maxNum = nums[0];

  for (let i = 1; i < nums.length; i++) {

    if (nums[i] > maxNum) {
      maxNum = nums[i];

    }

  }
    return maxNum;
}

const scores = [12, 45, 6, 89, 21, 55];
console.log("max number is:", findMaxNum(scores));
*/

/*
function findMinNum(nums) {
  let minNum = nums[0];

  for (let i = 1; i < nums.length; i++){
    
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
  }

  return minNum;
}

const scores = [45, 12, 89, 6, 23, 55];
console.log("min number is:", findMinNum(scores));
*/

/*
function calcSum(nums) {
  let totalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  return totalSum;
}

const prices = [100, 200, 50, 27];

console.log("total sum is:", calcSum(prices));
*/

/*
function calcAverage(nums) {

  if (nums.legth === 0) {
    return 0;
  }

  let totalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  const average = totalSum / nums.length;
  
  return average;
}

const grages = [4, 5, 3, 5, 4];

console.log("average value is:", calcAverage(grades));
*/


/*
function reverseStr(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];

  }

  return reversedStr;

}

const word = "hello";
console.log("reversed word is:",reverseStr(word));
*/


/*
function isPalindrome(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
  }

  return str === reversedStr;

}

const testWord1 = "racecar";
const testWord2 = "hello";

console.log("is 'racecar' a palindrome?", isPalindrome(testWord1));

console.log("is 'hello' a palindrome?", isPalindrome(testWord2));
*/

/*
function countVowels(str) {
  let vowelCount = 0;
  const vowels = "aeiou";

  const lowerCaseStr = str.toLowerCase();

  for (let i = 0; i < lowerCaseStr.length; i++){
    const currentChar = lowerCaseStr[i];


    if (vowels.includes(currentChar)) {
      vowelCount++;

    }
  }

  return vowelCount;
}

const testSentence = "Hello World";

console.log("number of vowels:", countVowels(testSentence));
*/


/*
function calcFactorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;

  }

  return result;

}

const number = 5;
console.log("factorial is:", calcFactorial(number));
*/


/*
function calcDiscountPrice(price, discountPercent) {
  const discountAmount = (price * discountPercent) / 100;
  const finalPrice = price - discountAmount;
  return finalPrice;
}

const myPhonePrice = calcDiscountPrice(500, 20);
console.log(myPhonePrice);
*/

/*
function calculateAge(birthYear, currentYear) {
  let calcYear = (currentYear - birthYear);
  
  const finalYear = (calcYear);

  return finalYear;
}

console.log(calculateAge(2008, 2026));
*/

/*
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOrOdd(4));
*/


/*
function isEven(number) {
  return number % 2 === 0;
}

function checkNumberMessage(number) {
  const isNumberEven = isEven(number);

  if (isNumberEven) {
    return "Num is Even"
  } else {
    return "Num is Odd"
  }
}

console.log(checkNumberMessage(4));
console.log(checkNumberMessage(7));
*/



/*

  const myProduct = {
  title: "Mouse",
  price: "150",
  inStock: true
  }

function checkProductStatus(item) {

  if (item.inStock) {
    return item;
  } else {
    return "SoldOut";
  }

};

console.log(checkProductStatus(myProduct).title);
*/

/*
const users = [
  {name: "Alex", age: 19},
  {name: "Sergey", age: 23}
];

console.log(users[1].name);
*/


/*

const users = [
  { name: "Alex", age: 19 },
  { name: "Sergey", age: 23 },
  { name: "Max", age: 17 }
];

function getAdultUser(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].age >= 18)  {
      console.log(list[i].age)
    } else {
      console.log("You are so small")
    }
  }
};

getAdultUser(users);
*/



/*


const users = [

  { name : "Roman", age: 17 },
  { name: "Linda", age: 35}, 
  { name: "Alex", age: 23}
];

function findAlex(list){
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === "Alex") {
      return list[i].age;

    }
  }
}

console.log(findAlex(users));
*/

/*
const user = [
  { name: "Roman", age: 17 },
  { name: "Linda", age: 35 }, 
  { name: "Alex", age: 23 }
];

const foundUser = user.find(user => user.name === "Alex");

console.log(foundUser);
console.log(foundUser.age);
*/



/*
const users = [
  { name: "Alex", age: 19, role: "admin"},
  { name: "Linda", age: 35, role: "user"},
  { name: "Max", age: 16, role: "user"},
  { name: "Roman", age: 22, role: "user"}
];

const adults = users
.filter(user => user.age >= 18)
.map(user => `${user.name} - ${user.age} age`);

console.log(adults);
*/


/*
const cart = [
  { id: 1, name: "Laptop", price: 1200, category: "electronics", inStock: true},
  { id: 2, name: "Phone", price: 800, category: "electronics", inStock: false },
  { id: 3, name: "Sneakers", price: 120, category: "shoes", inStock: true },
  { id: 4, name: "T-Shirt", price: 30, category: "clothing", inStock: true },
  { id: 5, name: "Headphones", price: 150, category: "electronics", inStock: true}
];

const stock = cart
.filter(stockDescriptions => stockDescriptions.inStock)
.map(stockDescriptions => `${stockDescriptions.name} - ${stockDescriptions.price}$`);


const totalPrice = cart
.reduce((sum, item) => sum + item.price, 0);


console.log("Goods in Stock:", stock);
console.log(totalPrice);
*/


/*

const prices = [100, 250, 400, 50];
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum = sum + prices[i];
  }

  console.log(sum);

*/


/*
const prices = [200, 150, 40, 300, 120, 570];
const filteredPrices = [];


for (let i = 0; i < prices.length; i++) {

  if (prices[i] >= 100) {
    filteredPrices.push(prices[i]);
  }
}

console.log(filteredPrices);
*/


/*
const pricesInUSD = [10, 25, 100, 5];

const pricesInGRN = [];

for (let i = 0; i < pricesInUSD.length; i++) {
  const c = pricesInUSD[i] * 50;
  pricesInGRN.push(c);
}

console.log(pricesInGRN);
*/

/*
const pricesInUSD = [10, 25, 100, 5];
const pricesInGRN = pricesInUSD.map(price => price * 50);
console.log(pricesInGRN);
*/





/*

const orders = [
  {
    orderId: 101,
    customer: { name: "Alice", vip: true },
    items: [
      { name: "Burger", price: 12, category: "fastfood"},
      { name: "Cola", price: 3, category: "drinks" }
    ], 
    status: "delivered"
  },
  {
    orderId: 102,
    customer: { name: "Bob", vip: false },
    items: [
      { name: "Pizza", price: 18, category: "italian" },
      { name: "Beer", price: 5, category: "drinks" }
    ],
    status: "cancelled"
  },
  {
    orderId: 103,
    customer: { name: "Charlie", vip: true },
    items: [
      { name: "Sushi Set", price: 35, category: "asian" },
      { name: "Green Tea", price: 4, category: "drinks" },
      { name: "Mochi", price: 6, category: "asian" }
    ],
    status: "delivered"
  },
  {
    orderId: 104,
    customer: { name: "Diana", vip: false },
    items: [
      { name: "Pasta", price: 14, category: "italian" }
    ],
    status: "delivered"
  }
];


const deliveredOrders = orders.filter(order => order.status === "delivered");
const nameClients = orders.map(doneOrders => `${doneOrders.customer.name} - ${doneOrders.items.price}$`);

const clientReceipts = deliveredOrders.map(order => {

  const orderTotal = order.items.reduce((sum, item) => sum + item.price, 0);

  return `${order.customer.name}: $${orderTotal}`;

});


const totalVipPrice = orders
.filter(order => order.status === "delivered" && order.customer.vip === true)
  .reduce((totalSum, order) => {
   const orderSum = order.items.reduce((sum, item) => sum + item.price, 0);

   return totalSum + orderSum;
  }, 0);

console.log("Customer bills:", clientReceipts);

console.log("Revenue from VIP clients:", totalVipPrice);
*/




/* //.map() меняет каждый элемент

//берем массив => трансформируем каждый элемент => получаем новый массив той же длины

const numbers = [3, 4, 5, 2, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled);
*/


/*
const numbers = [10, 5, 20, 3];
const bigNumbers = numbers.filter(num => num > 10);

console.log(bigNumbers);
*/


/*
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);
*/



