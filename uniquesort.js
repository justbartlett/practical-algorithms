// transform this simple sorting algorithm into a unique sort
// input [1,5,2,1] => output: [1,2,5]
// input [4,2,2,3,2,2,2] => output [2,3,4]

const uniqSort = function(arr) {
  const breadcrumbs = {};
  // return arr.sort((a, b) => a - b);
  const result = [];

  for(let i = 0;i<arr.length;i++) { // loop through list
    if(!breadcrumbs[arr[i]]) { // check if we havent seen it (start at second one) - breadcrums 1 is empty - so we havent seen it yet
      result.push(arr[i]);
      breadcrumbs[arr[i]]=true;   // [4,2] {2:true}
    }
  }
  return result.sort((a,b) => a-b);
};

uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]

