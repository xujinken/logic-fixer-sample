'use strict'

// Two correct patterns to fix the async loop timing issue:
// 1) Use block-scoped `let` to create a fresh binding each iteration.
// 2) Use an IIFE/closure to capture the current value explicitly.
console.log('fixed.js: 使用 let 或闭包正确捕获索引')

console.log('方案一：let')
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    // `let` creates a new `i` for each iteration, so outputs 0..4
    console.log('let i:', i)
  }, i * 10)
}

console.log('方案二：闭包')
for (var j = 0; j < 5; j++) {
  ((x) => {
    // IIFE captures `j` as `x` at call time, preserving 0..4 in callbacks
    setTimeout(() => {
      console.log('closure x:', x)
    }, x * 10)
  })(j)
}