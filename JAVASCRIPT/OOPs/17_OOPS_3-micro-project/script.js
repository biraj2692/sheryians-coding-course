// class Library {
//     constructor() {
//         this.books = []
//     }
//     addBooks(books){
//         this.books.push(...books);
//     }
//     listAllBooks(){
//         this.books.forEach((book)=>{
//             console.log(book);
//         })
//     }
// }

// class Book {
//     constructor(name, isbn, price, author) {
//         this.name=name;
//         this.isbn=isbn;
//         this.price=price;
//         this.author=author;
//         this.isRead = false
//     }
//     info(){
//         console.log(`The Book ${this.name} is written by author ${this.author} and it is currently available on Amazon for just ${this.price}. ${!this.isRead ? "You should read it": "You have read it already"}`)
//     }
//     changeReadStatus(){
//         this.isRead = !this.isRead
//     }
// }
// let ahmedabadLibrary = new Library();

// let book1 = new Book("Atomic habit", 123, 200 , "kallu");
// let book2 = new Book("Money is Honey", 193, 20000 , "Biraj");
// let book3 = new Book("Alladin", 127, 20 , "aalu");

// ahmedabadLibrary.addBooks([book1,book2,book3])


class MobileShop{
    constructor(){
        this.mobiles = [];
    }

    addMobile(mobile){this.mobiles.push(mobile)}
    removeMobile(mobile){this.mobiles.pop(mobile)}
    listAllMobiles(){
        this.mobiles.forEach((mobile, idx) => {
            console.log(`${idx+1})${mobile.brand} - ${mobile.model}- ${mobile.color} - ${mobile.price}- ${mobile.storage}- ${mobile.ram}`)
        })
    }
}

class Mobile {
    constructor(brand, model, price, color, storage, ram) {
        this.id = Math.floor(Math.random()*10000)
        this.brand= brand;
        this.model= model;
        this.price= price;
        this.color= color;
        this.storage= storage;
        this.ram= ram;
        this.sims= []
    }

    getMobileInfo(){
        console.log(`${this.brand} - ${this.model}- ${this.color} - ${this.price}- ${this.storage}- ${this.ram}`)
    }
    addSim(sim){
        if (this.sims.length === 2) {    
            console.log("Limit Reached of 2");    
            return;
        }
        this.sims.push(sim);
    }
    removeSim(sim){
        if (this.sims.length == 0) {    
            console.log("No simcard");    
            return;
        }
        this.sims.pop(sim);
    }
}

class Sim {
    constructor(brand, balance) {
       this.brand = brand;
       this.balance = balance; 
    }

    addBalance(balance){
        if (balance<10) {
            console.log("Enter minimum amount of 10 to proceed")
        }
        this.balance += balance;
    }
}

let iturhs = new MobileShop();

let iqoo = new Mobile("Iqoo", "Z5" , "20000" , "Silver", 128,8);

let airtel = new Sim("Airtel" , 100);

iqoo.addSim(airtel);
iturhs.addMobile();