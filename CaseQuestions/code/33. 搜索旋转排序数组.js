// 整数数组 nums 按升序排列，数组中的值 互不相同 。
// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
var search = function(nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.floor(end - start / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] >= nums[start]) {
      // 左侧是有序
      if (target >= nums[start] && target < nums[mid]) {
        // target在左侧
        end = mid - 1;
      } else {
        // target在右侧
        start = mid + 1;
      }
    } else {
      // 右侧是有序
      if (target > nums[mid] && target < nums[end]) {
        // target在右侧
        left = mid + 1;
      } else {
        // target在左侧
        end = mid - 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
