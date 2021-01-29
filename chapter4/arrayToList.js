
function arrayToList(leArray) {
  
  let return_object;
  
  for (var i = leArray.length-1; i >= 0; i--) { 
    value = leArray[i];
	var current_object = {value:value, rest:null};
    if (!return_object) {
   		return_object = current_object;
    }
    else {
     	current_object['rest'] = return_object;
      	return_object = current_object;
    }
  }
  return return_object;
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
/* console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
*/
// → 20
