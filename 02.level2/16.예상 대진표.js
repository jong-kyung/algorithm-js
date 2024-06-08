function solution(n, a, b) {
  let answer = 0;
  while (a != b) {
    if (a % 2 == 1) {
      a += 1;
    }
    a = Math.floor(a / 2);

    if (b % 2 == 1) {
      b += 1;
    }
    b = Math.floor(b / 2);

    answer++;
  }

  return answer;
}
