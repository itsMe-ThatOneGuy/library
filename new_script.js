
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

const submit = document.querySelector('.btn').addEventListener('click', (e) =>{
    addBook(e);
    formClear();
});

const libraryContainer = document.querySelector('.library');
libraryContainer.addEventListener('click', libraryUpdate);

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

function addBook() {
    addBookToLibrary(getBookInfo());
    updateBookCards();
}

function deleteFromLibrary(title) {
    library = library.filter((book) => book.title !== title);
    localSave();
}

function bookCard(newBook) {
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
    resetBookCards();
    for (let element of library) {
        bookCard(element);
    }
}

function resetBookCards() {
    libraryContainer.innerHTML = "";
}

function getBook(bookTitle) {
    for (let book of library) {
      if (book.title === bookTitle) {
        return book;
      }
    }
    return null;
}

function libraryUpdate(e) {
    if (e.target.classList.contains("delete-btn")) {
        deleteFromLibrary(e.target.parentNode.firstChild.innerHTML);
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    } else if (e.target.classList.contains("read-btn")) {
        if (e.target.innerHTML === "read") {
            getBook(e.target.parentNode.firstChild.innerHTML).status = "not-read";
            e.target.innerHTML = "not-read";
            localSave();
        } else {
            getBook(e.target.parentNode.firstChild.innerHTML).status = "not-read";
            e.target.innerHTML = "read";
            localSave();
        }
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