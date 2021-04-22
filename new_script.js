
class Book {
    constructor(
        title = "Unknown",
        author = "Unknown",
        pages = "0",
        status = "Unread"
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

let library = [];

function addBookToLibrary(newBook) {
    library.push(newBook);
    localSave();
}

function getBookInfo() {
    const title = document.querySelector('#name').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const status = document.querySelector('#status').value;
    return new Book(title, author, pages, status);
}

function formClear() {
    const form = document.querySelector('form');
    form.reset();
}

const submit = document.querySelector('.btn').addEventListener('click', (e) =>{
    addBook(e);
    formClear();
});

function addBook(e) {
    if(title.value === "" || author.value === "") {
        return alert("please fill out form")
    }
    addBookToLibrary(getBookInfo());
}

function deleteFromLibrary(title) {
    library = library.filter((book) => book.title !== title);
    localSave();
}

function bookCard(newBook) {
    const libraryContainer = document.querySelector('.library');

    const bookCard = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const readBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    title.textContent = newBook.title;
    author.textContent = newBook.author;
    pages.textContent = newBook.pages;
    readBtn.textContent = newBook.status;
    deleteBtn.textContent = "Delete";

    bookCard.classList.add("book-card");
    deleteBtn.classList.add("delete-btn");
    readBtn.classList.add("read-btn");

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(deleteBtn);
    libraryContainer.appendChild(bookCard);
}

function updateBookCards() {
    for (let element of library) {
        bookCard(element);
    }
}

function localSave() {
    localStorage.setItem("library", JSON.stringify(library));
}

function loadLocal() {
    library = JSON.parse(localStorage.getItem("library"));
    if (library === null) library = [];
    updateBookCards();
}

loadLocal();