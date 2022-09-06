//Comment your JavaScript code

// single comments
/*
multiple comments
*/

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