// linear search  - loop through the list and search for that number - O(n)
// task: implement linear search
function linearSearch(list, item) {
  let index = -1; // -1 means that it wasn't found
  list.forEach((listItem, i) => {
    if(listItem === item) {
      index = i; // update index to current index
    }
  });
  return index;
}
linearSearch([2, 6, 7, 90, 103], 90)