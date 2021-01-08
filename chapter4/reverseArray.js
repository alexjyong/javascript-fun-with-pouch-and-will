// Your code here.

function reverseArray(orig_array) {
 
  var new_array = [];
  
  for (var i = orig_array.length -1; i >= 0; i--) {
    	
   		new_array.push(orig_array[i]);
    
  }
  return new_array;
}

function reverseArrayInPlace(arrayValue) {

  for (var i = 0; i< Math.floor(arrayValue.length/2);  i++) {
   
    let valueA =arrayValue[i];
    let valueB = arrayValue[arrayValue.length - (i+1)];
    arrayValue[i] = valueB;
    arrayValue[arrayValue.length - (i+1)] = valueA;
    
  }
  
  return arrayValue;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
