module.exports = function reverse (n) {
    n = Math.abs(n)
  let newN = n.toString();
  let result = '';
  for (let i = 0; i < newN.length; i++) {
      result = newN[i] + result
  }
  n = result
  return n
}
