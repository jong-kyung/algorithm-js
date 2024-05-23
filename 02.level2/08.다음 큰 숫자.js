function solution(n) {
  let answer = n + 1;
  while (n.toString(2).match(/1/g).length !== answer.toString(2).match(/1/g).length) {
    answer++;
  }
  return answer;
}
