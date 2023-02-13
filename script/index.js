
// fetch("https://api.openbrewerydb.org/breweries")
// .then(resp => resp.json())
// .then(data => data.forEach(brew => showBreweries(brew)))


// function showBreweries(brew) {
//     let brewInfo = document.querySelector("#brewery-data")
//     let p = document.createElement("p")
//     p.textContent = brew.name
//     brewInfo.appendChild(p)
// }


function querylocation (locationInput) {
    fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput}&format=json&limit=1`)
    .then(res=>res.json())
    .then(data=>{
        lat0 = data[0].lat
        lon0 = data[0].lon
        console.log(lat0)
        console.log(lon0)
    })
}

const searchForm = document.querySelector('#search_form')


searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let formInput = document.querySelector('#address_input')
    const addressInput = formInput.value
    querylocation(addressInput)
    e.target.reset()
})

let brewList = document.querySelector("#brewery_list")
let address = document.createElement("li")
let city = document.createElement("li")
let state = document.createElement("li")
let website = document.createElement("li")

brewName.addEventListener("click", () => {
    address.textContent = places.street
    city.textContent = places.city
    state.textContent = `${places.state}, ${places.country}`
    website.textContent = places.website_url
    brewList.appendChild(li1, city, state, website)
})

