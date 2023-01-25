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

  //   04   :   ----------------------------Wherefore art thou--------------------------
  function whatIsInAName(collection, source) {
    var equalResult = [];
    collection.forEach(collection => {
      let index = 0;
      for (let key in source) {
        if(collection[key] === source[key]) {
          index += 1;
        }
        if (index === Object.keys(source).length) {
          equalResult.push(collection);
        }
      }
    });
    return equalResult
}

let final = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

console.log(final);


//   05   :   ----------------------------Spinal Tap Case--------------------------
function spinalCase(str) {
    let lowToUpper = str.replace(/([a-z])([A-Z])/g,"$1 $2");
    let space = lowToUpper.replace(/\s|_/g, "-");
    return space.toLowerCase();
  }
  
  let output = spinalCase('ThisIsSpinalTap');
  console.log(output)

//   06   :   --------------------------------Pig Latin------------------------------
function translatePigLatin(str) {
    let vwls = "ouiea".split("");
    function vwlIs(ltr) {
      return vwls.indexOf(ltr)
    }
  
    for (let i = 0; i < str.length; i++){
      let singleLtr = str[i];
      if(vwls.indexOf(singleLtr) != -1 && i === 0){
        return str + "way";
      };
      if(vwlIs(singleLtr) != -1){
        return str.slice(i) + str.slice(0, i)   +       "ay";
      }
    }
    return str + "ay";
  }
  
  let output = translatePigLatin("consonant");
  console.log(output);