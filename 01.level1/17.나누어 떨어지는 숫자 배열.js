function solution(arr, divisor) {
  var answer = [];
  for (item of arr) {
    if (item % divisor === 0) {
      answer[answer.length] = item;
    }
  }

  if (answer.length === 0) {
    answer[0] = -1;
  }

  answer.sort((a, b) => a - b);

  return answer;
}
