const prices = [
  ['K', 1e3],
  ['M', 1e6],
  ['B', 1e9],
];

export const formatPrice = (price, currency) => {

  if (!price) {
    return `${currency}0`;
  }

  let res = ['', price];

  for (let i = 0; i < prices.length; i++) {
    const [abbr, divider] = prices[i];
    if (price >= divider) {
      res = [abbr, Math.floor(price / divider)];
    } else {
      break;
    }
  }
  
  return `${currency}${res.reverse().join('')}`;
}