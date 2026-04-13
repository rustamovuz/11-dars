//
// function mostFrequent(arr) {
//   const countMap = {};
//   let maxElement = arr[0];
//   let maxCount = 0;
//   for (const item of arr) {
//     countMap[item] = (countMap[item] || 0) + 1;
//     if (countMap[item] > maxCount) {
//       maxCount = countMap[item];
//       maxElement = item;
//     }
//   }
//   return { element: maxElement, count: maxCount };
// }
//2
// function countEvens(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       count++;
//     }
//   }

//   return count;
// }

//3
// function uniqueElements(arr) {
//   const countMap = {};
//   for (const num of arr) {
//     countMap[num] = (countMap[num] || 0) + 1;
//   }
//   return arr.filter(num => countMap[num] === 1);
// }

//4
// function reverseWords(str) {
// return str.split(' ').reverse().join(' ');
// }
//5
// function isAllDigits(str) {
// return /^\d+$/.test(str);
// }
//6
// function wordsWithEnoughE(arr) {
//  return arr.filter(word => {
//     const count = word.split('').filter(char => char.toLowerCase() === 'e').length;
    
//     return count >= 2;
//   });
// }
//7
// function alphabeticallySorted(arr) {
//   return arr.filter(word => {
//     const sortedWord = word.split('').sort().join('');
//     return word === sortedWord;
//   });
// }
//8
//   function toArray(n) {
// return String(n).split('').map(Number);
//   }
//   function toNumber(arr) {
// return Number(arr.join(''));
//   }
//9
// function measureDepth(arr) {
//  if (!Array.isArray(arr)) {
//     return 0;
//   }
//   let maxDepth = 1;
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       const depth = 1 + measureDepth(item);
//       if (depth > maxDepth) {
//         maxDepth = depth;
//       }
//     }
//   }
//   return maxDepth;
// }
//10
// function digitSum(n) {
//   let str = Math.abs(n).toString();
//   let sum = 0;

//   for (let char of str) {
//     sum += parseInt(char);
//   }

//   return sum;
// }

//11
// function findUniqueWords(str) {
//   const cleanStr = str.toLowerCase().replace(/[^\w\s]/g, '');
//     const words = cleanStr.split(/\s+/);
//     const wordCount = {};
//   for (let word of words) {
//     if (word) {
//       wordCount[word] = (wordCount[word] || 0) + 1;
//     }
//   }
//     return words.filter(word => wordCount[word] === 1);
// }

//12
// function findLongestWord(arr) {
//   if (arr.length === 0) return null;

//   let longest = arr[0]

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longest.length) {
//       longest = arr[i]
//     }
//   }

//   return longest;
// }

//13
// function reverseNumbers(str) {
//   const numbers = str.match(/\d/g);
//   if (!numbers) return str;
//   numbers.reverse();
//   let counter = 0;
//   return str.split('').map(char => {
//     if (/\d/.test(char)) {
//       return numbers[counter++];
//     }
//     return char;
//   }).join('');
// }

//14
// function findCommonElements(arr1, arr2) {
// return arr1.filter(element => arr2.includes(element));}

//15
// function formatPhoneNumber(arr) {
//   const s = arr.join('')
//   return `(${s.slice(0, 3)}) ${s.slice(3, 6)}-${s.slice(6)}`;
// }