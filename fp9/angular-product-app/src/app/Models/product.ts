export class Product {
    _id: String;
    name: String;
    description: String;
    quantity: Number;

    constructor(name:string, description:string, quantity:number){
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}

