function solution(seoul) {
  var answer = "";
  const indexOfKim = seoul.findIndex((element) => element === "Kim");
  answer = `김서방은 ${indexOfKim}에 있다`;
  return answer;
}
