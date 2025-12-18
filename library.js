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
    myLibrary.push(book);
}

