///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300,
 and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above 
(you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function!
 So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
const bill = [125, 555, 44];
function calcTip (billValue) {
    if(billValue >=50 && billValue <= 300) {
       const tip = 0.15*billValue
    return tip;}
       else { const tip = 0.2*billValue
    return tip;};
    };   

calcTip(100);
const result = calcTip(100);
console.log(result);
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [calcTip(bill[0]) + bill[0], calcTip(bill[1]) + bill[1], calcTip(bill[2]) + bill[2]];
console.log(total);
