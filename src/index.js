'use strict';
/**
 * The function calculates the athlete’s rating after a meeting with an opponent based on the following parameters:
1. If the winner's rating is greater than or equal to the loser's rating:
1.1 If the difference is from 0 to 2 inclusive, then 2 is added to the winner’s rating.
1.2 If the difference is from 2 to 20, then 1 is added to the winner’s rating.
1.3 If the difference is 20 or more, then nothing is added to the winner’s rating.

2. If the winner's rating is less than that of the loser, then the winner's rating is calculated using the formula ((loser's rating - winner's rating + 5) / 3).

3. If the winner’s rating before the match was 0, then after the victory the winner’s rating will be equal to the loser’s rating.
 * @param {Number} winRate - winner rating before the meeting.
 * @param {Number} loseRate - rating of the loser before the meeting.
 * @returns new winner rating after the meeting.
 */
function rate(winRate, loseRate) {
  const diffInRate = winRate - loseRate;
  if (Number.isNaN(diffInRate)) {
    return 'Enter number, please!';
  }
  if (typeof winRate !== 'number') {
    return 'Incorrect winRate value, enter number, please!';
  }
  if (typeof loseRate !== 'number') {
    return 'Incorrect loseRate value, enter number, please!';
  }
  if (winRate < 0 || loseRate < 0) {
    return 'Rating cannot be less than 0';
  }
  if (winRate === 0) {
    return (winRate = loseRate);
  }
  if (winRate < loseRate) {
    const newWinRate = winRate + (loseRate - winRate + 5) / 3;
    return newWinRate.toFixed(2);
  }
  if (winRate >= loseRate) {
    if (diffInRate >= 0 && diffInRate <= 2) {
      return (winRate += 2);
    } else if (diffInRate > 2 && diffInRate < 20) {
      return (winRate += 1);
    } else diffInRate >= 20;
    return winRate;
  }
}

console.log(rate(6, 2));

//
// switch (diffInRate) {
//     case Number.isNaN(diffInRate):
//       console.log('Enter number, please!');
//       break;
//     case winRate < 0 || loseRate < 0:
//       console.log('Rating cannot be less than 0');
//       break;
//     case diffInRate >= 0 && diffInRate <= 2:
//       winRate += 2;
//       break;
//     case diffInRate > 2 && diffInRate < 20:
//       winRate += 1;
//       break;
//     case diffInRate >= 20:
//       winRate;
//       break;
//     default:
//       console.log('seg');
