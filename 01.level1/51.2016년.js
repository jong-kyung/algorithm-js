function solution(a, b) {
  var days = new Map([
    [0, "SUN"],
    [1, "MON"],
    [2, "TUE"],
    [3, "WED"],
    [4, "THU"],
    [5, "FRI"],
    [6, "SAT"],
  ]);
  const year = new Date(`2016-${a}-${b}`);
  return days.get(year.getDay());
}
