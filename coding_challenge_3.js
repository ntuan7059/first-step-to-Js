////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
 and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100.
 With this rule, a team only wins if it has a higher score than the other team,
  and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! 
So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

//data1
const dophinsScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 123) / 3;
/*
if(dophinsScore > koalasScore) {                   // I will use this again below
    console.log(`Dophins wins the trophy`)
} else if (dophinsScore = koalasScore) {
    console.log(`the result is draw`)
} else ( console.log (`Kolas team wins the trophy`)
);
*/


if(dophinsScore >= 100 && koalasScore >= 100 ) {
    if(dophinsScore > koalasScore) {                 /// this is the code from above
        console.log(`Dophins wins the trophy`)
    } else if (dophinsScore === koalasScore) {
        console.log(`the result is draw`)
    } else ( console.log (`Kolas team wins the trophy`))   /// this is the end of the code from above
}
else if (dophinsScore < 100 && koalasScore >= 100) {
    console.log (`Koalas wins the trophy`)
} else if (dophinsScore >= 100 && koalasScore < 100) { 
    console.log (`Dophins wins the trophy`)
} else { 
    console.log (`No one wins the trophy`)
};

//Data 2
const dophinsScore_2 = (97 + 112 + 101) / 3;
const koalasScore_2 = (109 + 95 + 106) / 3;

if(dophinsScore_2 >= 100 && koalasScore_2 >= 100 ) {
    if(dophinsScore_2 > koalasScore_2) {                 /// this is the code from above
        console.log(`Dophins wins the trophy`)
    } else if (dophinsScore_2 === koalasScore_2) {
        console.log(`the result is draw`)
    } else ( console.log (`Kolas team wins the trophy`))   /// this is the end of the code from above
}
else if (dophinsScore_2 < 100 && koalasScore_2 >= 100) {
    console.log (`Koalas wins the trophy`)
} else if (dophinsScore_2 >= 100 && koalasScore_2 < 100) { 
    console.log (`Dophins wins the trophy`)
} else { 
    console.log (`No one wins the trophy`)
};