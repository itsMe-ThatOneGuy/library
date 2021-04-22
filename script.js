let library = [];

function Book (title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

const libraryContainer = document.querySelector('.library')

const title = document.querySelector('#name');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const status = document.querySelector('#status');
const submit = document.querySelector('.btn').addEventListener('click', (e) => {
    addBook();
    clearForm();
})

function addBook() {
    if(title.value === "" || author.value === "") {
        return alert("please fill out form")
    }

    const newBook = new Book(title.value, author.value, pages.value, status.value);
    library.push(newBook);
    console.log(library);
    addBookCard(newBook);
}

function clearForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    status.value = "read"
}

function addBookCard(newBook) {
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

    deleteBtn.classList.add("delete-btn");
    readBtn.classList.add("read-btn");

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(deleteBtn);
    libraryContainer.appendChild(bookCard);
}

function bookIndex(title) {
    for (let book of library) {
        if (title === book.title) {
            return library.indexOf(book);
        }
    }
    return null;
}

function removeBook(bookTitle) {
    library = library.filter((book) => book.title !== bookTitle);
    console.log(library);
}