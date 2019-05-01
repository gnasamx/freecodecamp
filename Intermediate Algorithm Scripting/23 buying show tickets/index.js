function waitingTime(tickets, p) {
    // Write your code here
    let time = tickets[p]
    let first = tickets.slice(0,p)
    let second = tickets.slice(p+1,tickets.length)
    console.log(first,second)

    for (let i of first) {
        console.log('i:',i)
        if (i < tickets[p]) {
            time += i
        } else {
            time += tickets[p]
        }
    }

    for (let j of second) {
        console.log('j;',j)
        if (j < tickets[p]) {
            time +=j
        } else {
            time += tickets[p] - 1
        }
    }

    return time;
}

waitingTime([2,6,3,4,5], 2)