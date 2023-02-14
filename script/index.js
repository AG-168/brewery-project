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
            brewName.className = brewerylist[i]['brewery_type']
            brewList.append(brewName)
            brewName.addEventListener('click', (e)=>{
                addClickListener(brewerylist[i])
            })
        }
         //console.log(brewerylist)
    })
}

let brewerylist

const breweryDetail = document.querySelector("#brewery_click_details")
let street = document.querySelector("#street")
let website = document.querySelector("#website")
let websiteHead = document.querySelector("#website-head")
let type = document.querySelector("#type")

function addClickListener(brew) {
    street.innerHTML = ''
    website.innerHTML = ''
    websiteHead.innerHTML = ''
    type.innerHTML = ''
    street.textContent = `Address: ${brew.street}`
    website.setAttribute('href', brew.website_url)   
    website.textContent = brew.website_url 
    websiteHead.textContent = "Website: "
    type.textContent = `Type of Brewery: ${brew.brewery_type}`
}

function querylocation (locationInput) {
    fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput}&format=json&limit=1`)
    .then(res=>res.json())
    .then(data=>{
        lat1 = data[0].lat
        lon1 = data[0].lon
        breweryLocation(lat1,lon1)
    })
}

const searchForm = document.querySelector('#search_form')


searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let formInput = document.querySelector('#address_input')
    const addressInput = formInput.value
    let breweryUl = document.querySelector('#brewery_list')
    breweryUl.innerHTML= ''
    street.textContent = ''
    website.textContent = ''
    websiteHead.textContent = ''
    type.textContent = ''
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


const filter = document.querySelector("#filter")
filter.addEventListener("change", (event) => {
    let breweryUl = document.querySelector("#brewery_list")

    switch (event.target.value) {
        case 'micro':breweryUl.childNodes.forEach( (ele) => {
            if (ele.className !== 'micro') {ele.setAttribute('hidden', 'hidden')}
            else {ele.removeAttribute('hidden')}
        })
        break
            
        case 'nano':breweryUl.childNodes.forEach( (ele) => {
            if (ele.className !== 'nano') {ele.setAttribute('hidden', 'hidden')}
            else {ele.removeAttribute('hidden')}
        })
        break
        
        case 'regional':breweryUl.childNodes.forEach( (ele) => {
            if (ele.className !== 'regional') {ele.setAttribute('hidden', 'hidden')}
            else {ele.removeAttribute('hidden')}
        })
        break

        case 'brewpub':breweryUl.childNodes.forEach( (ele) => {
            if (ele.className !== 'brewpub') {ele.setAttribute('hidden', 'hidden')}
            else {ele.removeAttribute('hidden')}
        })
        break

        case 'large':breweryUl.childNodes.forEach( (ele) => {
            if (ele.className !== 'large') {ele.setAttribute('hidden', 'hidden')}
            else {ele.removeAttribute('hidden')}
        })
        break  

        case 'planning':breweryUl.childNodes.forEach( (ele) => {
            if (ele.className !== 'planning') {ele.setAttribute('hidden', 'hidden')}
            else {ele.removeAttribute('hidden')}
        })
        break  

        case 'bar':breweryUl.childNodes.forEach( (ele) => {
            if (ele.className !== 'bar') {ele.setAttribute('hidden', 'hidden')}
            else {ele.removeAttribute('hidden')}
        })
        break  

        case 'contract':breweryUl.childNodes.forEach( (ele) => {
            if (ele.className !== 'contract') {ele.setAttribute('hidden', 'hidden')}
            else {ele.removeAttribute('hidden')}
        })
        break  

        case 'proprietor':breweryUl.childNodes.forEach( (ele) => {
            if (ele.className !== 'proprietor') {ele.setAttribute('hidden', 'hidden')}
            else {ele.removeAttribute('hidden')}
        })
        break  

        case 'closed':breweryUl.childNodes.forEach( (ele) => {
            if (ele.className !== 'closed') {ele.setAttribute('hidden', 'hidden')}
            else {ele.removeAttribute('hidden')}
        })
        break  

        case 'all':breweryUl.childNodes.forEach( (ele) => {
            ele.removeAttribute('hidden')
        })
        break
    }
})






