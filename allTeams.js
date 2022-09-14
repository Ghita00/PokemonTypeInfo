x = document.getElementById('go')

x.addEventListener("click", async (event) => {
  let text = document.getElementById("text").value
  let pokemon = new Analize(text)
  let coupleList = await pokemon.parserInfo()

  let countingMapsuperW = {
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
  
  let countingMapsuperR = {
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

  let countingMapR = {
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

  let countingMapW = {
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

  let countingMapimmunity = {
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

  let final = []
  coupleList.forEach(element => {
    let list = compareType(element[0], element[1])
    let superW = list[0]
    let superR = list[1]
    let weakness = list[2]
    let resistence = list[3]
    let immunity = list[4]

    superW.forEach((value) => {
      countingMapsuperW[value]++
    })
    superR.forEach((value) => {
      countingMapsuperR[value]++
    })
    weakness.forEach((value) => {
      countingMapR[value]++
    })
    resistence.forEach((value) => {
      countingMapW[value]++
    })
    immunity.forEach((value) => {
      countingMapimmunity[value]++
    })
  })

  final.push(countingMapsuperW)
  final.push(countingMapsuperR)
  final.push(countingMapR)
  final.push(countingMapW)
  final.push(countingMapimmunity)
  createChart(final)
})  

function createChart(final){
  console.log(final)

  const labels = [
    "normal",
    "fire",
    "water",
    "grass",
    "electr",
    "ice",
    "fight",
    "poison",
    "ground",
    "flying",
    "psychc",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy"
  ];

  //order: superW, superR, R, W, I
  const dataSuperW = {
    labels: labels,
    datasets: [{
        label: 'Super Weakness',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: final[0],
    }]
  };

  const dataSuperR = {
    labels: labels,
    datasets: [{
        label: 'Super Resistence',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: final[1],
    }]
  };

  const dataW = {
    labels: labels,
    datasets: [{
        label: 'Weakness',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: final[2],
    }]
  };

  const dataR = {
    labels: labels,
    datasets: [{
        label: 'Resistence',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: final[3],
    }]
  };

  const dataI = {
    labels: labels,
    datasets: [{
        label: 'Immunity',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: final[4],
    }]
  };

  const configSuperW = {
    type: 'bar',
    data: dataSuperW,
    options: {}
  };

  const configSuperR = {
    type: 'bar',
    data: dataSuperR,
    options: {}
  };
  
  const configW = {
    type: 'bar',
    data: dataW,
    options: {}
  };

  const configR = {
    type: 'bar',
    data: dataR,
    options: {}
  };
  
  const configI = {
    type: 'bar',
    data: dataI,
    options: {}
  };

  const myChartSuperW = new Chart(document.getElementById('ChartSuperW'),configSuperW);
  const myChartSuperR = new Chart(document.getElementById('ChartSuperR'),configSuperR);
  const myChartW = new Chart(document.getElementById('ChartW'),configW);
  const myChartR = new Chart(document.getElementById('ChartR'),configR);
  const myChartI = new Chart(document.getElementById('ChartI'),configI);

}
