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

// 021 : Compound Assignment With Augmented Addition
  let a = 3;
  let b = 17;
  let c = 12;

  // solution
  a += 12;
  b += 9;
  c += 7;  

// 022 : Compound Assignment With Augmented Subtraction
  let a = 11;
  let b = 9;
  let c = 3;

  // solution
  a -= 6;
  b -= 15;
  c -= 1;

// 023 : Compound Assignment With Augmented Multiplication
  let a = 5;
  let b = 12;
  let c = 4.6;

  // solution
  a *= 5;
  b *= 3;
  c *= 10;

// 024 : Compound Assignment With Augmented Division
  let a = 48;
  let b = 108;
  let c = 33;

  // solution
  a /= 12;
  b /= 4;
  c /= 11;

// 025 : Escaping Literal Quotes in Strings
  const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// 026 : Quoting Strings with Single Quotes
  const myStg = '<a href="http://www.example.com" target="_blank">Link</a>';

// 027 : Escape Sequences in Strings
const mySt = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

console.log(myStr)

// 028 : Concatenating Strings with Plus Operator
const myConc = "This is the start. " + "This is the end."; // Change this line

// 029 : oncatenating Strings with the Plus Equals Operator
let myConcP = "This is the first sentence. ";
myConcP += "This is the second sentence."

// 030 : Constructing Strings with Variables
const myName = "Ibrahima";
const myQuo = "My name is " + myName + "and I am well!";

// 031 : Appending Variables to Strings
const someAdjective = "Awesome";
let my = "Learning to code is ";
myStr += someAdjective;

// 032 : Find the Length of a String
  // Setup
    let lastNameLength = 0;
    const lastName = "Lovelace";

  // Only change code below this line
    lastNameLength = lastName.length;

// 033 : Use Bracket Notation to Find the First Character in a String
  // Setup
  let firstLetterOfLastName = "";
  const lastName = "Lovelace";

  // Only change code below this line
  firstLetterOfLastName = lastName[0]; // Change this line

// 034 : Understand String Immutability
  // Setup
  let myS = "Jello World";

  // Only change code below this line
  myS = "Hello Sir"; // Change this line
  // Only change code above this line

 
// 035 : Use Bracket Notation to Find the Nth Character in a String
  // Setup
  const lastName = "Lovelace";

  // Only change code below this line
  const thirdLetterOfLastName = lastName[2]; // Change this line

// 036 : Use Bracket Notation to Find the Last Character in a String
  // Setup
  const lastName = "Lovelace";

  // Only change code below this line
  const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line


// 037 : Use Bracket Notation to Find the Nth-to-Last Character in a String
  // Setup
  const lastName = "Lovelace";

  // Only change code below this line
  const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line


// 038 : Word Blanks
  const myNoun = "dog";
  const myAdjective = "big";
  const myVerb = "ran";
  const myAdverb = "quickly";

  // Only change code below this line
  const wordBlanks = "The" + ' ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + "very" + ' ' + myAdverb; // Change this line
  // Only change code above this line


// 039 : Store Multiple Values in one Variable using JavaScript Arrays
  // Only change code below this line
  const myArr = [ "age:", 23];


// 040 : Nest one Array within Another Array
  // Only change code below this line
  const myNeArray = [["Name:", "Ibrahima"], ["Age:", 23]];

// 041 : Access Array Data with Indexes
  const myIndxArr = [50, 60, 70];
  let myData = myIndxArr[0];

// 042 : Modify Array Data With Indexes
  // Setup
  const modArr = [18, 64, 99];

  // Only change code below this line
  modArr[0] = 45;

// 043 : Access Multi-Dimensional Arrays With Indexes
  const mulArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];

  const mData = mulArr[2][1];

// 044 : Manipulate Arrays With push()
  // Setup
  const myArray = [["John", 23], ["cat", 2]];

  // Only change code below this line
  myArray.push(["dog", 3])

/*-----------------------------------LAST-STOP-----------------------------------
--------------------------------DATE-:-16/01/2023--------------------------------
*/

// 045 : Manipulate Arrays With pop()
  // Setup
  const myArrPop = [["John", 23], ["cat", 2]];
  const removedArrPop = myArrPop.pop();
  // Only change code below this line


// 046 : Manipulate Arrays With shift()
  // Setup
  const myArrShift = [["John", 23], ["dog", 3]];
  let removedArrShift = myArrShift.shift();
  // Only change code below this line

// 047 : Manipulate Arrays With unshift()
  // Setup
  const myArrUnshift = [["John", 23], ["dog", 3]];
  myArrUnshift.shift();
  myArrUnshift.unshift(["Paul", 35]);
  // Only change code below this line


// 048 : Shopping List
const myList = [["Water", 5],["Fruits", 7 ],["desserts", 3],["lunch", 5],["juice", 9]];

// 049 : Write Reusable JavaScript with Functions
  function reusableFunction() {
    console.log("Hi World")
  }

  reusableFunction();

// 050 : Passing Values to Functions with Arguments
function functionWithArgs(argOne, argTwo) {
  console.log( argOne + argTwo);
}

functionWithArgs(1, 2);


// 051 :  Return a Value from a Function with Return
function timesFive(int) {
  return int * 5;
}

console.log(timesFive(5));


// 052 :  Global Scope and Functions
  // Declare the myGlobal variable below this line
  const myGlobal = 10;

  function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5;
  }

  // Only change code above this line

  function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }


// 053 :  Local Scope and Functions
  function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();

  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);


// 054 :  Global vs. Local Scope in Functions
  // Setup
  const outerWear = "T-Shirt";

  function myOutfit() {
    // Only change code below this line
  let outerWear = "sweater"
    // Only change code above this line
    return outerWear;
  }

  myOutfit();


// 055 :
// 056 :
// 057 :
// 058 :
// 059 :
// 060 :
// 061 :
// 062 :
// 063 :
// 064 :
// 065 :
// 066 :
// 067 :
// 068 :
// 069 :
// 070 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :
// 000 :


  //-_-_-_-_t 
