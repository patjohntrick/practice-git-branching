// const array = ["apple", "banana", "mango"];
// const arrResult = array.sort((a, b) => (a > b ? -1 : 1));
// console.log(arrResult);

// for (let arrayContent in array) {
//   console.log(arrayContent);
// }

// ["dog", "cat", "hen"].forEach((currentValue, index, array) => {
//   console.log(
//     `currentValue: ${currentValue}, index: ${index}, array: ${array}`
//   );
// });

// function add(...result) {
//   console.log(result);
//   let sum = 0;
//   for (const item of result) {
//     sum += item;
//   }
//   return sum;
// }
// console.log(add(2, 3, 4, 5)); // 14

// let avg = function () {
//   let sum = 0;
//   for (const item of arguments) {
//     sum += item;
//   }
//   return sum / arguments.length;
// };

// console.log(avg(1, 2, 3));

// function countChars(elm) {
//   if (elm.nodeType == 3) {
//     // TEXT_NODE
//     return elm.nodeValue.length;
//   }
//   let count = 0;
//   for (let i = 0, child; (child = elm.childNodes[i]); i++) {
//     count += countChars(child);
//   }
//   return count;
// }

// console.log(countChars());

// const makePerson = (first, last) => {
//   return {
//     first: first,
//     last: last,
//     fullName() {
//       return this.first + " " + this.last;
//     },
//     fullNameReversed() {
//       return this.last + ", " + this.first;
//     },
//   };
// };

// const s = makePerson("Simon", "Willison");
// // s.fullName(); // "Simon Willison"
// // s.fullNameReversed(); // "Willison, Simon"
// console.log(s.fullName());
// console.log(s.fullNameReversed());

// function Person(first, last) {
//   this.first = first;
//   this.last = last;
//   this.fullName = () => {
//     return this.first + " " + this.last;
//   };
//   this.fullNameReversed = function () {
//     return this.last + ", " + this.first;
//   };
// }
// const s = new Person("Simon", "Willison");

// console.log(s.fullName());

const arr = ["apple", "zanana", "mango"];

const modifyArr = arr.sort();

console.log(modifyArr);
