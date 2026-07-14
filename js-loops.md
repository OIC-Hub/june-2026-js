# JavaScript Loops — The Easy Guide

---

## What is a Loop?

A loop means: **do the same thing over and over** until you say stop.

### Real Life Example 
Imagine you are washing plates after a party.

> Pick up plate → wash it → put it down. Pick up plate → wash it → put it down...

You keep doing the same steps until there are no more plates.

That is a loop.

In JavaScript, instead of writing the same code 10 times, you write it **once** and tell it how many times to run.

```js
// ❌ Without a loop — repeating yourself
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

// ✅ With a loop — say it once
for (let i = 0; i < 5; i++) {
  console.log("Hello");
}
```

Both do the exact same thing. The loop is cleaner.

---

## 1. The `for` Loop

The most common loop. Use it when you **know exactly how many times** you want to repeat.

### Syntax

```js
for (start; condition; step) {
  // code to repeat
}
```

### Breaking it down

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

| Part | What it means |
|---|---|
| `let i = 0` | Start counting from 0 |
| `i < 5` | Keep going as long as i is less than 5 |
| `i++` | After each loop, add 1 to i |

### What happens step by step

```
i = 0 → 0 < 5 ✅ → print 0 → i becomes 1
i = 1 → 1 < 5 ✅ → print 1 → i becomes 2
i = 2 → 2 < 5 ✅ → print 2 → i becomes 3
i = 3 → 3 < 5 ✅ → print 3 → i becomes 4
i = 4 → 4 < 5 ✅ → print 4 → i becomes 5
i = 5 → 5 < 5 ❌ → STOP
```

Output:
```
0
1
2
3
4
```

### Simple Examples

```js
// Count from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Count down from 5 to 1
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Count in twos — 0, 2, 4, 6, 8
for (let i = 0; i <= 8; i += 2) {
  console.log(i);
}
```

---

## 2. Looping Through an Array

This is the most useful thing you will do with loops — going through a list of items one by one.

```js
const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Output:
```
Apple
Banana
Mango
Orange
```

### How it works

```
fruits.length = 4

i = 0 → fruits[0] = "Apple"
i = 1 → fruits[1] = "Banana"
i = 2 → fruits[2] = "Mango"
i = 3 → fruits[3] = "Orange"
i = 4 → STOP (4 is not less than 4)
```

### Real Example — Print Student Names

```js
const students = ["Ada", "Grace", "Alan", "Linus"];

for (let i = 0; i < students.length; i++) {
  console.log("Student " + (i + 1) + ": " + students[i]);
}

// Output:
// Student 1: Ada
// Student 2: Grace
// Student 3: Alan
// Student 4: Linus
```

---

## 3. The `for...of` Loop — Simpler Array Looping

`for...of` is a cleaner way to loop through arrays when you don't need the index number.

```js
const fruits = ["Apple", "Banana", "Mango"];

// for loop (old way)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of (cleaner way)
for (let fruit of fruits) {
  console.log(fruit);
}
```

Both print the same thing — `for...of` is just easier to read and write.

### More Examples

```js
const prices = [500, 1200, 800, 3000];

for (let price of prices) {
  console.log("Price: ₦" + price);
}

// Output:
// Price: ₦500
// Price: ₦1200
// Price: ₦800
// Price: ₦3000
```

```js
const students = ["Ada", "Grace", "Alan"];

for (let student of students) {
  console.log("Welcome, " + student + "!");
}

// Output:
// Welcome, Ada!
// Welcome, Grace!
// Welcome, Alan!
```

---

## 4. The `while` Loop

The `while` loop keeps running **as long as a condition is true**. Use it when you don't know exactly how many times to loop.

### Syntax

```js
while (condition) {
  // code to repeat
}
```

### Simple Example

```js
let count = 1;

while (count <= 5) {
  console.log(count);
  count++; // ← very important! without this it runs forever
}

// Output:
// 1
// 2
// 3
// 4
// 5
```

### Real Life Analogy 🎮
Think of it like a video game:

> **While** the player has lives left → keep playing the game

```js
let lives = 3;

while (lives > 0) {
  console.log("Playing... lives left: " + lives);
  lives--; // lose a life
}

console.log("Game over!");

// Output:
// Playing... lives left: 3
// Playing... lives left: 2
// Playing... lives left: 1
// Game over!
```

### ⚠️ Warning — Infinite Loop

If your condition never becomes false, the loop runs forever and freezes your program:

```js
// ❌ This runs forever — never do this
while (true) {
  console.log("help!");
  // forgot to update the condition!
}

// ✅ Always make sure the condition can become false
let i = 0;
while (i < 5) {
  console.log(i);
  i++; // ← this makes it stop eventually
}
```

---
# 6. The `do...while` Loop — Run First, Check Later

The `do...while` loop is similar to the `while` loop — but with one big difference:

> **`while`** checks the condition **before** running the code.
> **`do...while`** runs the code **first**, then checks the condition.

This means a `do...while` loop **always runs at least once** — even if the condition is false from the start.

### Syntax

```js
do {
  // code to run
} while (condition);
```

### Simple Example

```js
let count = 1;

