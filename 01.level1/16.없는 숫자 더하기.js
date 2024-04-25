function solution(numbers) {
  var answer = 0;
  const numberRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (testNumber of numberRange) {
    if (!numbers.includes(testNumber)) {
      answer += testNumber;
    }
  }
  return answer;
}
