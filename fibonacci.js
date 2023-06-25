// Fibonacci iterative solution
function fibs(n){
  const result = [0, 1];
  for(let i = 2; i <= n; i++){
    const next = result.at(-1) + result.at(-2);
    result.push(next);
  }
  result.length = n;
  return result;
}

//Fibonacci recursive solution
function fibsRec(n){
  if(n ===1){
    return [0];
  } else if( n === 2){
    return [0, 1]
  } else {
    const priorArr = fibsRec(n-1);
    const next = priorArr.at(-1) + priorArr.at(-2);
    return priorArr.concat(next)
  }
}

console.log(fibsRec(77));