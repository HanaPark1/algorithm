function solution(s){
    var answer = true;
    
    let m = new Map();
    for (i of s) {
        let c = i.toUpperCase();
        if (m.has(c)) {
            m.set(c,m.get(c)+1);
        } else {
            m.set(c,1);
        }
        
        if (m.get("P") === m.get("Y")) {
            answer = true;
        } else {
            answer = false;
        }
        
    }

    return answer;
}