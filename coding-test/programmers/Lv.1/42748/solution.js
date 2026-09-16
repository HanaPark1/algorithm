function solution(array, commands) {
    var answer = [];
    for (command of commands) {
        const i = command[0] - 1;
        const j = command[1];
        const k = command[2] - 1;
        let a = array.slice(i, j).sort((a, b) => a - b);
        answer.push(a[k]);
    }

    return answer;
}