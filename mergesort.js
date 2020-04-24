/*
merge sort, divide and conquer - O(n*logn)
divide: divide input array into 'n' single element subarrays
merge (L, R)
// [3,27] // [9, 10]
// initialize empty array
// compare the first index of the left array
// to the first index of the right array
// push the lower value to the empty array
// shift the array with the lower value (remove the first item)
// repeat until both arrays are empty
*/

/*
pseudocode: merge sort
mergeSort(list)
  base case: if list.length < 2, return
  break the list into halves L & R
  Lsorted = mergeSort(L)
  Rsorted = mergeSort(R)
  return merge(Lsorted, Rsorted)
*/

// split the array in to halves and merge them recursively
function mergeSort(arr) {
  if(arr.length === 1) {
    //return once we hit an array with a single item
    return arr;
  }
  const middle = Math.floor(arr.length/2) // get to the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on left side
  const right = arr.slice(middle); // items on the right side
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = [];
  let indexLeft= 0;
  let indexRight = 0;

  while(indexLeft < left.length && indexRight < right.length) {
    if(left[indexLeft] <right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [2,5,1,3,7,3,8,6,3];

mergeSort(list);