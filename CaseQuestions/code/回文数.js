function isLoop(num) {
  for (let left = 0, right = num.length - 1; left < right; left++, right--) {
    if (num[left] !== num[right]) return false;
  }

  return true;
}

console.log(isLoop("12321"));
console.log(isLoop("123211"));
