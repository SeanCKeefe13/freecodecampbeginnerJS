//solved with soft and indexOf
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.indexOf(num);
  }

//solved with weird use of push and .length
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a -b)
    const testArr =[];
    for(let val of arr){
      if(val < num){
        testArr.push(val)
      }
    }
    return testArr.length
  }
  
  //solved with weird use of push and .length refactored
  function getIndexToIns(arr, num) {
    arr.sort((a, b) => a -b)
    const testArr =[];
    for(let val of arr){
      (val < num ? testArr.push(val): null)
      }
    return testArr.length
  }

  //solved with .forEach and weird use of push and .length refactored
  function getIndexToIns(arr, num) {
    arr.sort((a, b) => a -b)
    const testArr =[];
    arr.forEach(val => val < num ? testArr.push(val): null )
    return testArr.length
  }