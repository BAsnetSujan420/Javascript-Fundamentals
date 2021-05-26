function fibFactory(num) {
    return (function fib(n) {
      if (n < 2){
        return n
      }
      return fib(n - 1) + fib (n - 2)
    })(num);
  }
  const tenthFib = fibFactory(10);
  const fifteenthFib = fibFactory(15);
  const twentiethFib = fibFactory(20);
  
  console.log(tenthFib, fifteenthFib, twentiethFib);