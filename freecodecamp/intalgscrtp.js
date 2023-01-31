//  01   :   -----------------------Sum All Numbers in a Range-----------------------
function sumAll(arr) {
    let total = 0
    arr.sort((a, b) => a - b);
    for(let i = arr[0]; i <= arr[1]; i++) {
        total += i;
    }
    return total;
}

// console.log(sumAll([4, 1]));

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
  
  // console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

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
  
  // console.log(result);

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

// console.log(final);


//   05   :   ----------------------------Spinal Tap Case--------------------------
function spinalCase(str) {
    let lowToUpper = str.replace(/([a-z])([A-Z])/g,"$1 $2");
    let space = lowToUpper.replace(/\s|_/g, "-");
    return space.toLowerCase();
  }
  
  let outPut = spinalCase('ThisIsSpinalTap');
  // console.log(outPut)

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
  // console.log(output);

//   07 :   --------------------------------Search and Replace------------------------------
  function myReplace(str, before, after) {
    if(before[0] === before[0].toUpperCase()){
      after = after[0].toUpperCase() + after.slice(1)
    } else if (before[0] === before[0].toLowerCase()){
      after = after[0].toLowerCase() + after.slice(1)
    };
    return str.replace(before, after);
  }
  
  // console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

//  08 :   --------------------------------DNA Pairing------------------------------
  function pairElement(str) {
    let pairArr = [];
  
    function checkPair(word) {
      if(word === "A") {
        return "T"
      } else if(word === "T") {
        return "A"
      } else if(word === "C") {
        return "G"
      } else if(word === "G") {
        return "C"
      }
    }
  
    for(let word of str){
      pairArr.push([word, checkPair(word)])
    }
    return pairArr;
  }
  
  // console.log(pairElement("GCG"));

//  09 :  --------------------------------Missing Letters------------------------------
function fearNotLetter(str) {
    for (let i = 0; i < str.length -1; i++){
      if(str.charCodeAt(i + 1) - str.charCodeAt(i) > 1){
        return String.fromCharCode(str.charCodeAt(i) + 1);
      }
    }
  }
  
  // console.log(fearNotLetter("abce"));


//  10 :  --------------------------------Sorted Union------------------------------
function uniteUnique(arr) {
    let args = [...arguments];
    let primes = [];
  
    for (let i = 0; i < args.length; i++){
      for(let z = 0; z < args[i].length; z++){
        if(primes.indexOf(args[i][z]) === -1){
          primes.push(args[i][z])
        }
      }
    }
    return primes;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  //    --------------------------------///////////////------------------------------
//    11  :  -------------------------Convert HTML Entities------------------------
  function convertHTML(str) {
    const charCovrt = { 
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }
    return str.replace(/[&<>"']/g, function(match) {
      return charCovrt[match]
    });
  }

convertHTML("Dolce & Gabbana");

//    12  :  ----------------------Sum All Odd Fibonacci Numbers---------------------
function sumFibs(num) {
  let f = 1, n = 1;
  let total = 2;

  let fbn = f + n;
  while(fbn <= num){
    if((fbn % 2 !== 0 ) && (fbn <= num)) {
      total += fbn;
    }
    f = n;
    n = fbn;
    fbn = f + n;  
  }

  return total;
}

// console.log(sumFibs(4));

//    13  :   --------------------------Sum All Primes-------------------------
  function sumPrimes(num) {
  let prime = [];
  let total = 0;

  for(let i = 2; i <= num; i++){
    let checkPrime = true;
    for(let p = 2; p < i; p++){
      if(i % p === 0) {
        checkPrime = false;
          break;
        }
      }
      total += checkPrime ? i : 0;
    }
  return total;
  }

  sumPrimes(10);

//    14  :   --------------------------Smallest Common Multiple-------------------------
  function smallestCommons(arr) {
    let ultra = Math.max(arr[0], arr[1]);
    let base = Math.min(arr[0], arr[1]);
    let sum = ultra;

    for(let i = ultra; i >= base; i--){
      if(sum % i !== 0){
        sum += ultra;
        i = ultra;
      }
    }

    return sum;
  }
  // console.log(smallestCommons([5,6]));

//    15  :   -------------------------------Drop it------------------------------
function dropElements(arr, func) {
  if(arr.length === 0 || func(arr[0])){
    return arr;
  } else{
    arr.shift();
    return dropElements(arr, func)
  }
}

// console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));

//  16  :   -------------------------------Steamroller------------------------------
  function steamrollArray(arr) {
  let flatArr = [];

  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      let nestArr = steamrollArray(arr[i]);
      flatArr = flatArr.concat(nestArr);
    } else {
      flatArr.push(arr[i])
    }
  }

  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

//  17  :   -------------------------------Binary Agents------------------------------
function binaryAgent(str) {
  let transLang = str.split(" ").map(function(bin){
    return String.fromCharCode(parseInt(bin, 2))
  });

  return transLang.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

//  18  :   -------------------------------Everything Be True------------------------------
function truthCheck(collection, pre) {
  for(let i = 0; i < collection.length; i++ ){
    if(!collection[i][pre]) {
      return false;
    }
  }
  return true;
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));

//  19  :   -------------------------------Binary Agents------------------------------
//  20  :   -------------------------------Binary Agents------------------------------
//  21  :   -------------------------------Drop it------------------------------