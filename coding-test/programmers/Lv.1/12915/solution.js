function solution() {
    strings = ["sun", "bed", "car"]
    const n = 1;
    console.log(strings[0][n])
    
    return strings.sort((a,b)=>a[n].localeCompare(b[n]) || a.localeCompare(b))
}