const url = "https://api.unsplash.com/search/photos?page=1&per_page=1&query=office"

const params = {
    headers: {
        "Authorization": "Client-ID K7jYSX33pzG8PPLNazKXjYa6QDMHLXNaImmHdIGaqVs"
    }, 
    method: "GET"
}

fetch(url, params)
.then(data=>{
    return data.json()
})
.then(res=>{
    console.log(res)
    console.log(res.results[0].links.self)
    document.body.style.backgroundImage = "url('" + res.results[0].links.self + "')";
})
.catch(error=>console.log(error))


// use pexels 