function solution(dirs) {
    const dir = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0],
    };
    const s = new Set();
    let x = 0, y = 0;

    for (const d of dirs) {
        // 좌표 계산
        const nx = x + dir[d][0];
        const ny = y + dir[d][1];

        // 범위 밖이면 무시 (-5 ~ 5)
        if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;

        // 3. 양방향 길 2개 Set.add
        const road = `${x},${y},${nx},${ny}`;
        const road_reverse = `${nx},${ny},${x},${y}`;
        s.add(road);
        s.add(road_reverse);

        // 4. 위치 업데이트
        x = nx;
        y = ny;
    }

    return s.size / 2;
}