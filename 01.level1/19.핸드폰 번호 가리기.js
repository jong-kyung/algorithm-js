function solution(phone_number) {
  const answer = Array.from(phone_number)
    .map((element, index) => {
      return index < phone_number.length - 4 ? "*" : element;
    })
    .join("");
  return answer;
}
