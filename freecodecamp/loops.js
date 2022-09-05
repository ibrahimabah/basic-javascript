/* Lesson Step Comments */
// Inline guide comments

/* Count Backwards With a For Loop */
const myArray = [];
    for (let i = 9 ; i > -1; i -= 2) {
        myArray.push(i);
        10    
    }
console.log(myArray);

/* Iterate Through an Array with a For Loops */
const myArr = [1, 3, 5, 7, 9];
    let total = 0;
    for (let i = 0; i < myArr.length; i++){
        total += myArr[i];
    } 
console.log(total);

/* Nesting For Loops */
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          product *= arr[i][j];
        }
      }
    // Only change code above this line
    return product;
  }
  
 let product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  
console.log(product);

/* Iterate with JavaScript Do...While Loops */
// Setup
const myDoWhile = [];
let i = 10;
// Only change code below this line
do {
  myDoWhile.push(i);
  i++;
} while (i < 5)

console.log(i, myDoWhile);

/* Replace Loops using Recursion */
function sum(arr, n) {
    // Only change code below this line
  if (n <= 0){
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
  }
  
  console.log(sum([1,2,3],3));