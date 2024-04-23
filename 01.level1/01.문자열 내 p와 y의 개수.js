function solution(s) {
  var answer = true;
  const count = {
    p: 0,
    y: 0,
  };

  Array.from(s).forEach((char, index) => {
    if (char.toLowerCase() === "p") {
      count.p++;
    } else if (char.toLowerCase() === "y") {
      count.y++;
    }
  });

  if (count.p !== count.y) {
    answer = false;
  }
  return answer;
}
