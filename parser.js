x = document.getElementById('go')

x.addEventListener("click", (event) => {
  let text = document.getElementById("text").value
  let pokemon = new Analize(text)
  pokemon.parserInfo()

})  