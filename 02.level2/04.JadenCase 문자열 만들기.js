function solution(s) {
  let word = s.split(" ");
  return word
    .map((a) => {
      return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    })
    .join(" ");
}
