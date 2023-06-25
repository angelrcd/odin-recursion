function mergeSort(arr){
  function merge(left, right){
    const result = []
  
    let leftPointer = 0
    let rightPointer = 0;
    while((leftPointer < left.length) && (rightPointer < right.length)){
      if(left[leftPointer] <= right[rightPointer]){
        result.push(left[leftPointer]);
        leftPointer++;
      } else {
        result.push(right[rightPointer]);
        rightPointer++;
      }
  
      if(leftPointer >= left.length){
        result.push(...right.slice(rightPointer));
        break;
      } else if (rightPointer >= right.length){
        result.push(...left.slice(leftPointer));
        break;
      }
    }
  
    return result;
  }

  if(arr.length < 2){
    return arr;
  } else {
    const midpoint = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, midpoint));
    const rightHalf = mergeSort(arr.slice(midpoint));

    return merge(leftHalf, rightHalf);
  }
}