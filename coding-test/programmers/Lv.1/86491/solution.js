function solution(sizes) {
    var answer = 0;
    let width = 0;
    let height = 0;
    for ([w,h] of sizes) {
        const bigger = Math.max(w,h);
        const smaller = Math.min(w,h);
        if (bigger > width) {
            width = bigger;
        }
        if (smaller > height) {
            height = smaller;
        }
    }
    return width*height;
}