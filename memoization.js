// memoization caching the value that a function returns
/*
const factorial = (n) => {
  // Calculations: n * (n-1) * (n-2) * ... (2) * (1)
  return factorial;
}
factorial(35);
factorial(36); // factorial(36) = factorial(35) * 36
*/



// task 1 write a function, times 10, that takes an agument, n, and multiplies n times 10
// a simple multiplication function
const times10 = (n) => {
  return n * 10;
}
console.log('task 1');
console.log('times10 returns:', times10(9));

// task 2: use an object to cache the results of your times10 function.
// protip1: create a function that checks if the value for n has been calculated before
// protip 2: if the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};
const memoTimes10 = (n) => {
  if (n in cache) {
    console.log('Fetching from cache:', n);
    return cache[n];
  }
  else {
    console.log('Calculating result');
    let result = times10(n);
    cache[n] = result;
    return result;
  }
}
console.log('task 2');
console.log('Task 2 calculated value:', memoTimes10(9)); // calculated
console.log('Task 2 cached value:', memoTimes10(9)); // cached

// task 3: clean up your global scope by moving your cache inside your function
// protip: use a closure to return a function that you can call later

const memoizedClosureTimes10 = () => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache:', n);
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = times10(n);
      cache[n] = result;
      return result;
    }
  };
}
const memoClosureTimes10 = memoizedClosureTimes10();
console.log('Task 3');
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9));
  console.log('Task 3 cached value: ', memoClosureTimes10(9));
} catch (e) {
  console.error('Task 3:', e);
}

// task 4: make your memo function generic and accept the times10 function as a callback rather than defining 
// the n*10 logic inside the if/else or pulling it in from the global scope
// protip: take advantage of the fact that the parameters are saved in the closure as well, just like the cache from the previous example

const memoize = (cb) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache', n);
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = cb(n);
      cache[n] = result;
      return result;
    }
  };
};

// return function from memoizedAdd
const memoizedTimes10 = memoize(times10);
console.log('Task 4');
try {
  console.log('Task 4 calculated value', memoizedTimes10(9)); // calculated
  console.log('Task 4 cached value:', memoizedTimes10(9)); // cached
} catch (e) {
  console.error('Task 4:', e);
}