function solution(s) {
  // 처음나오면 -1
  // 또 나오면 이전에 나온거로부터 얼마나 떨어져있는지
  var answer = [];
  let charList = [];
  [...s].forEach((char, idx) => {
    if (!charList.includes(char)) {
      answer[answer.length] = -1;
    } else {
      answer[answer.length] = idx - charList.lastIndexOf(char);
    }
    charList.push(char);
  });
  return answer;
}
