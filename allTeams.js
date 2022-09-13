x = document.getElementById('cazzo')

x.addEventListener("click", async (event) => {

  let text = document.getElementById("text").value
  let pokemon = new Analize(text)
  let coupleList = await pokemon.parserInfo()
  console.log(coupleList)

  let countingMap = {
    "normal" : 0,
    "fire" : 0,
    "water" : 0,
    "grass" : 0,
    "electr" : 0,
    "ice" : 0,
    "fight" : 0,
    "poison" : 0,
    "ground" : 0,
    "flying" : 0,
    "psychc" : 0,
    "bug" : 0,
    "rock" : 0,
    "ghost" : 0,
    "dragon" : 0,
    "dark" : 0,
    "steel" : 0,
    "fairy" : 0
  }
  
  coupleList.forEach(element => {
    let list = compareType(element[0], element[1])
    
  })
})  