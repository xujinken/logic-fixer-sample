![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Demo-yellow)


## 🟢 logic-fixer-sample — Debugging Example

### 📘 Description

Example of identifying and fixing issues in async code.

### 🚀 Features

- Shows difference between `var` and `let` in loops
- Explains timing issues in asynchronous code
- Quick and educational

### ⚙️ Tech Stack

Node.js (Vanilla JS)

### ▶️ Run Locally

```bash
git clone https://github.com/<yourusername>/logic-fixer-sample.git
cd logic-fixer-sample
node buggy.js
node fixed.js
```

### 📂 Project Structure

```
logic-fixer-sample/
├─ buggy.js
└─ fixed.js
```

### 📺 Output Comparison

| buggy.js | fixed.js |
|---|---|
| `var i: 5`<br>`var i: 5`<br>`var i: 5`<br>`var i: 5`<br>`var i: 5` | `let i: 0`<br>`let i: 1`<br>`let i: 2`<br>`let i: 3`<br>`let i: 4` |

### Simple Node.js demo for Fiverr automation and data handling.
