// Your code here.

function deepEqual(obj1, obj2) {
 
  var value1;
  var value2;
  if (obj1 == null){
    value1 = null; 
  }
  else {
    value1 = typeof(obj1);
  }
  
  if (obj2 == null){
   	value2 = null; 
  }
  else{
    value2 = typeof(obj1);
  }
  //if one is an object but the other isn't return false
  if (value1 == "object" && value2 != "object"){
   	return false 
  }
  if (value1 != "object" && value2 == "object"){
   	return false 
  }
  //if they are both not objects
  if (value1 != "object" && value2 != "object"){
   	if (obj1 === obj2) { //return true if they are equal
     	return true; 
    }
    else { //return false
        return false; 
    }
  }
  else {
   	var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    //if the length of the keys is different....
    //the objects are def not the same :)
    var length1 = keys1.length;
    var length2 = keys2.length;
    if (length1 != length2) {
     	return false; 
    }
    
    for (var i =0; i< keys1.length; i++) {
     	var key1 = keys1[i];
      	var value1 = obj1[key1];
      	if (obj2[key1]){
          var value2 = obj2[key1];
          console.log(value1 == value2);
          if (value1 !== value2){
            
           	return false; 
          }
        }
      	else {
         	return false; 
        }
    }
  }
  
  return true;
}//deepEqual end

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
/*
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
*/

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
