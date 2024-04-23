function solution(arr) {
  var answer = 0;
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  answer = sum / arr.length;
  return answer;
}
