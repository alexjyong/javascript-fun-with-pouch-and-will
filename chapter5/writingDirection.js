function dominantDirection(text) {
  // Your code here.
  let words = text.split('');
  var ltr_count=0;
  var rtl_count=0;
  var ttb_count =0;
  for (let word of words) {
    var charScript = characterScript(word.codePointAt(0));
    if (charScript) {
      var direction = charScript.direction;
      if (direction == "ltr") {
         ltr_count +=1;
      }
      else if (direction == "rtl") {
       	 rtl_count += 1;
      }
      else {
       	 ttb_count += 1;
      }
    }
  }
  var obj = {
    'ltr':ltr_count,
    'rtl':rtl_count,
    'ttb':ttb_count
  };

  var biggest = '';
  for (var name in obj) {
      if(biggest !== '' && obj[name] > obj[biggest]) {
          biggest = name;
      } else if (biggest === '') {
          biggest = name;
      }
  }
  return biggest;
}
function characterScript(code) {

  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
