//* 정답률: 44%

function solution(today, terms, privacies) {
  var answer = [];
  const current = new Date(today);

  // {약관 : 유효기간} 객체 생성
  const termObj = terms.reduce((acc, cur) => {
    const [term, month] = cur.split(" ");
    acc[term] = Number(month);
    return acc;
  }, {});

  // 유효기간 계산
  const endDate = privacies.map((element, index) => {
    const term = element.split(" ")[1];
    const privacy = element
      .split(" ")[0]
      .split(".")
      .map((element) => Number(element));

    privacy[1] += termObj[term];
    while (privacy[1] > 12) {
      privacy[0]++;
      privacy[1] -= 12;
    }

    return privacy.join(".");
  });

  // 유효기간이 지난 약관 찾기
  endDate.forEach((element, index) => {
    const termDate = new Date(element);
    if (termDate <= current) {
      answer[answer.length] = index + 1;
    }
  });
  return answer.sort((a, b) => a - b);
}
