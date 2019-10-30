var words = document.getElementById("eegg");
var titles = ["Web Developer", "Data Analyst", "Programmer","3D Artist", "Photographer","Homebrewer"]

async function addText(title) {
  for( let j = 0; j < title.length; j++){
    words.innerHTML += title.charAt(j)
    await sleep(150)
  }

  await sleep(2000)

  let wordsText = words.innerHTML
  for (let i = wordsText.length - 1; i >= 0; i--) {
    words.innerHTML = wordsText.slice(0, i)
    await sleep(100)
  }
}

async function addAllText() {
  for(let idx = 0; idx < titles.length; idx++){
    await sleep(5500).then(addText(titles[idx]))
  }
}

addAllText()
setInterval(() => addAllText(), (5500 * titles.length) + 100)