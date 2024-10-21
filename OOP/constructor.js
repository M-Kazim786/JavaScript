// class person{
//     constructor(n) {
//       this.name=n;
//     }
// }
// let p=new person("kazim");
// console.log(p.name);

/***************** Book-class*********************/
// class Book{
//     constructor(title,author,year) {
//         this.title=title;
//         this.author=author;
//         this.year=year;
//     }
//     getSummary() {
//        return `Title: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}`
//     }

// }

// let book=new Book("Eloquent javaScript","Marijn Haverbeke",2015);
// console.log(book.getSummary());

/*****************BankAccount Class*****************/

class BankAccount {
    constructor(accountNumber,accountHolder,balance) {
        this.accountNumber=accountNumber;
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    deposit(amount) {
        return this.balance+=amount;
    }
    withdraw(amount) {
        return this.balance-=amount;
    }
}
let acc=new BankAccount("PK2148884656","Muhammad Kazim",5000.0);
acc.deposit(1000.0);
console.log(acc.balance);

acc.withdraw(500.0);
console.log(acc.balance);
