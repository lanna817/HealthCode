const input = document.querySelector("#zip")
const button = document.querySelector("button")
const display = document.querySelector("div")


  button.addEventListener("click", async () => {
  let name = input.value
  const response = await axios.get(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?grade=C&zipcode=${name}`)

  let restaurants = response.data.map(restaurant => {
    return { name: restaurant.dba, grade: restaurant.grade, description: restaurant.violation_description }
  });

  console.log(response)
  console.log(restaurants)

  restaurants.map(restaurant => {
    display.innerHTML += `<p>Name: ${restaurant.name}</p><p>Grade: ${restaurant.grade}</p><p>Violation: ${restaurant.description}</p>`

    document.querySelector('.results').scrollIntoView({behavior: 'smooth'})
  })




})
