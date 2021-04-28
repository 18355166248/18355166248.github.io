var isPalindrome = function(x) {
  if (x < 0) return false;
  flag = true;

  const str = x + "";

  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] !== str[str.length - 1 - i]) {
      flag = false;
      break;
    }
  }

  return flag;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(10101));
