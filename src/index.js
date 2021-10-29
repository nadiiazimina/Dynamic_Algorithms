const cahce = {};
const coins = [10, 6, 1];

const makeChange = (c) => {
  //Return the value if it's in thw cache
  if (cache[c]) return cache[c];

  let minCoins = -1;

  //Find the best coin
  coins.forEach((coin) => {
    if (c - coin >= 0) {
      let curMinCoins = makeChange(c - coin);
      if (minCoins === -1 || curMinCoins < minCoins) {
        minCoins = curMinCoins;
      }
    }
  });

  //Save the value into the cache
  cahce[c] = minCoins + 1;
  return cache[c];
};