do {
  console.log(count);
  count++;
} while (count <= 5);




## 5. The `forEach` Method — Loop for Arrays

`forEach` is a built-in array method that loops through every item. It's very common in modern JavaScript and React.

### Syntax

```js
array.forEach(function(item) {
  // code to run for each item
});
```

### Simple Example

```js
const names = ["Ada", "Grace", "Alan"];

names.forEach(function(name) {
  console.log("Hello, " + name);
});

// Output:
// Hello, Ada
// Hello, Grace
// Hello, Alan
```

### Arrow Function Version (Cleaner)

```js
const names = ["Ada", "Grace", "Alan"];

names.forEach(name => {
  console.log("Hello, " + name);
});
```

### With Index (Position Number)

`forEach` also gives you the index (position) of each item as a second argument:

```js
const names = ["Ada", "Grace", "Alan"];

names.forEach((name, index) => {
  console.log(index + 1 + ". " + name);
});

// Output:
// 1. Ada
// 2. Grace
// 3. Alan
```

---

## 6. The `for...in` Loop — Looping Through Objects

`for...in` is used to loop through the **keys** of an object.

```js
const person = {
  name: "Ada",
  age: 25,
  city: "Lagos"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Output:
// name: Ada
// age: 25
// city: Lagos
```

Think of `key` as the label on a box, and `person[key]` as what's inside the box.

---

## 7. `break` and `continue` — Controlling Loops

### `break` — Stop the Loop Early

```js
// Stop when we find "Mango"
const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits) {
  if (fruit === "Mango") {
    console.log("Found it! Stopping.");
    break; // ← exits the loop immediately
  }
  console.log(fruit);
}

// Output:
// Apple
// Banana
// Found it! Stopping.
```

### `continue` — Skip One Item and Keep Going

```js
// Print everything EXCEPT "Banana"
const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits) {
  if (fruit === "Banana") {
    continue; // ← skip this one, go to the next
  }
  console.log(fruit);
}

// Output:
// Apple
// Mango
// Orange
```

---

## 8. Which Loop Should You Use?

| Situation | Best Loop |
|---|---|
| You know exactly how many times | `for` |
| Looping through an array (need index) | `for` |
| Looping through an array (no index needed) | `for...of` or `forEach` |
| Looping through an object | `for...in` |
| You don't know how many times yet | `while` |

---

## 9. Real World Examples

### Add Up All Numbers in an Array

```js
const prices = [500, 1200, 800, 3000];
let total = 0;

for (let price of prices) {
  total = total + price;
}

console.log("Total: ₦" + total); // Total: ₦5500
```

### Find a User by Name

```js
const users = ["Ada", "Grace", "Alan", "Linus"];
let found = false;

for (let user of users) {
  if (user === "Alan") {
    found = true;
    break;
  }
}

console.log(found ? "User found!" : "User not found");
```

### Print Only Passing Scores

```js
const scores = [45, 72, 38, 89, 55, 61];

for (let score of scores) {
  if (score >= 50) {
    console.log(score + " ✅ Pass");
  } else {
    console.log(score + " ❌ Fail");
  }
}

// Output:
// 45 ❌ Fail
// 72 ✅ Pass
// 38 ❌ Fail
// 89 ✅ Pass
// 55 ✅ Pass
// 61 ✅ Pass
```

---

## ✅ Checklist
- [ ] Can explain what a loop is in simple words
- [ ] Can write a `for` loop and explain all 3 parts
- [ ] Can loop through an array using `for` and `for...of`
- [ ] Know when to use `while`
- [ ] Can use `forEach` on an array
- [ ] Know the difference between `for...in` and `for...of`
- [ ] Can use `break` and `continue`

## 💡 Practice Exercises

1. Write a `for` loop that prints the numbers 1 to 20.
2. Create an array of 5 food items. Use `for...of` to print each one.
3. Create an array of numbers. Use a loop to add them all together and print the total.
4. Loop through an array of names. If the name is "Grace", print "Found Grace!" and stop the loop.
5. **Bonus:** Create an array of numbers 1 to 10. Loop through and print only the even numbers. Hint: a number is even if `number % 2 === 0`.





Assignment: ATM PIN Verification System

Write a JavaScript program that simulates an ATM login process.

Requirements
A user must enter their PIN.
The correct PIN is 1234.
If the user enters the correct PIN, display:
Access granted! ✅
If the PIN is incorrect, allow the user to try again.
The user should have a maximum of 3 attempts.
After each incorrect attempt, display:
Wrong PIN. Try again.
If the user fails all 3 attempts, display:
Too many failed attempts. Account locked. ❌