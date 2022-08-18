console.log("----------one-----------");

// 1. Get total orders
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

const total = orders.reduce((total, item) => {
  return total + item.amount;
}, 0);
console.log(total);
console.log("----------two-----------");

// 2. Increment by 1
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const newArrayOfNumbers = arrayOfNumbers.map((item) => item + 1);
console.log(newArrayOfNumbers);
console.log("---------three----------");

// 3. Filter Evens
function filterEvens(arr) {
  const even = arr.filter((item) => item % 2 === 0);
  console.log(even);
}

filterEvens([1, 2, 3, 11, 12, 13]); //returns [2,12]
filterEvens([22, 2, 31, 110, 6, 13]); //returns [22,2,110,6]
console.log("---------four-----------");

// 4. Filter Friends
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterItems(arr, letter) {
  const items = arr.filter((item) => item.includes(letter));
  return items;
}
// function filterItems(arr, query) {
//   return arr.filter(function (item) {
//     return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//   });
// }

console.log(filterItems(friends, "ka")); // ["Rika"];
console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];
console.log("---------five-----------");

// 5 Sum Up
function sum(arr) {
  const sumOfNumbers = arr.reduce((total, item) => {
    return total + item;
  }, 0);
  console.log(sumOfNumbers);
}

sum([1, 2, 3, 4, 5]); //returns 15
sum([6, 7, 7]); //returns 20

console.log("---------six------------");

// 6. Square Root
const square = [1, 2, 3, 4, 5];

const newSquare = square.map((item) => item * item);
console.log(newSquare);
