const input = document.querySelector("#zip")
const button = document.querySelector("button")
const display = document.querySelector(".restmov")
const pageOne = document.querySelector("#page-one")
const pageTwo = document.querySelector("#page-two")
// Testing out new page//
const pageThree = document.querySelector("#page-three")
const inputPlace = document.querySelector("#business")
const press = document.querySelector("#action")
const showMe = document.querySelector(".findresta")

button.addEventListener("click", async () => {
  let name = input.value
  display.innerHTML = " "
  const response = await axios.get(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?grade=C&zipcode=${name}`)

  let restaurants = response.data.map(restaurant => {
    return { name: restaurant.dba, grade: restaurant.grade, description: restaurant.violation_description, building: restaurant.building, street: restaurant.street }
  });

  console.log(response)
  console.log(restaurants)


  restaurants.map(restaurant => {
    let searchRes = document.createElement('div');
    searchRes.className += "flip-inner";
    searchRes.innerHTML += `<div class="flip-front"><h2 id="restname">${restaurant.name}</h2><p id="streetAdd">${restaurant.building} <br/> ${restaurant.street}</div> <div class="flip-back"><h3 class="codeRed">Offense:</h3><p id="desc"> ${restaurant.description}</p></div>`
    display.append(searchRes)

    pageOne.style.display = "none"
    pageTwo.style.display = "block"

  })


})

// Testing out new page results //

press.addEventListener("click", async () => {
  let nameTwo = inputPlace.value.toUpperCase()
  showMe.innerHTML = " "
  const answer = await axios.get(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?dba=${nameTwo}`)

  let manyRest = answer.data.map(foodres => {
    return { name: foodres.dba, description: foodres.violation_description, building: foodres.building, street: foodres.street }
  });

  console.log(answer)
  console.log(manyRest)


  manyRest.map(foodres => {

    let yourSearch = document.createElement('div');
    yourSearch.className += "card-container";
    yourSearch.innerHTML += `<h2 id="restnameTwo">${foodres.name}</h2> 
    <p id="streetAddTwo">${foodres.building}<br/>${foodres.street} 
    <p id="descTwo">${foodres.description}</p>`
    showMe.append(yourSearch)

    pageOne.style.display = "none"
    pageThree.style.display = "block"

  })


})

