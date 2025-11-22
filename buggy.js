'use strict'

// Demonstrates a classic timing issue in asynchronous code:
// using `var` inside a loop with `setTimeout` captures the same binding.
// By the time callbacks execute, the loop has finished and `i` equals 5.
console.log('buggy.js: 演示 var 在异步循环中的问题')

// Function-scoped `var` leads all callbacks to read the final value (5)
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    // All callbacks print 5 because they reference the same `i`
    console.log('var i:', i)
  }, i * 10)
}

// Expected 0..4, but due to `var` scoping and async timing, all outputs are 5
console.log('预期应输出 0~4，但实际都会是 5')