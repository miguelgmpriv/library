
let myLibrary = []
let bookNum = 0;

const newBook = document.getElementById('new-book');
const newModal = document.getElementById('new-modal');
const bookForm = document.getElementById('book-form');

newBook.addEventListener('click',() => newModal.style.display= 'block');
bookForm.addEventListener('submit', addBook)
window.onclick = function(e){
    if (e.target == newModal) {newModal.style.display = 'none';}
};

function Book(){
    this.name = bookForm.elements[0].value;
    this.author = bookForm.elements[1].value;
    this.pages = bookForm.elements[2].value;
    this.read = bookForm.elements[3].value;
}

function addBook(event){
    myLibrary[bookNum] = new Book();
    console.log(myLibrary[0]);
    console.log(myLibrary[bookNum].name);
    event.preventDefault();
}