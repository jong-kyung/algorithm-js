function solution(a, b) {
  var answer = 0;
  const numbers = [a, b].sort((a, b) => a - b);
  if (a === b) return a;
  else {
    for (let i = numbers[0]; i <= numbers[1]; i++) {
      answer += i;
    }
  }
  return answer;
}
