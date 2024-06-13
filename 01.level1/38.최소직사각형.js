function solution(sizes) {
  let numbers = [];
  let minList = [];

  sizes.forEach((size) => {
    [one, two] = size;
    const min = Math.min(one, two);
    minList.push(min); // 최소값을 구해서 minList에 넣어준다.
    numbers.push(...size); // sizes 배열을 펼쳐서 numbers 배열에 넣어준다.
  });

  const max = Math.max(...numbers);
  const min = Math.max(...minList);
  return max * min;
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
