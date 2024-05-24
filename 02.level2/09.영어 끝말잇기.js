function solution(n, words) {
  let answer = [0, 0];
  let used = [words[0]];
  for (let i = 1; i < words.length; i++) {
    // 끝말잇기가 이어지지 않는 경우
    if (words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0) || used.indexOf(words[i]) !== -1) {
      answer = [(i % n) + 1, Math.floor(i / n) + 1];
      break;
    }
    // 끝말잇기가 이어지는 경우
    used.push(words[i]);
  }
  return answer;
}
