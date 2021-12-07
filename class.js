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