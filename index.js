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