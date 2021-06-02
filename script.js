
   // Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

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


   
