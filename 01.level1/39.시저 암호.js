function solution(s, n) {
  let answer = s
    .split("")
    .map((char) => {
      if (char === " ") {
        return " ";
      }

      const charCode = char.charCodeAt(); // char의 아스키 코드
      let baseCode;

      if (char >= "a" && char <= "z") {
        baseCode = "a".charCodeAt();
      } else if (char >= "A" && char <= "Z") {
        baseCode = "A".charCodeAt();
      }

      return String.fromCharCode(baseCode + ((charCode - baseCode + n) % 26)); // 알파벳이 26개이므로 나머지 연산을 통해 알파벳 순환
    })
    .join("");

  return answer;
}
