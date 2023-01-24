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