const input = document.querySelector("#zip")
const button = document.querySelector("button")
const searchBox = document.querySelector("#restmov")


button.addEventListener("click", async () => {
  let name = input.value
  const response = await axios.get(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?grade=C&zipcode=${name}`)

  let restaurants = response.data.map(restaurant => {
    return { name: restaurant.dba, grade: restaurant.grade, description: restaurant.violation_description }
  });

  console.log(response)
  console.log(restaurants)

  restaurants.map(restaurant => {
    let searchRes = document.createElement('div');
    searchRes.className = 'card';
    // display.innerHTML += `<p>Name: ${restaurant.name}</p><p>Grade: ${restaurant.grade}</p><p>Violation: ${restaurant.description}</p>`
    searchRes.innerHTML += `<h2>${restaurant.name}</h2> <h3 class="codeRed">${restaurant.grade}</h3> <p>What's Gross: ${restaurant.description}</p>`
    searchBox.append(searchRes)

    document.querySelector('#restmov').scrollIntoView({ behavior: 'smooth' })
  })




})
