//solved with .includes
function mutation(arr) {
    for(let letter of arr[1].toLowerCase().split('')){
      if(!arr[0].toLowerCase().includes(letter)){
        return false;
      }
      }
    return true;
  }

  
