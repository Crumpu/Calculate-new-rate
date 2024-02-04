'use strict'

function rate(winRate, loseRate) {
    const diffInRate = winRate - loseRate;
    if (diffInRate > 0 && diffInRate <= 2) {
        return winRate += 2;
    } else if (diffInRate > 2 && diffInRate <= 20) {
        return winRate += 1;
    } else {
        return winRate;
    }       
}
console.log(rate(5, 4));