function chunkArrayInGroups(arr, size) {
    const finalArr = [];
    while(arr.length > 0){
      finalArr.push(arr.splice(0, size))
    }
    return finalArr;
  }