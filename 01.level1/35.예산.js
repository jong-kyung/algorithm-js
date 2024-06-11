function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b).forEach((value) => {
    if (budget >= value) {
      budget -= value;
      answer++;
    }
  });

  return answer;
}
solution([1, 3, 2, 5, 4], 9);
