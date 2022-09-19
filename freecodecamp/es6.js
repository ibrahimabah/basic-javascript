// 01 : Compare Scopes of the var and let Keywords
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
// 02 : Mutate an Array Declared with const
  const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line
      s[0] = 2;
      s[1] = 5;
      s[2] = 7;
    // Only change code above this line
    console.log(s);
  }
  editInPlace();

// 03 : Prevent Object Mutation
  function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
      Object.freeze(MATH_CONSTANTS);
    
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

// 04 : Use Arrow Functions to Write Concise Anonymous Functions
    // simplified version with return keyword
    const magic = () => new Date();

// 05 : Write Arrow Functions with Parameters
    // simplified version with parameters
    const myConcat = (arr1, arr2) =>
    arr1.concat(arr2);

// 06 : Set Default Parameters for Your Functions
    // Modify the function by adding default parameters so that it will add 1 to number if value is not specified.
    const increment = (number, value = 1) => number + value;
    console.log(increment());
    

// 07 : Use the Rest Parameter with Function Parameters
    const sum = (...args) => { // rest parameter : ...args etc
        return args.reduce((a, b) => a + b, 0); // use arrow function
    }
    //console.log(sum(7,8)) 

// 08 : Use the Spread Operator to Evaluate Arrays In-Place
    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2; 
    arr2 = [...arr1]; // Changed from : arr2 = [];
    //console.log(arr2);


// 09 : Use Destructuring Assignment to Extract Values from Objects
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

  /* change : 
    const today = HIGH_TEMPERATURES.today;
    const tomorrow = HIGH_TEMPERATURES.tomorrow;
  */
  const {today, tomorrow } = HIGH_TEMPERATURES; // result


// 10 : Use Destructuring Assignment to Assign Variables from Objects
  const HIGH_TEMPERATURE = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  /* change ;
    const highToday = HIGH_TEMPERATURES.today;
    const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  */

    const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURE; // result

  
// 11 : Use Destructuring Assignment to Assign Variables from Nested Objects

  