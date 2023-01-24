//  01   :   -----------------------Sum All Numbers in a Range-----------------------
function sumAll(arr) {
    let total = 0
    arr.sort((a, b) => a - b);
    for(let i = arr[0]; i <= arr[1]; i++) {
        total += i;
    }
    return total;
}

console.log(sumAll([4, 1]));

//  02   :    ----------------------------Diff Two Arrays----------------------------
function diffArray(arr1, arr2) {
    const newArr = [];
  
    function diffArr(one, two) {
      for(let i = 0; i < one.length; i += 1) {
        if(two.indexOf(one[i]) === -1) {
          newArr.push(one[i]);
        }
      }
    }
    diffArr(arr1, arr2);
    diffArr(arr2, arr1);
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

  //  03   :    ----------------------------Seek and Destroy--------------------------    
  function destroyer(arr) {
    let worriors = [];
    let ground = Object.values(arguments) [0];
    let end = Object.values(arguments).splice(1);
  
    for(let i = 0; i < ground.length; i += 1) {
      let areaF = ground[i];
      if (end.indexOf(areaF) === -1) {
        worriors.push(areaF);
      }
    }
    return worriors;
  }
  
  let result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
  console.log(result);