
function loop(leValue, testFunc, updateFunc, bodyFunc) {
  if (!testFunc(leValue)){
    return;
  }

  bodyFunc(leValue);
  leValue = updateFunc(leValue);

  //hey recursion was useful after all Alex!
  loop(leValue,testFunc,updateFunc,bodyFunc);

}


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
