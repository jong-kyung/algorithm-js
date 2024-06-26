function solution(k, m, score) {
  let answer = 0;
  let apples = score.sort((a, b) => b - a);
  for (let i = m; i <= apples.length; i = i + m) {
    answer += apples[i - 1] * m;
  }
  return answer;
}
