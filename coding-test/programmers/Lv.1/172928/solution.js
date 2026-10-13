function solution(park, routes) {
    let [r, c] = [0, 0];

    const dir = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1],
    };

    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === "S") {
                r = i;
                c = j;
            }
        }
    }

    for (const route of routes) {
        const [d, num] = route.split(" ");
        const n = Number(num);

        let nr = r;
        let nc = c;
        let ok = true; 

        for (let i = 0; i < n; i++) {
            nr += dir[d][0];
            nc += dir[d][1];

            if (nr < 0 || nr >= park.length || nc < 0 || nc >= park[0].length || park[nr][nc] === "X") {
                ok = false;
                break;
            }
        }

        if (ok) {
            r = nr;
            c = nc;
        }
    }
    return [r, c];
}