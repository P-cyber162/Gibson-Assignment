/*Create a class Book with properties 
title, author, and pages, and a method 
summary() that returns a string summary.*/

class Book {
    constructor(title,author,pages,summary){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

    summary (){
        return `The title of the book is ${this.title} by ${this.author} with a ${this.pages} pages.`
    }
    
}
 const myBook = new Book("Programming","Prinz Anaxy",1100)

console.log(myBook);

