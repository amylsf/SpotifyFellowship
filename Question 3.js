var changePossibilities = function(amount, denominations) {
  let possibilities = new Array(amount + 1).fill(0);
  possibilities[0] = 1;

  denominations.forEach((coin) => {
    for (let i = coin; i <= amount; i++) {
      let change = i - coin;
      possibilities[i] += possibilities[change];
    }
  })
  return possibilities[amount];
}



// Recursive Solution

// var changePossibilities = function(amount, denominations) {
//   let count = 0;
//   let getPossibilities = function(sum, idx) {
//     if (sum === amount) {
//       count++;
//     }
//     if (sum < amount) {
//       for (let i = idx; i < denominations.length; i++) {
//         getPossibilities(sum + denominations[i], i)
//       }
//     }
//   }
//   getPossibilities(0, 0)
//   return count;
// }