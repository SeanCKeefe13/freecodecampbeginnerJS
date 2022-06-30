//solved with map
function titleCase(str) {
    const strToArr = str.toLowerCase().split(' ');
    const mappedArr = strToArr.map(word => 
    word.charAt(0)
    .toUpperCase() 
    + word.slice(1));
    return mappedArr.join(' ');
  }

