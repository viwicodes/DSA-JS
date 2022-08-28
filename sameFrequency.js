function sameFrequency(a, b){
  let sA = a.toString()
  let sB = b.toString()

  let fOfA = {}
  let fOfB = {}

  for(var each of sA){
    fOfA[each] ? fOfA[each] += 1 : fOfA[each] = 1;
  }

  for(var each of sB){
    fOfB[each] ? fOfB[each] += 1 : fOfB[each] = 1;
  }
  
  for(var key in fOfA){
    if(!(key in fOfB)){
      return false
    }
    else if(fOfA[key] != fOfB[key]){
      return false
    }
  }
  return true
}
sameFrequency(123, 234)
