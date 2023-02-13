
function querylocation (locationInput) {
    fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput}&format=json&limit=1`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data) 
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
})





