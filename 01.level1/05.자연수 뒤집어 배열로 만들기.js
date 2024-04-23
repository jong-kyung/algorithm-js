function solution(n) {
  var answer = [];
  answer = Array.from(String(n))
    .reverse()
    .map((char) => Number(char));
  return answer;
}
