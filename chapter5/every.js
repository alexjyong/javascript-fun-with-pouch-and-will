function every(array, testFunc) {
  // Your code here.
  let finalAnswer =true; //lets be optimistic

  for (var i =0; i < array.length; i++) {

    let val = array[i];
    if (!testFunc(val)){
     	return false;
    }

  }
  return finalAnswer;
}

function every2(array,testFunc){
  return !array.some(element => !testFunc(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
