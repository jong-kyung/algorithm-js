function solution(arr) {
  function gcd(a, b) {
    // 유클리드 호제법 이용
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  return arr.reduce((acc, cur) => lcm(acc, cur));
}

console.log(solution([1, 2, 3])); // 6
