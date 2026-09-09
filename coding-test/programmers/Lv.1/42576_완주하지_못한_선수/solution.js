function solution(participant, completion) {
    var answer = '';
    let m = new Map();
    
    for (let i=0; i<participant.length; i++) {
        if(m.has(participant[i])) {
            m.set(participant[i],m.get(participant[i])+1);
        } else {
            m.set(participant[i],1);
        }
    }
    
    for (let i=0; i<completion.length; i++) {
        if(m.has(completion[i])) {
            m.set(completion[i],m.get(completion[i])-1);
        }
    }
    
    for (const [key, value] of m) {
    if (value > 0) {
        return key;
    }
}
}