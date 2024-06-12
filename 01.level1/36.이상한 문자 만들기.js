function solution(s) {
  return s
    .split(" ")
    .map((item) => {
      return [...item]
        .map((value, index) => {
          return index % 2 === 0 ? value.toUpperCase() : value.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}

solution("try hello world");
