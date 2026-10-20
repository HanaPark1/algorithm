function solution(record) {
    const nick = new Map();
    const logs = [];

    for (const r of record) {
        const [cmd, id, name] = r.split(" ");

        if (cmd === "Enter" || cmd === "Change") {
            nick.set(id, name);
        }
        if (cmd === "Enter" || cmd === "Leave") {
            logs.push([cmd, id]);
        }
    }

    return logs.map(([cmd, id]) => {
        if (cmd === "Enter") {
            return `${nick.get(id)}님이 들어왔습니다.`
        } else if (cmd === "Leave") {
            return `${nick.get(id)}님이 나갔습니다.`
        }
    });
}