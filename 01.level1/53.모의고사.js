function solution(answers) {
  // 1번 : 1 2 3 4 5
  // 2번 : 2 1 2 3 2 4 2 5
  // 3번 : 3 3 1 1 2 2 4 4 5 5
  // 가장 많이 답을 맞춘사람?
  let person1 = [1, 2, 3, 4, 5];
  let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let scores = [0, 0, 0];

  answers.forEach((num, idx) => {
    if (num === person1[idx % person1.length]) {
      scores[0]++;
    }
    if (num === person2[idx % person2.length]) {
      scores[1]++;
    }
    if (num === person3[idx % person3.length]) {
      scores[2]++;
    }
  });

  return scores.reduce((acc, cur, idx) => {
    if (Math.max(...scores) === cur) {
      acc[acc.length] = idx + 1;
    }
    return acc;
  }, []);
}
