var partition = function(s) {
  const resArr = []

  const n = s.length
  const f = Array.from({ length: n }, (_) => Array(n).fill(true))

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      f[i][j] = s[i] === s[j] && f[i + 1][j - 1]
    }
  }

  const ans = []
  dfs(0)

  return resArr

  function dfs(i) {
    if (i === n) {
      resArr.push(ans.slice())
      return
    }

    for (let j = i; j < n; ++j) {
      if (f[i][j]) {
        ans.push(s.slice(i, j + 1))
        dfs(j + 1)
        ans.pop()
      }
    }
  }
}
console.log(partition('aab'))
