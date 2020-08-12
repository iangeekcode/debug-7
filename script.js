function bug6()
{
  var fibonacciSequence = fibonacci(0,1,10);
  console.log(fibonacciSequence);
  //should print "1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89"
}

//returns a Fibonacci sequence based on 
//the value of the limit
function fibonacci(a,b,limit) {
  if (limit === 0) {
    return b;
  }
  return b+", "+ fibonacci(b,a+b,limit-1);
}