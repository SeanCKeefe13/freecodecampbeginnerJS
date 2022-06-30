//solved for loop
function findElement(arr, func) {
    for(let val of arr){
      if(func(val)){
        console.log(val)
        return val
      }
    }
  }