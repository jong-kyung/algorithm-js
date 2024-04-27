function solution(s) {
  return s.split("").every((element) => {
    return parseInt(element);
  });
}
