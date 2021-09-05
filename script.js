
let myLibrary = []
let bookNum = 0;
const original = document.querySelector(`div[data-book='']`);

const newBook = document.getElementById('new-book');
const newModal = document.getElementById('new-modal');
const bookForm = document.getElementById('book-form');

newBook.addEventListener('click',() => newModal.style.display= 'block');
bookForm.addEventListener('submit', addBook)
window.onclick = function(e){
    if (e.target == newModal) {newModal.style.display = 'none';}
};

function Book(){
    this.title = bookForm.elements[0].value;
    this.author = bookForm.elements[1].value;
    this.pages = bookForm.elements[2].value;
    this.read = bookForm.elements[3].checked;
}

function addBook(event){
    myLibrary.push(new Book());
    makeCard(myLibrary.at(-1));

    //console.log(clone.querySelector(`[data-title='']`).dataset)
    //clone.dataset.title[bookNum].outerText = `${myLibrary[bookNum].title}`;
    //console.log(clone.getElementsByTagName('h3')[0].outerText);
    
    bookNum += 1;
 
    event.preventDefault();
}

function makeCard(book){
    let clone = original.cloneNode(true);
    clone.dataset.book = `${bookNum}`;
    clone.children[0].textContent = book.title;
    clone.children[1].textContent = book.author;
    clone.children[2].textContent = book.pages;
    console.log(clone.children[3].children.id);
    //clone.children[1].outerText = book.author;
    //console.log(clone.children[0].dataset);
   // console.log(clone.querySelectorAll('[data-title]'));
    original.after(clone);
}