function solution(arr) {
  var answer = [];

  if (arr.length <= 1) {
    answer[answer.length] = -1;
  } else {
    const min = arr.find((element) => element === Math.min(...arr));
    answer = arr.filter((element) => element != min);
  }

  return answer;
}
