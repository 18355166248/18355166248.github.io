var generate = function(numRows) {
  const resArr = []
  let index = 0
  while (index++ < numRows) {
    const res = []
    const prev = resArr[index - 2] || []
    for (let i = 0; i < index; i++) {
      const left = prev[i - 1] || 0
      const right = prev[i] || 0
      res.push(Math.max(1, left + right))
    }
    resArr.push(res)
  }

  return resArr
}
console.log(generate(5))
