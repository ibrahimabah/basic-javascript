//  01   :   Sum All Numbers in a Range
function sumAll(arr) {
    let total = 0
    arr.sort((a, b) => a - b);
    for(let i = arr[0]; i <= arr[1]; i++) {
        total += i;
    }
    return total;
}

console.log(sumAll([4, 1]));

//  02  :