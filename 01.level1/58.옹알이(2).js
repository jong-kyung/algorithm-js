function solution(babbling) {
  const sounds = ["aya", "ye", "woo", "ma"];

  // 재귀 함수: 문자열 s가 발음할 수 있는지 확인
  function canPronounce(s, lastSound) {
    if (s === "") return true; // 문자열이 비었으면 발음 가능

    for (let sound of sounds) {
      if (s.startsWith(sound) && sound !== lastSound) {
        // 이전 발음과 같지 않으면, 나머지 문자열로 재귀 호출
        if (canPronounce(s.slice(sound.length), sound)) {
          return true;
        }
      }
    }
    return false;
  }

  let count = 0;
  for (let word of babbling) {
    if (canPronounce(word, "")) {
      count++;
    }
  }

  return count;
}
