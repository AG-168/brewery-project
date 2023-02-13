function breweryLocation (lat,long) {
    fetch(`https://api.openbrewerydb.org/breweries?by_dist=${lat},${long}&per_page=5`)
    .then(res => res.json())
    .then(places => {
        brewerylist=places
        for (let i = 0; i < brewerylist.length; i++) {
            const brewName = document.createElement("li")
            const brewdistance = distance(lat1, lon1, brewerylist[i]['latitude'], brewerylist[i]['longitude'], "K").toFixed(2)
            const brewList = document.querySelector('#brewery_list')
            brewName.textContent = `${brewerylist[i]['name']} @ ${brewdistance} miles away`
            brewList.append(brewName)
            //console.log(brewList)
        }
        //console.log(brewerylist)
    })
}

let brewerylist

function querylocation (locationInput) {
    fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput}&format=json&limit=1`)
    .then(res=>res.json())
    .then(data=>{
        //console.log(data) 
        lat1 = data[0].lat
        lon1 = data[0].lon
        breweryLocation(lat1,lon1)
        //console.log(lat1)
        //console.log(lon1)
    })
}

const searchForm = document.querySelector('#search_form')


searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let formInput = document.querySelector('#address_input')
    const addressInput = formInput.value
    let breweryUl = document.querySelector('#brewery_list')
    breweryUl.innerHTML=''
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
        return dist*0.621371;
    }
}

console.log("Hello World")







