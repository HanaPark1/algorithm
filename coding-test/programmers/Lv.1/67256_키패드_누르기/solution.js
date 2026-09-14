function solution(numbers, hand) {
    const keys = ["1","2","3","4","5","6","7","8","9","*","0","#"]
    let answer = "";

    function getCoord(key) {
        const idx = keys.indexOf(key);
        return [Math.floor(idx / 3), idx % 3];
    }
    
    const m = new Map(keys.map(key=>[key,getCoord(key)]));
    
    let left_coord = m.get("*");
    let right_coord = m.get("#");
    
    function getDistance(coord1, coord2) {
        return Math.abs(coord1[0]-coord2[0]) + Math.abs(coord1[1]-coord2[1])
    }
    
    function setLeft(coord) {
        left_coord = coord;
        answer += "L";
    }
    
    function setRight(coord) {
        right_coord = coord;
        answer += "R";
    }
    
    for (number of numbers) {
        const n = m.get(String(number));
        if (n[1] === 0) {
            setLeft(n);
        } else if (n[1] === 2) {
            setRight(n);
        } else {
            const l = getDistance(left_coord, n);
            const r = getDistance(right_coord, n);
            if(l<r) {
                setLeft(n);
            } else if (l>r) {
                setRight(n);
            } else {
                if (hand === "left") {
                    setLeft(n);
                } else {
                    setRight(n);
                }
            }
        }
        
        
    }
    
    return answer
}