let bookCollection = [];

function Book (title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

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
    bookCollection.push(newBook);
    console.log(bookCollection);
}

function clearForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    status.value = "read"
}