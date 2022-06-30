//solved slice + string template literal
function truncateString(str, num) {
    if(str.length > num){
      return `${str.slice(0, num)}...`
    }else {
    return str;
    }
  }

//solved slice + string template literal refactored
function truncateString(str, num) {
    return(str.length > num ?
    `${str.slice(0, num)}...`:
    str);
  }