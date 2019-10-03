const input = document.querySelector("#zip")
const button = document.querySelector("button")
const searchBox = document.querySelector(".restmov")


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
    searchRes.className += "flip-inner";
    // display.innerHTML += `<p>Name: ${restaurant.name}</p><p>Grade: ${restaurant.grade}</p><p>Violation: ${restaurant.description}</p>`
    searchRes.innerHTML += `<div class="flip-front"><h2 id="restname">${restaurant.name}</h2></div> <div class="flip-back"><h3 class="codeRed">Offense:</h3><p> ${restaurant.description}</p></div>`
    searchBox.append(searchRes)

    document.querySelector('.restmov').scrollIntoView({ behavior: 'smooth' })


  })

  let card = document.querySelector("flip-inner")
  card.addEventListener('click', async () => {
    card.classList.toggle('flippy');


  })


})

