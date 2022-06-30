//Solved with concat
function repeatStringNumTimes(str, num) {
    let finalStr = ''
    if(num > 0){
    for(let i =0; i < num; i++){
      finalStr += str
      console.log(finalStr)
    }
    }
    return finalStr
  }

//Solved with concat refactored
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num -1): '';
  }
//Solved with Array push + join method
function repeatStringNumTimes(str, num) {
    const strToArr = [];
    if(num > 0){
    for(let i =0; i < num; i++){
      strToArr.push(str)
      console.log(strToArr.join(''))
    }
    }
    return strToArr.join('');
  }