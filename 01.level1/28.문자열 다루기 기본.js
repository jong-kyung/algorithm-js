function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((element) => {
      return Number.isInteger(Number(element));
    });
  } else {
    return false;
  }
}
