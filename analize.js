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
        let l = this.callServer()
        /*for(let i = 0; i < l.length; i++){
            coupleList.push(await this.resolvePromise(l[i]))
        }*/
        let coupleList = await Promise.all(l)

        coupleList = coupleList.map((value) => {
            if(value !== undefined){
                let x = []
                let prop = false
                if(value.types.length === 2){
                    x.push(map[value.types[1].type.name])
                    prop = true
                }
                x.push(map[value.types[0].type.name])
                if(!prop){x.push(map["none"])}
                return x      
            }   
        })
        return coupleList
    }

    callServer(){
        this.text = this.text.split(" ")
        /*for (let i = 0; i < this.text.length; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${this.text[i]}`;
            promises.push(fetch(url).then((res) => res.json()));
        }*/
        let promises = this.text.map((value) => {
            let url = `https://pokeapi.co/api/v2/pokemon/${value}`
            //call server and responce
            return fetch(url).then((res) => {
                if(res.status === 404){
                    console.table(res)
                    return undefined
                }
                return res.json()
            })
        })

        //array promise
        return promises
    };

    /*resolvePromise(p){
        return p.then((value) => { 
            return value;
        })
    }*/
}
