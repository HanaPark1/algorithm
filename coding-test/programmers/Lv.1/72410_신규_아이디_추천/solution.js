function solution(new_id) {
    var answer = '';
    let id = new_id.toLowerCase(); // 1단계 소문자 변환
    id = id.replace(/[^a-z0-9\-\_\.]/g,''); // 2단계 허용 문자 외 제거
    id = id.replace(/[.]{2,}/g,'.'); // 3단계 . 두개 이상 시 하나로 치환
    id = id.replace(/^[.]/,''); // 4단계 .으로 시작 시 제거
    id = id.replace(/[.]$/,''); // 4단계 .으로 종결 시 제거
    if (id.length === 0) {
        id = "a"; // 5단계 빈 문자열일 경우 a 추가
    } else if (id.length >= 16) {
        id = id.slice(0,15); // 6단계 16자 이상 시 절삭
        if (id[14] === '.') {
            id = id.replace(/[.]$/,''); // 4단계 처리
        }
    }
    while (id.length < 3) {
        id += id[id.length - 1]; // 7단계 2자 이하일 경우 마지막문자 반복
    }
    
    return id;
}