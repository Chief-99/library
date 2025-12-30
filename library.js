const bookWrapper = document.querySelector('.book-wrapper');
const addButton = document.querySelector('#add-button');
const bookDialog = document.querySelector('#book-dialog');
const confirmButton = document.querySelector('#confirm-button');

const myLibrary = [];

addButton.addEventListener('click', () => bookDialog.showModal());

function Book(title, author, pages, readStatus) {
    if (!new.target) {
        throw Error('You must use the new operator to call the constructor');
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function () {
        let readOutput = readStatus === true ? 'has been read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readOutput}`;
    }
}

function addBookToLibrary(title, author, pages, readStatus) {
    let book = new Book(title, author, pages, readStatus);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
}

function displayBooks(item) {
    let book = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let readStatus = document.createElement('p');
    book.classList.add('book-card');
    title.classList.add('book-title');
    author.classList.add('author');
    pages.classList.add('pages');
    readStatus.classList.add('read-status');

    title.textContent = `Title: ${item.title}`;
    author.textContent = `Author: ${item.author}`;
    pages.textContent = `Pages: ${item.pages}`;
    if (item.readStatus) {
        readStatus.textContent = 'Has been read';
    } else {
        readStatus.textContent = 'Not read yet';
    }

    book.append(title, author, pages, readStatus);
    bookWrapper.append(book);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('Take The Risk', 'Ben Carson', 467, true);
addBookToLibrary('Bad Science', 'Ben Goldacre', 370, true);
addBookToLibrary('Gone Girl', 'Gillian Flynn', 475, true);



myLibrary.forEach(displayBooks);