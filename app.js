const input = document.querySelector("#zip")
const button = document.querySelector("button")
const searchBox = document.querySelector(".restmov")
const pageOne = document.querySelector("#page-one")
const pageTwo = document.querySelector("#page-two")


button.addEventListener("click", async () => {
  let name = input.value
  const response = await axios.get(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?grade=C&zipcode=${name}`)

  let restaurants = response.data.map(restaurant => {
    return { name: restaurant.dba, grade: restaurant.grade, description: restaurant.violation_description }
  });

  // console.log(response)
  // console.log(restaurants)


  restaurants.map(restaurant => {
    let searchRes = document.createElement('div');
    searchBox.className += "flip-inner";
    // searchBox.innerHTML += `<div class="flip-front"><h2 id="restname">${restaurant.name}</h2></div> 
    // <div class="flip-back"><h3 class="codeRed">Offense:</h3> <p>${restaurant.description}</p></div>`
    searchRes.innerHTML += `<div class="flip-front"><h2 id="restname">${restaurant.name}</h2></div> <div class="flip-back"><h3 class="codeRed">Offense:</h3><p> ${restaurant.description}</p></div>`
    searchBox.append(searchRes)

    pageOne.style.display = "none"
    pageTwo.style.display = "block"
    
  })
  
  let card = document.querySelector(".flip-inner")
  card.addEventListener('click', async () => {
    card.classList.toggle('flippy');
    

  })


})

