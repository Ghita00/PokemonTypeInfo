class PokeType{
    constructor(name, resistence, weakness, immunity){
        this.name = name;
        this.resistence = resistence;
        this.weakness = weakness;
        this.immunity = immunity;
    }
    getName(){
        return this.name;
    }

    getResistence(){
        return this.resistence;
    }

    getWeakness(){
        return this.weakness;
    }

    getImmunity(){
        return this.immunity;
    }

    
}

let normal = new PokeType("normal", [], ["fight"], ["ghost"]);
let fire = new PokeType("fire", ["fire", "grass", "ice", "bug", "steel", "fairy"], ["water", "ground", "rock"], []);
let water = new PokeType("water", ["fire", "water", "ice", "steel"], ["grass", "electr",], []);
let grass = new PokeType("grass", ["water", "grass", "electr", "ground"], ["fire", "ice", "poison", "flying", "bug"], []);
let electr = new PokeType("electr", ["electr", "flying", "steel"], ["ground"], []);
let ice = new PokeType("ice", ["ice"], ["fire", "fight", "rock", "steel"], []);
let fight = new PokeType("fight", ["colettero", "rock", "dark"], ["flying", "psychc", "fairy"], []);
let poison = new PokeType("poison", ["grass", "fight", "poison", "bug", "fairy"], ["ground", "psychc"], []);
let ground = new PokeType("ground", ["poison", "bug"], ["water", "grass", "ice"], ["electr"]);
let flying = new PokeType("flying", ["grass", "fight", "bug"], ["electr", "ice", "rock"], ["ground"]);
let psychc = new PokeType("psychc", ["fight", "psychc"], ["bug", "ghost", "dark"], []);
let bug = new PokeType("bug", ["grass", "fight", "ground"], ["fire", "flying", "rock"], []);
let rock = new PokeType("rock", ["normal", "fire", "poison", "flying"], ["water", "grass", "fight", "ground"], []);
let ghost = new PokeType("ghost", ["poison", "bug"], ["ghost", "dark"], ["normal", "fight"]);
let dragon = new PokeType("dragon", ["fire", "grass", "water", "electr"], ["ice", "dragon", "fairy"], []);
let dark = new PokeType("dark", ["ghost", "dark"], ["fight", "bug", "fairy"], ["psychc"]);
let steel = new PokeType("steel",["normal", "flying", "rock", "bug", "steel", "grass","psychc", "ice", "dragon","fairy"], ["fight", "ground", "fire"], ["poison"]);
let fairy = new PokeType("fairy", ["fight", "bug", "dark"], ["poison", "steel"], ["dragon"]);
let none = new PokeType("none", [], [], []);

let map = {
    "normal" : normal,
    "fire" : fire,
    "water" : water,
    "grass" : grass,
    "electr" : electr,
    "ice" : ice,
    "fight" : fight,
    "poison" : poison,
    "ground" : ground,
    "flying" : flying,
    "psychc" : psychc,
    "bug" : bug,
    "rock" : rock,
    "ghost" : ghost,
    "dragon" : dragon,
    "dark" : dark,
    "steel" : steel,
    "fairy" : fairy,
    "none" : none
}  

function compareType(PT1, PT2){
    let w1 = PT1.getWeakness()
    let w2 = PT2.getWeakness()
    let r1 = PT1.getResistence()
    let r2 = PT2.getResistence()
    let i1 = PT1.getImmunity()
    let i2 = PT2.getImmunity()

    //super weakness
    let superW = w1.filter((value) => {
        return w2.includes(value)
    })

    //super resister
    let superR = r1.filter((value) => {
        return r2.includes(value)
    })

    //weakness
    let weakness1 = w1.filter((value) => {
        return (!r2.includes(value) && !i2.includes(value))
    })
    let weakness2 = w2.filter((value) => {
        return (!r1.includes(value) && !i1.includes(value))
    })
    let weakness = weakness1.concat(weakness2)

    //resistence
    let resistence1 = r1.filter((value) => {
        return (!w2.includes(value) && !i2.includes(value))
    })
    let resistence2 = r2.filter((value) => {
        return (!w1.includes(value) && !i1.includes(value))
    })
    let resistence = resistence1.concat(resistence2)

    //immunity
    let immunity = i1.concat(i2)
    
    return [superW, superR, weakness, resistence, immunity]
}