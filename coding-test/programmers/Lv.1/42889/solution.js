function solution(N, stages) {
    let stop_count = {}
    let answer = {}

    for (stage of stages) {
        stop_count[stage] = (stop_count[stage] || 0) + 1
    }

    let user = stages.length
    for (let i = 1; i <= N; i++) {
        let sc = stop_count[i] || 0;
        answer[i] = sc / user
        user = user - sc;
    }


    return Object.keys(answer).sort((a, b) => answer[b] - answer[a]).map(m => Number(m))

}