/*Extend the Book class into an EBook 
class that adds a fileSize property 
and overrides the summary() method to 
include file size.*/

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  summary() {
    return `${this.title} by ${this.author} with ${this.pages} pages.`;
  }
}

class EBook extends Book {
  constructor(title, author, pages, fileSize) {
    super(title, author, pages); 
    this.fileSize = fileSize;
  }

  summary() {
    return `${this.title} by ${this.author}, ${this.pages} pages, file size: ${this.fileSize}.`;
  }
}

const myEBook = new EBook("Programming", "Prinz Anaxy", 1100, "12 MB");

console.log(myEBook.summary());
