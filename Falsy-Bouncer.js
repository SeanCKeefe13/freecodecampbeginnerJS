//solved with boolean manipulation
function bouncer(arr){
    const onlyTruthyArr = [];
    for(let val of arr){
      if(val){
        onlyTruthyArr.push(val)
      }
    }
    return onlyTruthyArr;
  }

  //solved using filter and Boolean
  function bouncer(arr) {
    return arr.filter(Boolean);
  }

  //solved with boolean manipulation and filter
  function bouncer(arr) {
    return arr.filter(val => !!val);
  }

