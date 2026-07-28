/*
export function isPalindrome(str) {
    const cleanStr = str.toLowerCase();

    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr === reversedStr;
}
console.log(isPalindrome("racecar"));

console.log(isPalindrome("hello"));
*/



export function isAnagram(str1, str2) {
    const formatString = (str) => 
        str.toLowerCase().split('').sort().join('');

    return formatString(str1) === formatString(str2);

}

console.log(isAnagram("finder", "friend"));
console.log(isAnagram("hello", "buy"));