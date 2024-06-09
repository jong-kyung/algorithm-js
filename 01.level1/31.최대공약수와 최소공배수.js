function solution(n, m) {
  var answer = [];
  let max = Math.max(n, m);
  let min = Math.min(n, m);

  while (min !== 0) {
    let r = max % min;
    max = min;
    min = r;
  }

  answer[answer.length] = max;
  answer[answer.length] = (n * m) / max;
  return answer;
}
solution(3, 12); // 3
