async function chuck() {
    let response = await fetch("https://api.icndb.com/jokes/random")
    let data = await response.json()
    return data
}

chuck()
    .then(data => {
        joke = document.getElementById("rando")
        joke.innerHTML = data.value.joke
    }
)

