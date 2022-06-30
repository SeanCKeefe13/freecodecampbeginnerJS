  //Solved for loop + Math.max + spread operator
  function largestOfFour(arr) {
    const finalArr = [];
    for(let i= 0; i< arr.length; i++){
      finalArr.push(Math.max(...arr[i]));
      console.log(finalArr)
      }
    return finalArr;
  } 


//Solved for of loop + Math.max + spread operator
function largestOfFour(arr) {
    const finalArr = [];
    for(let innerArr of arr){
      finalArr.push(Math.max(...innerArr));
      console.log(finalArr)
      }
    return finalArr;
  }  


//Solved for of loop + sort
function largestOfFour(arr) {
    const finalArr = [];
    for(let innerArr of arr){
      innerArr.sort((a, b)=> b - a)
      finalArr.push(innerArr[0])
      console.log(finalArr)
    }
    return finalArr;
  }

  //Solved with reduce
  function largestOfFour(arr) {
    const finalArr = [];
    let largestNumInArr = 0;
    for(let innerArr of arr){
      innerArr.reduce(function(prevNum, currentNum){
        if(currentNum >= largestNumInArr && currentNum >= prevNum){
          largestNumInArr = currentNum;
          console.log(largestNumInArr)
        }
        return currentNum
      })
      finalArr.push(largestNumInArr)
      console.log(finalArr)
      }
    return finalArr;
  }
