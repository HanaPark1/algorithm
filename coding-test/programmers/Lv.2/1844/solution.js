function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dist = Array.from({ length: n }, () => Array(m).fill(-1));

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    // 1. 시작 칸 큐에 넣고 거리 설정 (시작 칸도 1칸으로 셈!)
    let queue = [[0, 0]];
    dist[0][0] = 1
    let head = 0

    while (head < queue.length) { // 2. while문으로 BFS
        const [r, c] = queue[head++]

        for (let i = 0; i < dr.length; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];

            if(nr >= 0 && nr < n && nc >= 0 && nc < m && maps[nr][nc] === 1 && dist[nr][nc] === -1) {
                dist[nr][nc] = dist[r][c] + 1
                queue.push([nr, nc])
            }
        }
    }

    return dist[n-1][m-1]
}
