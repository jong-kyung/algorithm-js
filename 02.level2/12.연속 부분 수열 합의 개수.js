function solution(elements) {
  let doubledArray = [...elements, ...elements];
  let numbers = new Set(); // 중복을 제외한 값들을 저장하기 위한 Set

  for (let len = 1; len <= elements.length; len++) {
    // 부분 수열의 길이
    for (let start = 0; start < elements.length; start++) {
      // 부분 수열의 시작 위치
      let sum = 0;
      for (let i = start; i < start + len; i++) {
        // 부분 수열의 합
        sum += doubledArray[i];
      }
      numbers.add(sum);
    }
  }

  return numbers.size;
}

// O(n^2) 풀이
function solution(elements) {
  const circular = elements.concat(elements); // 2배로 늘려준다
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}
