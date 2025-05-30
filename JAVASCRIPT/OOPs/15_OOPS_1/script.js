// Constructor


function Home(name, sqFeet, owned, location){
    this.name = name;
    this.sqFeet = sqFeet;
    this.owned = owned;
    this.location = location;
}

let home1 = new Home("Biraj", 21000,true,"Gujarat");
let home2 = new Home("Beena", 2100,false,"Gujarat");
let home3 = new Home("Biren", 2000,true,"Gujarat");

// Class
class Icecream{
    constructor(nam, flavour, price, amount){
        this.name = nam;
        this.flavour = flavour;
        this.price = price;
        this.amount=amount;
    }
}

let icecream1 = new Icecream("Vanilla","Vanilla",120,2.5);