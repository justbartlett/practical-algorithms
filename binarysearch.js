// divide and conquer
// binary search - search for a value in a sorted array by cutting the side of the search area in half
// task: implement binary search - this works for sorted arrays
function binarySearch(list, item) {
  var min = 0;
  var max = list.length - 1;
  var guess;
  while(min <= max) {
    guess = Math.floor((min + max) / 2); // get the halfway point
    if(list[guess] === item) { // if the guess is the item, return the guess
      return guess;
    }
    else {
      if (list[guess] < item) { 
        min = guess + 1;
      } else {
        max = guess -1;
      }
    }
  }
  return -1;
}
binarySearch([2, 6, 7, 90, 103], 90);