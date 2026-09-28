function solution(board, moves) {
    let answer = 0;
    let count = [];
    for (move of moves) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][move - 1] !== 0) {
                if (count[count.length - 1] === board[i][move - 1]) {
                    count.pop()
                    answer += 2;
                } else {
                    count.push(board[i][move - 1]);
                }
                board[i][move - 1] = 0;
                break
            }
        }
    }
    return answer
}