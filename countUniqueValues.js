function countUniqueValues(arr) {
    var i = 0 ;
    for(var j = 1; j < arr.length ; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}

// Driver code
countUniqueValues([1,1,1,1,1,2])
