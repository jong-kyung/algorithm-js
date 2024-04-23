function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer[answer.length] = x * i;
  }
  return answer;
}
