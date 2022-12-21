// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    const profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}

// Time: O(n)
// Space: O(1)

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// Bought on day 2, and sold on day 5, 6-1 = 5
