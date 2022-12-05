// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height, maxVal = 0, arrow) {
  let maxIndex = 0;
  let max = height[maxIndex];
  for (let i = 1; i < height.length; i++) {
    if (height[i] > max) {
      max = height[i];
      maxIndex = i;
    }
  }
  if (maxVal) {
  }
  console.log(max, maxIndex);
  trap(height.slice(0, maxIndex), max, "left");
  trap(height.slice(maxIndex + 1), max, "right");
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([[4, 2, 0, 3, 2, 5]])); // 9
