function solution(array, commands) {
  var answer = [];
  let copy = [...array];
  commands.map((command) => {
    let temp = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    answer[answer.length] = temp[command[2] - 1];
  });
  return answer;
}
