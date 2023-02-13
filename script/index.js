function breweryLocation (info) {
    fetch("https://api.openbrewerydb.org/breweries")
    .then(res => res.json())
    .then(places => {
        lat2 = places[0].latitude
        lon2 = places[0].longitude
    })
}


function querylocation (locationInput) {
    fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput}&format=json&limit=1`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data) 
        lat1 = data[0].lat
        lon1 = data[0].lon
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


function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        let radlat1 = Math.PI * lat1/180;
        let radlat2 = Math.PI * lat2/180;
        let theta = lon1-lon2;
        let radtheta = Math.PI * theta/180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist;
    }
}

const brewName = document.createElement("li")
const brewList = document.querySelector('#brewery_list')

for (let i = 0; i < places.length; i++) {
    if(distance(data.lat, data.lon, places[i].latitude, places[i].longitude, "K") <= 0.1) {
        for (let i = 0; i < 5; i++) {
            brewName.textcontent = places[i].name;
            brewList.append(brewName)
        }
    }
}


