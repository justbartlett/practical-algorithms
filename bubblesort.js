// bubblesort!

const arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// naive version
function bubbleSortBasic(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  for(var i=0; i<array.length; i++) {
    countOuter++;
    for(var j=1;j<array.length;j++){
      countInner++;
      if(array[j-1] > array[j]) {
        countSwap++;
        swap(array, j-1, j);
      }
    }
  }
  console.log('outer:', countOuter, 'inner:', countInner, 'swap', countSwap);
  return array;
}

bubbleSortBasic(arr);

// optimized version
// we are keeping track of the swap
// so if there is an iteration where we dont swap anything then we just return it
function bubbleSort(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;
  var swapped;
  do {
    countOuter++;
    swapped = false;
    for(var i=0;i<array.length;i++){
      countInner++;
      if(array[i] && array[i+1] && array[i] > array[i+1]) {
        countSwap ++;
        swap(array, i, i+1);
        swapped = true;
      }
    }
  } while(swapped);
  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

console.log('Optimized');