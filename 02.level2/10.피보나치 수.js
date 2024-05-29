function solution(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
    console.log(fib[i]);
  }
  return fib[n];
}

console.log(solution(100));
