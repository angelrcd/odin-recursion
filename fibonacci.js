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