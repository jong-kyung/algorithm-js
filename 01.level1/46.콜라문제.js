function solution(a, b, n) {
  // a : 빈병 갯수
  // b : 주는 콜라 갯수
  // n : 내가 갖고 있는 갯수
  var answer = 0;
  while (n >= a) {
    // 가져다 줄 수 있는 빈 병 수로 받을 수 있는 콜라 병 수 계산
    let newCola = Math.floor(n / a) * b;

    // 총 얻은 콜라 병 수에 더하기
    answer += newCola;

    // 남은 빈 병 수 업데이트 (새로 받은 콜라 병을 마시고 난 후의 빈 병 포함)
    n = newCola + (n % a);
  }
  return answer;
}
