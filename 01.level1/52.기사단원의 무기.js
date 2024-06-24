function solution(number, limit, power) {
  // 자신의 번호의 약수의 갯수 -> 해당 갯수만큼의 공격력을 가진 무기
  // 제한수치가 있는 경우, 그 수치보다 클경우 협약기관에서 정한 무기
  // 공격력 1당 1kg의 철이 필요함.
  // 철의 무게를 구해야한다.
  // numbers : 기사단원의 수, limit: 제한수치, power: 초과시 정한 무기

  let weight = 0;
  for (let i = 1; i <= number; i++) {
    // 기사단원을 순회
    let getPower = 0;
    for (let j = 1; j <= i; j++) {
      // 약수 찾기
      if (i % j === 0) {
        getPower++;
      }
    }
    weight += getPower > limit ? power : getPower;
  }
  return weight;
}
