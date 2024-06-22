function solution(nums) {
  let canGet = nums.length / 2; // 가져갈 수 있는 폰켓몬 수
  let ponketmon = new Set([...nums]); // 중복을 제거한 폰켓몬 수
  return ponketmon.size >= canGet ? canGet : ponketmon.size;
}
