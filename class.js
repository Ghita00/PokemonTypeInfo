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

/*
Dugtrio Dugtrio Dugtrio Dugtrio Dugtrio Dugtrio 
*/

class Analize{
    constructor(text){
        this.text = text;
        this.result = [];
        this.info;
    }   
    
    async parserInfo(){
        console.log("1")
        let l = this.callServer()

        let coupleList = []
        for(let i = 0; i < l.length; i++){
            coupleList[i] = await this.resolvePromise(l[i])
        }
        console.log(coupleList)
    }

    callServer(){
        console.log("2")
        const promises = [];
        this.text = this.text.split(" ")
        
        for (let i = 0; i < this.text.length; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${this.text[i]}`;
            promises.push(fetch(url).then((res) => res.json()));
        }
        
        /*let list = []
        Promise.all(promises).then((results) => {
            for(let k = 0; k < promises.length; k++){           
                let first
                let second

                if(results[k].types.length == 2){
                    second = results[k].types[1].type.name
                }
                first = results[k].types[0].type.name
            
                if(results[k].types.length == 1){
                    second = first
                }
                x = [first, second]
                list.push(x)
                console.log(x)
            }
        });

        console.log(list)*/
        return promises
    };

    async resolvePromise(p){
        console.log("3")
        p.then((value) => { 
            return value;
        })
    }
}
