function solution(s) {
  let arr = s.split("");
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let stack = [];

    if (i !== 0) arr.push(arr.shift()); // 배열의 첫 번째 요소를 빼서 배열의 마지막에 추가

    for (let j = 0; j < s.length; j++) {
      if (stack[stack.length - 1] === "[" && arr[j] === "]") {
        stack.pop();
      } else if (stack[stack.length - 1] === "{" && arr[j] === "}") {
        stack.pop();
      } else if (stack[stack.length - 1] === "(" && arr[j] === ")") {
        stack.pop();
      } else {
        stack.push(arr[j]);
      }
    }

    if (!stack.length) {
      answer++;
    }
  }
  return answer;
}

solution("[](){}");
