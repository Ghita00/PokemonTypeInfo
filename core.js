/*
TODO migliorativi :)
- menu a tendina nella zelezione dei tipi
- storico risultati ricercati
*/ 

function addDOM(node, list) {
    for(let i = 0; i < list.length; i++){
        if(i < list.length-1){
            node.appendChild(document.createTextNode(list[i] + ", "));
        }else{
            node.appendChild(document.createTextNode(list[i] + " "))
        }
    }
}

function removeDOM() {
    document.getElementById("VW").innerHTML = "";
    document.getElementById("W").innerHTML = "";
    document.getElementById("VR").innerHTML = "";
    document.getElementById("R").innerHTML = "";
    document.getElementById("I").innerHTML = "";
    document.getElementById("N").innerHTML = "";
}

function normList(VW, W, VR, R, I) {
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

    let i;
    for(i = 0; i < VW.length; i++){
        countingMap[VW[i]]++;
    }
    for(i = 0; i < W.length; i++){
        countingMap[W[i]]++;
    }
    for(i = 0; i < VR.length; i++){
        countingMap[VR[i]]++;
    }
    for(i = 0; i < R.length; i++){
        countingMap[R[i]]++;
    }
    for(i = 0; i < I.length; i++){
        countingMap[I[i]]++;
    }
    let ret = [];
    
    for (const [key, value] of Object.entries(countingMap)) {
        if(value == 0){
            ret.push(key);
        }
    }

    return ret;
}



document.getElementById("go").onclick = function (){
    console.log("on");
    removeDOM();
    let doSearch1 = map[document.getElementById("t1").value.toLowerCase()];
    let doSearch2 = map[document.getElementById("t2").value.toLowerCase()];
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";

    let immunity = [];
    let veryWeaknes = [];
    let veryResistence = [];
    let weaknes = [];
    let resistence = [];
    let normalDamage = [];

    if(doSearch1 == undefined && doSearch2 == undefined){
        
        alert(
            "Error input type, true type are:\n" + 
            "normal, fire, water, grass, electr, ice, fight, poison, ground, flying, "+
            "psychc, rock, ghost, dragon, dark, steel, fairy\n\n"+
            "NB: insensitive to lower case or upper case"
        )                                                              

        document.getElementById("t1").value = "";
        document.getElementById("t2").value = "";

    }else if(doSearch1 && doSearch2 && doSearch1.getName() != doSearch2.getName()){
        
        immunity = [...doSearch1.getImmunity(), ...doSearch2.getImmunity()];
        doSearch1.resistence = doSearch1.getResistence().filter(x => !immunity.includes(x));
        doSearch2.resistence = doSearch2.getResistence().filter(x => !immunity.includes(x));
        doSearch1.weakness = doSearch1.getWeakness().filter(x => !immunity.includes(x));
        doSearch2.weakness = doSearch2.getWeakness().filter(x => !immunity.includes(x));

        veryWeaknes = (doSearch1.getWeakness().filter(x => doSearch2.getWeakness().includes(x))); 
        veryResistence = (doSearch1.getResistence().filter(x => doSearch2.getResistence().includes(x)));
        
        //B int A_comp
        let aux1 = doSearch2.getWeakness().filter(x => doSearch1.getResistence().includes(x));
        //A int B_comp
        let aux2 = doSearch1.getWeakness().filter(x => doSearch2.getResistence().includes(x));

        weaknes = [...doSearch1.getWeakness(), ...doSearch2.getWeakness()];
        weaknes = weaknes.filter(x => !aux1.includes(x));
        weaknes = weaknes.filter(x => !aux2.includes(x));
        weaknes = weaknes.filter(x => !veryWeaknes.includes(x));
        
        resistence = [...doSearch1.getResistence(), ...doSearch2.getResistence()];
        resistence = resistence.filter(x => !aux1.includes(x));
        resistence = resistence.filter(x => !aux2.includes(x));
        resistence = resistence.filter(x => !veryResistence.includes(x));

        normalDamage = normList(veryWeaknes, weaknes, veryResistence, resistence, immunity);
    }else if(doSearch1 && doSearch2 == undefined){
        immunity = doSearch1.getImmunity();
        weaknes = doSearch1.getWeakness();
        resistence = doSearch1.getResistence();
        normalDamage = normList(veryWeaknes, weaknes, veryResistence, resistence, immunity);
    } else{
        immunity = doSearch2.getImmunity();
        weaknes = doSearch2.getWeakness();
        resistence = doSearch2.getResistence();
        normalDamage = normList(veryWeaknes, weaknes, veryResistence, resistence, immunity);
    }

    let VW = document.getElementById("VW");
    let W = document.getElementById("W");
    let VR = document.getElementById("VR");
    let R = document.getElementById("R");
    let I = document.getElementById("I");
    let N = document.getElementById("N");

    addDOM(VW, veryWeaknes);
    addDOM(W, weaknes);
    addDOM(VR, veryResistence);
    addDOM(R, resistence);
    addDOM(I, immunity);
    addDOM(N, normalDamage);

    let app = document.getElementById("mySearch");
    let n1 = "", n2 = "";
    if(doSearch1 != undefined){
        n1 = doSearch1.getName();
    }
    if(doSearch2 != undefined){
        n2 = doSearch2.getName();
    }
};

document.getElementById("reset").onclick = function(){
    removeDOM();
}

