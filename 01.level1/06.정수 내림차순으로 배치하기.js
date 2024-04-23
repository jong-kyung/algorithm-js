function solution(n) {
  var answer = 0;
  answer = parseInt(
    Array.from(String(n))
      .sort((a, b) => {
        return b - a;
      })
      .join("")
  );
  return answer;
}
