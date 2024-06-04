function solution(people, limit) {
  let answer = 0;
  let sortedPeople = people.sort((a, b) => a - b);
  while (sortedPeople.length > 0) {
    if (sortedPeople[0] + sortedPeople[sortedPeople.length - 1] <= limit) {
      // 가장 무거운 사람과 가장 가벼운 사람이 같이 탈 수 있는 경우
      sortedPeople.shift();
      sortedPeople.pop();
    } else {
      // 가장 무거운 사람만 탈 수 있는 경우
      sortedPeople.pop();
    }
    answer++;
  }
  return answer;
}

solution([70, 80, 50], 100); // 3
