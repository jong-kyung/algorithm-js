function solution(s) {
  let answer = [0, 0];
  while (s !== "1") {
    let lgth = s.length;
    s = s.toString(2).match(/1/g).length;
    answer[0]++;
    answer[1] += lgth - s;
    s = s.toString(2);
  }

  return answer;
}
