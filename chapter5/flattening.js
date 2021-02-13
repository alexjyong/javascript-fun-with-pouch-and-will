let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(leReducer(arrays));
// → [1, 2, 3, 4, 5, 6]

//non-reduce version for mental warmup
function leReducer(arrays) {
 	let final_array =[];
  	for (var i =0; i<arrays.length; i++) {
      	let inner_array = arrays[i];
      	for (var j =0; j <inner_array.length; j++) {
          let value = inner_array[j];
          final_array.push(value);
        }
    }
  return final_array;
}
//reducer version of the above
console.log(arrays.reduce(
function(acc, current) {
    return acc.concat(current)
  },
  []
));
/*
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10

*/
