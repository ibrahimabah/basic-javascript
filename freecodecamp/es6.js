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

  