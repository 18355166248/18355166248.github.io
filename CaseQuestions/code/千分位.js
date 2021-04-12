function numFormat(num) {
  const str = num.toString().replace(/\d+/, (n) => {
    // 提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
      console.log($1);
      return $1 + ",";
    });
  });

  return str;
}

var a = 1234567894532;
var b = 673439.4542;
console.log(numFormat(a)); // "1,234,567,894,532"
console.log(numFormat(b)); // "673,439.4542"
