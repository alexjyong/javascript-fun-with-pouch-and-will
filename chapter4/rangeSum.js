// Your code here.
function range (start, end, step) {
  var return_array =[start];
  if (!step) {
    if (start > end) {
      step = -1;
    }
    else {
      step = 1; 
    }
  }
  
  if (start > end) {
    while (start > end) {
      
      start = start + step;
      return_array.push(start);
  	} 
  }
  else  {
    while (start < end) {
      start = start + step;
      return_array.push(start);
  	}   
  }
 
  
  return return_array;
}

function sum (num_array) {
  let total = 0;
  for (let i = 0; i < num_array.length; i++) {
    total = total + num_array[i];
  }
  return total;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
