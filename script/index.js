
fetch("https://api.openbrewerydb.org/breweries")
.then(resp => resp.json())
.then(data => data.forEach(console.log(data)))


function showBreweries(brew) {
    
}