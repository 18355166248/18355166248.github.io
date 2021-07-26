var zigzagLevelOrder = function(root) {
  if (!root) return [];
  const res = [];
  let direction = 1; // 1: 从左往右  2: 从右往左

  let rootArr = [root];
  while (rootArr.length) {
    const r = [],
      rootCopy = [];
    for (let i = 0; i < rootArr.length; i++) {
      const root = rootArr[i];
      direction === 1 ? r.push(root.val) : r.unshift(root.val);
      if (root.left) rootCopy.push(root.left);
      if (root.right) rootCopy.push(root.right);
    }
    res.push(r);
    rootArr = rootCopy;
    direction = direction === 1 ? 2 : 1;
  }

  return res;
};
console.log(
  zigzagLevelOrder({
    val: 3,
    left: {
      val: 9,
    },
    right: {
      val: 20,
      left: {
        val: 15,
      },
      right: {
        val: 7,
      },
    },
  })
);
// [[3], [20, 9], [15, 7]];
console.log(zigzagLevelOrder(null));
