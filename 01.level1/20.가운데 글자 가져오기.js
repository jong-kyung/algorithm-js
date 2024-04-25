function solution(s) {
  var answer = "";
  Array.from(s).forEach((element, index) => {
    if (s.length % 2 === 0) {
      answer = s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
    } else {
      answer = s[Math.floor(s.length / 2)];
    }
  });
  return answer;
}
