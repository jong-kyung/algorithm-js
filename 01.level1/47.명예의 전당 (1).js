function solution(k, score) {
    var answer = [];
    let hall = [];

    score.forEach((singer, day) =>{
        if(day<=k-1) {
            hall[hall.length] = singer; // k일 전까지는 모든 사용자를 추가
        } else{
            let kUser = hall[0]
            if(singer > kUser){ // hall 의 k번째 사용자보다 점수가 높으면
                hall[hall.length] = singer; 
                hall.splice(hall.findIndex((element)=> element === kUser), 1)
            }
        }
        hall.sort((a,b)=>a-b);
        answer[answer.length] = hall.at(0)
    })
    
    return answer; // 최하위 점수
}