function solution(numbers) {
    numbers = numbers.map(String);

    numbers.sort((a, b) => {
        return (b + a) - (a + b);
    });

    const answer = numbers.join('');

    return answer[0] === '0' ? '0' : answer;
}