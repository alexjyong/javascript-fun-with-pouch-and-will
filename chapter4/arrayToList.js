// Your code here.

function arrayToList(leArray) {
  let return_object;
  for (var i = leArray.length-1; i >= 0; i--) { 
    value = leArray[i];
	var current_object = {value:value, rest:null};
    if (!return_object) {//if this is the first time, set up inital object
   		return_object = current_object;
    }//end if
    else {
      	//add in the current return_object to what is being created
      	// in this ireation of the loop
     	current_object['rest'] = return_object;
      	return_object = current_object;
    }//end else
  }//end for
  return return_object;
}//end arrayToList

function listToArray(leList){
  let returnList = [];
  returnList.push(leList.value);
  let rest_value =leList.rest;
  while(1){
    if (!rest_value){
      break;
    }//end if
    else {
      returnList.push(rest_value.value);
      rest_value = rest_value.rest;
    }//end else
    
  }//end while
  return returnList;
}//end listToArray
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));

// → [10, 20, 30]
/* 
console.log(prepend(10, prepend(20, null)));

// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
*/
// → 20
