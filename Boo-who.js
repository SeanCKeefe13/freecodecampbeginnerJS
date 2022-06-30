//solved if statement using or operator
function booWho(bool) {
    if(bool === true || bool === false){
      return true;
    }
    return false;
  }

  //solved if statement using or operator refactored
  function booWho(bool) {
    return (bool === true || bool === false?
      true:
      false);
  }

  //solved if statement check for  typeof "boolean"
  function booWho(bool) {
    if(typeof bool === "boolean"){
        return true;
      }
      return false;
    }

      //solved if statement check for  typeof "boolean" refactored
  function booWho(bool) {
    return (typeof bool === "boolean"?
        true:
        false);
    }