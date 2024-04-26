function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    count % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
