// 001 : single comments

/* 002 :
multiple comments
*/

// 003 : Declare JavaScript Variables
var myAge;

// 004 : Storing Values with the Assignment Operator
myAge = 22;

// 005 : Assigning the Value of One Variable to Another
var herAge;
herAge = myAge;

// 006 : Initializing Variables with the Assignment Operator
var birthMonth = 09;

// 007 : Declare String Variables
var firstName = "Ibrahima";
var lastName = "Bah";

// 008 : Understanding Uninitialized Variables
  // Only change code below this line
var a;
var b;
var c;

  // Only change code above this line
a = 3;
b = 2;
c = " Go";

/* Generate Random Fractions with JavaScript */
function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }
  
  /* Generate Random Whole Numbers with JavaScript */
  let random = randomFraction();
  console.log(random);

  function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random() * 10);
  }
  
  let whole = randomWholeNum();
  // log result
  console.log(whole);

  /* Generate Random Whole Numbers within a Range */
  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }
  let range = randomRange();
  
  // log result
  console.log(range);

  /* Use the parseInt Function */
  function convertToInteger(str) {
    return parseInt(str);
  }
  
  const nmInt = convertToInteger("56");
  console.log(nmInt);

  /* Use the parseInt Function with a Radix */
  function convertFromBinary(bin){
    return parseInt(bin, 2);
  }

  const binInt = convertFromBinary("10011");
  console.log(binInt);

  /* Use the Conditional (Ternary) Operator */
  function checkEqual(a, b){
    return a == b ? "Equal" : "Not Equal";
  }

  const check = checkEqual(1,3);
  console.log(check);

  /* Use Multiple Conditional (Ternary) Operators */
  function checkSign(num){
    return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
  }

  const multiCheck = checkSign(-1);
  console.log(multiCheck);

  /* Use Recursion to Create a Countdown*/
  // Only change code below this line
  function countdown(n){
    if(n < 1){
      return [];
    } else {
      let countCheck = countdown(n -1);
      countCheck.unshift(n);
      return countCheck;
    }
  }
  // Only change code above this line
  console.log(countdown(1));