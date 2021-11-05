export class State {
    id: String | undefined;
    name: String | undefined;
    uf: String | undefined;
    ibge: String | undefined;
        
    constructor(id ?: String, name ?: String, uf ?: String, ibge ?: String){
        this.id = id;
        this.name = name;
        this.uf = uf;
        this.ibge = ibge;
      }
  
      
    }