function solution(arr) {
  let answer = [];
  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    if (queue[queue.length - 1] === arr[i]) {
      // 큐의 마지막 요소와 현재 요소가 같으면 제거한다
      queue.unshift();
    } else {
      // 큐의 마지막 요소와 현재 요소가 다르면 스택에 추가한다
      queue[queue.length] = arr[i];
      answer[answer.length] = arr[i];
    }
  }
  return answer;
}

solution([4, 4, 4, 3, 3]);
