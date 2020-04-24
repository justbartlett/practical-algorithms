// Write a function, makeChange, that returns an integer that represents the least number of coins
// that add up to an amount where the amount is always divisible by 5.

// coin values: 5, 10, 25

// input amount: 40, output # of coins: 3 (25, 10, 5)
// input amount: 35, output # of coins: 2 (25, 10)


const makeChange = (coins, amount) => {
  coins.sort((a, b) => b-a);
  let coinTotal = 0;
  let i =0;
  while(amount > 0) {
    if (coins[i] <= amount) {
      amount -=-coins[i];
      coinTotal++;
    } else {
      i++;
    }
  }
  return coinTotal;
};

makeChange([5, 10, 25], 50);




// my solution

// function makeChange(amount) {
//   let quarters = 0;
//   let dimes = 0;
//   let fives = 0;

//   quarters = Math.floor(amount / 25);
//   amount = amount - (25 * quarters);
//   dimes = Math.floor(amount / 10);
//   amount = amount - (10 * dimes);
//   fives = Math.floor(amount/5);
//   amount = amount - (5 * fives);
//   console.log(quarters, dimes, fives)
// }

// makeChange(1110);


