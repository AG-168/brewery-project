
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

brewName.addEventListener("click", () => {
    let brewList = document.querySelector("#brewery_list")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")
    p1.textContent = data.street
    p2.textContent = data.city
    p3.textContent = `${data.state}, ${data.country}`
    p4.textContent = data.website_url
    brewList.appendChild(p1, p2, p3, p4)
})

