export class Country {
  id: String | undefined;
	name: String | undefined;
	portugueseName: String | undefined;
	code: String | undefined;
	bacen: String | undefined;

    constructor(id ?: String, name ?: String, portugueseName ?: String, 
        code ?: String, bacen ?: String){
            this.id = id;
            this.name = name;
            this.portugueseName = portugueseName;
            this.code = code;
            this.bacen = bacen;
        }

}