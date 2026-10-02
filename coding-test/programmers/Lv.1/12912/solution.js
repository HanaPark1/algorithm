function solution(a, b) {
    const arr = []
    arr.push(a);
    while (a !== b) {
        if (a < b) {
            arr.push(a + 1);
            a++;
        } else {
            arr.push(a - 1);
            a--
        }
    }
    return arr.reduce((acc, cur) => {
        return acc + cur
    }, 0)
}