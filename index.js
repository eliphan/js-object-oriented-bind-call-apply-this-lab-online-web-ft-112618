//Your code here
function justInvoke(fn) {
  return justInvoke.call(fn)
}