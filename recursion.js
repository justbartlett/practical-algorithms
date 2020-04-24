// recursion is when a function calls itself
var tracker = 0;
var callMe = function() {
  tracker++
  if(tracker === 3) {
    return 'loops'
  }
  // callMe('anytime'); // => 'return loops'
  // => implicit return undefined
  // so we need to explicitly return some value
  return callMe('anytime')
}
callMe(); // => now returns 'loops'

/*
1) Identify base cases
2) Identify recursive case(s)
3) Return where appropriate
4) Write procedures for each case that bring you closer to your base case
*/

// var callMyself = function() {
//   if () {
//     // base case
//   } else {
//     // recursive case
//     callMyself();
//   }
//   return;
// };

const loopNTimes = (n) => {
  console.log('n ===', n);
  if (n <=1) {
    return 'complete';
  }
  return loopNTimes(n-1);
}

loopNTimes(3);

// loop to recursion
function computeFactorial(num) {
  var result = 1;
  for (var i=2; i<=num; i++) {
    console.log(`result = ${result} * ${i} (${result * i})`);
    result *= i;
  }
  return result;
}

computeFactorial(5);

function computeFactorialRecursion(num) {
  if(num === 1) {
    console.log('hitting base case');
    return 1;
  }
  else {
    console.log(`returning ${num} * computeFactorial(${num-1})`);
    return num * computeFactorial(num -1);
  }
}

computeFactorialRecursion(5);


function logNumbers(start, end) {
  console.log(`iteratively looping from ${start} until ${end}`);
  for(var i=start; i <=end; i++) {
    console.log('hitting index', i);
  }
}

console.log('Log numbers');
logNumbers(1, 2);

function logNumbersRecursively(start, end) {
  console.log(`recursively looping from ${start} until ${end}`);
  function recurse(i) {
    console.log('hitting index', i);
    if (i <end) {
      recurse(i + 1);
    }
  }
  recurse(start);
}
console.log('Log numbers recursively')
logNumbersRecursively(1,3);

// wrapper functions - using closure with the recursion
function wrapperFnLoop(start, end) {
  function recurse(i) {
    console.log(`looping from ${start} until ${end}`);
    if (i<end) {
      recurse(i+1);
    }
  }
  recurse(start);
}
// this one is not using the closure
function MemoFnLoop(i, end) { // 1,3  2,3   3,3
  if (i<end) {  // is 1<3  2<3 3<3 --> no, so we go past the if block to the implicit return so we pop (returns undefined)
    MemoFnLoop(i+1, end); 
  }
}

// accumulator technique
function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];
    if(index === array.length -1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }
  return recurse(0,'');
}
joinElements(['s', 'cr', 'tcod', ' :) :)'], 'e');


// iterative loop exercise
// rewrite this function so that it uses a loop rather than recursion
function joinElements(array, joinString) {
  let resultSoFar = '';
  for (let i=0;i<array.length -1; i++) {
    resultSoFar += array[i] + joinString;
  }
  return resultSoFar + array[array.length-1]
}


// recursive factorial memoize exercise
// factorial 5 is 1*2*3*4*5

const memoize = (fn) => {
  let cache = {}
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log('Fetching from cache', n);
      return cache[n];
    }
    else {
      console.log('Calculating result', n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

const factorial = memoize(
  (x) => {
    if (x === 0) {
      return 1;
    }
    else {
      return x * factorial(x-1);
    }
  }
);

console.log(factorial(5));