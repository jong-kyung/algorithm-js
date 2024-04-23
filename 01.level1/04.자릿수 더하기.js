function solution(n) {
  var answer = 0;

  Array.from(String(n)).forEach((char) => {
    answer += Number(char);
  });
  return answer;
}
