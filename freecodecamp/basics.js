// 001 : single comments

/* 001 :
multiple comments
*/

// 002 : Declare JavaScript Variables
  var myAge;

// 003 : Storing Values with the Assignment Operator
  myAge = 22;

// 004 : Assigning the Value of One Variable to Another
  var herAge;
  herAge = myAge;

// 005 : Initializing Variables with the Assignment Operator
  var birthMonth = 09;

// 006 : Declare String Variables
  var firstName = "Ibrahima";
  var lastName = "Bah";

// 007 : Understanding Uninitialized Variables
  // Only change code below this line
  var a;
  var b;
  var c;
  // Only change code above this line
  a = 3;
  b = 2;
  c = " Go";

// 008 : Understanding Case Sensitivity in Variables
  // Variable declarations
  var studlyCapVar;
  var properCamelCase;
  var titleCaseOver;
  // Variable assignments
  studlyCapVar = 10;
  properCamelCase = "A String";
  titleCaseOver = 9000;

// 009 : Explore Differences Between the var and let Keywords
  // in a nutshell 'var can be overridden but let returns an error'
  let catName = "Oliver";
  let catSound = "Meow!";  

// 010 : Declare a Read-Only Variable with the const Keyword
  const FCC = "freeCodeCamp"; // Change this line
  let fact = "is cool!"; // Change this line
  fact = "is awesome!";
  // 'console.log(FCC, fact);'

// 011 : Add Two Numbers with JavaScript
  const sum = 10 + 10;
  // console.log(sum)

// 012 : Subtract One Number from Another with JavaScript
  const difference = 45 - 33;
  //console.log(difference)

// 013 : Multiply Two Numbers with JavaScript
  const product = 8 * 10;
  //console.log(product)

// 014 :  Divide One Number by Another with JavaScript
  const quotient = 66 / 33;
  //console.log(quotient)

// 015 : Increment a Number with JavaScript
  let myInt = 87; 
  // change :  myVar = myVar + 1;
  myVar++; // result
  //console.log(myVar)

// 016 : Decrement a Number with JavaScript
  let myDent = 11;
  // change : myVar = myVar - 1;
  myDent--;// result
  //console.log(myDent)

// 017 : Create Decimal Numbers with JavaScript
  // change : const ourDecimal = 5.7;
  const myDecimal = 5.7; // result


// 018 : Multiply Two Decimals with JavaScript
  // change : const tool = 2.0 * 0.0;
  const tool = 2.0 * 2.5; // result

// 019 : Divide One Decimal by Another with JavaScript
  // change : const splitDent = 0.0 / 2.0;
  const splitDent = 8.8 / 2.0;

// 020 : Finding a Remainder in JavaScript
  const remainder = 11 % 3;


  //-_-_-_-_


// 105 : Generate Random Fractions with JavaScript
  function randomFraction() {

    // Only change code below this line
  
      return Math.random();
  
    // Only change code above this line
    }
  
// 106 : Generate Random Whole Numbers with JavaScript 
  let random = randomFraction();
  console.log(random);

  function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random() * 10);
  }
  
  let whole = randomWholeNum();
  // log result
  console.log(whole);

// 107 Generate Random Whole Numbers within a Range 
  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }
  let range = randomRange();
  
  // log result
  console.log(range);

// 108 : Use the parseInt Function 
  function convertToInteger(str) {
    return parseInt(str);
  }
  
  const nmInt = convertToInteger("56");
  console.log(nmInt);

// 109 : Use the parseInt Function with a Radix 
  function convertFromBinary(bin){
    return parseInt(bin, 2);
  }

  const binInt = convertFromBinary("10011");
  console.log(binInt);

// 110 : Use the Conditional (Ternary) Operator 
  function checkEqual(a, b){
    return a == b ? "Equal" : "Not Equal";
  }

  const check = checkEqual(1,3);
  console.log(check);

// 111 : Use Multiple Conditional (Ternary) Operators 
  function checkSign(num){
    return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
  }

  const multiCheck = checkSign(-1);
  console.log(multiCheck);

// 112 : Use Recursion to Create a Countdown
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