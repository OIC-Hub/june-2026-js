// const data = 
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch((error) => {
//     console.log(error.message)
//   })

// console.log(data)


// const url = "https://jsonplaceholder.typicode.com/users"
// async function getData(){
//     try {
//        const response =  await fetch(url) 
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData();


const api = "https://dummyjson.com/products"

async function fetchData(){
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data)

    data.products.forEach(products => {
        console.log(`Products ${products.id} - ${products.title}`)
    })

  } catch (error) {
    console.log(error)
  }
}

fetchData();