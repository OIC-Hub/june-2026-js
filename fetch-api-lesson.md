# The Fetch API — Getting Data from the Internet

---

## 1. What is the Fetch API?

The **Fetch API** is a built-in JavaScript tool that lets you **send and receive data over the internet** — without reloading the page.

Before Fetch existed, getting data from a server was complicated and messy. Fetch made it clean and simple.

### Real Life Analogy 📱
Think of Fetch like **ordering food on your phone**:

> You open the app (your code)
> You place an order (send a request)
> The restaurant prepares it (server processes it)
> The delivery guy brings your food (server sends back data)
> You eat it (you use the data in your app)

You do not go to the restaurant yourself. You send a request and **wait** for a response.

---

## 2. What is an API?

Before we fetch anything, let's understand what we are fetching from.

An **API** (Application Programming Interface) is like a **waiter at a restaurant**. You do not go into the kitchen yourself — you tell the waiter what you want, and they bring it to you.

```
You (your code) → ask the API → API goes to the database → brings back data
```

APIs send data back as **JSON** — which looks exactly like a JavaScript object:

```json
{
  "id": 1,
  "name": "Ada Lovelace",
  "email": "ada@example.com"
}
```

---

## 3. Your First Fetch

Here is the simplest possible fetch request:

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => console.log(data));
```

Run this in your browser console right now. You should see a user object printed.

### What is happening step by step

```
1. fetch(url)           → sends a request to the URL
2. .then(response =>    → when the response arrives...
     response.json())   → convert it from raw text to a JS object
3. .then(data =>        → when conversion is done...
     console.log(data)) → use the data
```

---

## 4. Understanding Promises

`fetch()` does not give you the data immediately. It gives you a **Promise** — a guarantee that the data will arrive eventually.

### Real Life Analogy ⏳
When you order food at a restaurant, the waiter does not hand you food instantly. They give you a **receipt** — a promise that your food is coming. You do other things while you wait.

```js
// fetch() returns a Promise — not the data yet
const promise = fetch("https://jsonplaceholder.typicode.com/users/1");

console.log(promise); // Promise { <pending> } ← not the data yet!
```

A Promise has three states:

| State | Meaning |
|---|---|
| **Pending** | Still waiting — request is on the way |
| **Fulfilled** | Request succeeded — data is ready |
| **Rejected** | Something went wrong — error occurred |

### Handling the Promise with `.then()`

`.then()` runs when the Promise is fulfilled (succeeded):

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    console.log(response); // the raw response object
    return response.json(); // convert to JS object — returns another Promise
  })
  .then(data => {
    console.log(data); // the actual data you wanted
  });
```

> **Why two `.then()`?**
> The first `.then()` receives the raw HTTP response (not the data yet). You have to call `.json()` on it to extract the actual data. `.json()` is also async, so it returns another Promise — which is why you need a second `.then()`.

---

## 5. Handling Errors with `.catch()`

Fetches can fail — bad internet, wrong URL, server down. Always handle errors with `.catch()`:

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => {
    console.log("Got the data:", data);
  })
  .catch(error => {
    console.log("Something went wrong:", error.message);
  });
```

`.catch()` runs when:
- The internet is down
- The URL is wrong
- The server crashes

### Important — Fetch Does NOT Throw on 404

Here is a gotcha that surprises many beginners:

```js
// ❌ This does NOT go to .catch() even though the URL is wrong
fetch("https://jsonplaceholder.typicode.com/users/9999999")
  .then(response => {
    console.log(response.status); // 404 — but .catch() is NOT triggered!
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error)); // only runs for network errors
```

Fetch only rejects (triggers `.catch()`) on **network failures**, not HTTP errors like 404 or 500.

To handle those, check `response.ok`:

```js
fetch("https://jsonplaceholder.typicode.com/users/9999999")
  .then(response => {
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error.message));

// Output:
// Error: Request failed with status: 404
```

---

## 6. async/await — Cleaner Way to Write Fetch

Instead of chaining `.then()`, you can use `async/await` — it makes async code look like normal, top-to-bottom code.

### `.then()` vs `async/await` Side by Side

```js
// With .then() chains
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// With async/await — same thing, cleaner
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data     = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUser();
```

- `await` pauses the function until the Promise is done — then gives you the result directly
- `try/catch` replaces `.catch()` for error handling
- The code reads top to bottom — much easier to follow

> **Rule:** `await` can only be used inside an `async` function.

---

## 7. The Four HTTP Methods

Fetch can do more than just get data. It can send data, update data, and delete data too.

| Method | What it does | Like... |
|---|---|---|
| `GET` | Get data | Reading a menu |
| `POST` | Send new data | Placing an order |
| `PUT` | Replace existing data | Swapping a dish |
| `DELETE` | Remove data | Cancelling an order |

By default, `fetch()` always uses **GET**. To use others, you pass a second argument called the **options object**.

---

## 8. GET — Fetching Data

GET is the default — no options needed.

```js
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    users.forEach(user => {
      console.log(`${user.name} — ${user.email}`);
    });

  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUsers();
