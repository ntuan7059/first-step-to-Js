// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be
either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. 
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// DATA 1
const markWeights_1 = 78;
const markHigh_1 = 1.69;
const johnWeights_1 = 92;
const johnHigh_1 = 1.95;
let markBMI = markWeights_1 / markHigh_1 ** 2;
let johnBMI = johnWeights_1 / johnHigh_1 ** 2;
const markHigherBMI_1 = markBMI > johnBMI;
console.log(markHigherBMI_1);
//DATA 2
const markWeights_2 = 95;
const markHigh_2 = 1.88;
const johnWeights_2 = 85;
const johnHigh_2 = 1.76;
let markBMI_2 = markWeights_2 / markHigh_2 ** 2;
let johnBMI_2 = johnWeights_2 / johnHigh_2 ** 2;
const markHigherBMI_2 = markBMI_2 > johnBMI_2;
console.log(markHigherBMI_2);

//challenge 2
//Data 1
if(markHigherBMI_1) {
console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
} else{
console.log(`John's BMI ${johnBMI} is higher than Mark's ${johnBMI} !`)
};
//Data 2
if(markHigherBMI_2) {
    console.log(`Mark's BMI ${markBMI_2} is higher than John's ${johnBMI_2}`)
} else {
    console.log(`John's BMI ${johnBMI_2} is higher than Mark's ${johnBMI_2} !`)
}