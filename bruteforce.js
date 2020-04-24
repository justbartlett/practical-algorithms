// brute force approach: calculate every single possibility and pick the best

const coins = [10, 6, 1];

const makeChange = (value) => {
  if (value === 0)  return 0;     // base case, if value is 0 end
  let minCoins;
  coins.forEach((coin) => { 
    if (value - coin >=0) { 
      let currMinCoins = makeChange(value - coin);
      if(minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
}

makeChange(113);