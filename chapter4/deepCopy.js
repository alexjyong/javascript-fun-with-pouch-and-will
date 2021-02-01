// Your code here.

function deepEqual(obj1, obj2) {
 
  let value1;
  let value2;
 //if nothing is passed in, define value1 as null
 //typeof null is read as an object
  if (obj1 == null){
    value1 = null; 
  }
  else {
    value1 = typeof(obj1);
  }
  
 //ditto as the above. 
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
 //same as above, but vice versa.
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
   
   //get the keys from the Objects
   	let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    //if the length of the keys is different....
    //the objects are def not the same :)
    let length1 = keys1.length;
    let length2 = keys2.length;
    if (length1 != length2) {
     	return false; 
    }
    
    //loop through all the keys, and compare the values between the two.
    for (let i =0; i< keys1.length; i++) {
     	 let key1 = keys1[i];
      	let value1 = obj1[key1];
      	if (obj2[key1]){
          let value2 = obj2[key1];
          
          //if they are both objects, then go and call this function recursively.
          if (typeof(value1) == "object" && typeof(value2) == "object") { 
            let retVal=deepEqual(value1, value2);
            if (!retVal){
              return false
            }
          }
          else if (value1 !== value2){ 
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
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
