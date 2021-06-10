///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'),
 and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/*`use strict`
 const dolphinsScore = (44 + 23 + 71) / 3;
const koalasScore = (65 + 54 + 49) / 3;
if (dolphinsScore > (koalasScore * 2)) {
    console.log(`dolphins win`)
} else if(dolphinsScore < (koalasScore * 2)) {
    console.log(`koalas win`)
} else (`no team win`);


/*function calcAverage(score1, score2, score3) {
    const teamScore = (score1 + score2 + score3 ) / 3;
     return teamScore 
};
   const dolphinsAverage = calcAverage(44, 23, 71);
   console.log(dolphinsAverage);
  */ 
/*const teamAverage = (score1, score2, score3, teamName) => {
    const bigScore = (score1 + score2 + score3) / 3;
  const annoucement = (`${teamName}'s score is ${bigScore}`)
  return annoucement
};
const iDontKnow = teamAverage(44, 23, 71, `Dophin`); 
  console.log(iDontKnow);

  function averageForBoth(score1, score2, score3, score4, score5, score6) {jloiol2323\
      const dolphinsScore = (score1 + score2 + score3) / 3;
      const koalasScore = (score4 + score5 + score6) / 3;
      return `Dophins 's average score is ${dolphinsScore} and Koalas 's average score is ${koalasScore}`;
  };



  
console.log(averageForBoth(44, 23, 71, 65, 54, 49))
*/
function checkWinner(avgDolhins, avgKoalas) {
      if(avgDolhins > avgKoalas * 2) {
      const result = `Dophins wins (${avgDolhins} vs ${avgKoalas})`
      return result;
    } else if (avgKoalas > avgDolhins *2) {
      const result = `Koalas wins (${avgKoalas} vs ${avgDolhins})`
      return result};
    const result = `no teams win`;
    return result;
    };
  
console.log(checkWinner(100, 25));