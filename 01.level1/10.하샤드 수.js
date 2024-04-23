function solution(x) {
  var answer = true;
  const sumOfDigits = Array.from(String(x)).reduce((acc, cur) => acc + Number(cur), 0);
  return x % sumOfDigits === 0 ? answer : !answer;
}
