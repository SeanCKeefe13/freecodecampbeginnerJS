//solved using splice and spread operator
function frankenSplice(arr1, arr2, n) {
    const finalArr = [...arr2]
    finalArr.splice(n, 0, ...arr1)
    console.log(finalArr)
    return finalArr
  }