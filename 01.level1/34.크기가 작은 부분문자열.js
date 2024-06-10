function solution(t, p) {
  let numbers = [];

  // p의 길이만큼 잘라서 numbers 배열에 추가
  [...t].forEach((_, index) => {
    numbers[numbers.length] = [...t].slice(index, index + p.length).join("");
  });

  // p의 길이와 같은 숫자만 남기고, p보다 작거나 같은 숫자만 남긴다
  numbers = numbers
    .filter((number) => {
      return number.length === p.length;
    })
    .filter((number) => {
      return number <= p;
    });

  return numbers.length;
}

solution("500220839878", "7");