```

---

## 9. POST — Sending New Data

POST sends data to the server to create something new. You pass the data in the request **body** as a JSON string.

```js
async function createUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",                    // ← tell fetch to use POST
      headers: {
        "Content-Type": "application/json", // ← tell server you are sending JSON
      },
      body: JSON.stringify({             // ← convert JS object to JSON string
        name: "Ada Lovelace",
        email: "ada@example.com",
        city: "Lagos",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const newUser = await response.json();
    console.log("User created:", newUser);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

createUser();
```

### Breaking Down the Options Object

```js
{
  method: "POST",                       // which HTTP method to use
  headers: {
    "Content-Type": "application/json"  // tells server the body is JSON
  },
  body: JSON.stringify({ name: "Ada" }) // the data you are sending
}
```

> **Why `JSON.stringify()`?** The request body must be a **string**, not an object. `JSON.stringify()` converts your JS object to a JSON string so it can be sent over the network. The server then converts it back.

---

## 10. PUT — Updating Existing Data

PUT replaces an existing resource completely.

```js
async function updateUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Grace Hopper",
        email: "grace@example.com",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    const updatedUser = await response.json();
    console.log("User updated:", updatedUser);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

updateUser();
```

---

## 11. DELETE — Removing Data

```js
async function deleteUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    console.log(`User ${id} deleted successfully ✅`);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

deleteUser(1);
```

---

## 12. Loading and Error States

In real apps, fetches take time. Always show the user what is happening:

```js
let isLoading = true;
let errorMessage = "";
let users = [];

async function fetchUsers() {
  isLoading = true;
  errorMessage = "";

  console.log("⏳ Loading...");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Could not load users. Please try again.");
    }

    users = await response.json();
    console.log("✅ Users loaded:", users.length);
    users.forEach(u => console.log(u.name));

  } catch (error) {
    errorMessage = error.message;
    console.log("❌ Error:", errorMessage);

  } finally {
    isLoading = false;
    console.log("Loading finished");
  }
}

fetchUsers();
```

### `try / catch / finally`

| Block | When it runs |
|---|---|
| `try` | Always — your main code goes here |
| `catch` | Only when an error happens |
| `finally` | Always — runs whether or not there was an error |

`finally` is perfect for turning off loading states.

---

## 13. All Four Methods — Quick Reference

```js
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// GET — fetch all posts
async function getPosts() {
  const res  = await fetch(BASE_URL);
  const data = await res.json();
  console.log(data);
}

// POST — create a post
async function createPost() {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "My Post", body: "Hello world", userId: 1 }),
  });
  const data = await res.json();
  console.log("Created:", data);
}

// PUT — update a post
async function updatePost(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Updated Title" }),
  });
  const data = await res.json();
  console.log("Updated:", data);
}

// DELETE — delete a post
async function deletePost(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (res.ok) console.log(`Post ${id} deleted ✅`);
}

// Run them
getPosts();
createPost();
updatePost(1);
deletePost(1);
```

---

## 14. Sending a Token (For Protected Routes)

When your API requires login, you send the JWT token in the `Authorization` header:

```js
async function getMyProfile() {
  const token = localStorage.getItem("token"); // get saved token

  try {
    const response = await fetch("http://localhost:3000/api/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // ← send the token here
      },
    });

    if (!response.ok) {
      throw new Error("Not authorized");
    }

    const profile = await response.json();
    console.log("My profile:", profile);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

getMyProfile();
```

---

## ✅ Checklist
- [ ] Know what the Fetch API is and what it does
- [ ] Understand what a Promise is — pending, fulfilled, rejected
- [ ] Can write a fetch with `.then()` and `.catch()`
- [ ] Can write a fetch using `async/await` and `try/catch`
- [ ] Know why `response.json()` is needed
- [ ] Know why `response.ok` must be checked manually
- [ ] Can send a GET, POST, PUT, and DELETE request
- [ ] Know why `JSON.stringify()` is needed for POST/PUT
- [ ] Can add an `Authorization` header for protected routes
- [ ] Can handle loading and error states

## 💡 Practice Exercises

All exercises use this free API: `https://jsonplaceholder.typicode.com`

1. Fetch all posts from `/posts` and print the title of each one.
2. Fetch a single user from `/users/3` and print their name, email, and city.
3. Send a POST request to `/posts` with a title and body of your choice. Print the response.
4. Send a DELETE request to `/posts/5`. Print a success message if it works.
5. **Bonus:** Fetch all users from `/users`, filter only users whose email ends with `.net`, and print their names. Hint: use `.filter()` after getting the data.
