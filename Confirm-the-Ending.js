function confirmEnding(str, target) {
    return str.slice(str.length - target.length).includes(target)
  }