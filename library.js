const bookWrapper = document.querySelector('.book-wrapper');
console.log(bookWrapper);

const myLibrary = [];

function Book(title, author, pages, readStatus) {
    if (!new.target) {
        throw Error('You must use the new operator to call the constructor');
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function() {
        let readOutput = readStatus === true ? 'has been read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readOutput}`;
    }
}

function addBookToLibrary(title, author, pages, readStatus) {
    let book = new Book(title, author, pages, readStatus);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('Take The Risk', 'Ben Carson', 467, true);
addBookToLibrary('Bad Science', 'Ben Goldacre', 370, true);
addBookToLibrary('Gone Girl', 'Gillian Flynn', 475, true);

myLibrary.forEach(console.log)