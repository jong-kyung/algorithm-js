//* 주어진 자연수를 연속되는 자연수들의 합으로 표현할 수 있는 방법의 수는 주어진 자연수의 약수 중에서 홀수인 수의 개수와 같다.

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      answer++;
    }
  }
  return answer;
}

//! 효율성 테스트 실패
// function solution(n) {
//   let answer = 0;
//   for (let i = 0; i > 0; i--) {
//     let sum = 0;
//     for (let j = i; j > 0; j--) {
//       sum += j;
//       if (sum === n) {
//         answer++;
//         break;
//       } else if (sum > n) {
//         break;
//       }
//     }
//   }
//   return answer;
// }
