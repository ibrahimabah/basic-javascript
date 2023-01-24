// 01   :   Sum All Numbers in a Range
function sumAll(arr) {
    let minN = Math.min(arr[0], arr[1]);
    let maxN = Math.max(arr[0], arr[1]);
    var totalN = 0;

    for( let i = minN; i <= maxN; i += 1) {
        totalN += i;
    }

    return totalN;
}

sumAll([1], [4]);