
let myLibrary = []
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
    makeCard(myLibrary.at(-1), (myLibrary.length - 1));

    //console.log(clone.querySelector(`[data-title='']`).dataset)
    //clone.dataset.title[bookNum].outerText = `${myLibrary[bookNum].title}`;
    //console.log(clone.getElementsByTagName('h3')[0].outerText);
    event.preventDefault();
}

function makeCard(book, bookNum){
    let clone = original.cloneNode(true);
    bookItems = Object.keys(book);
    clone.dataset.book = `${bookNum}`;
    for (counter = 0; counter < 4; counter++){
        if (counter === 3){
            clone.children[counter].children[0].dataset[bookItems[counter]] = `${bookNum}`
            clone.children[counter].children[0].checked = book[bookItems[counter]]
            continue;
        }
        clone.children[counter].dataset[bookItems[counter]] = `${bookNum}`
        clone.children[counter].textContent = book[bookItems[counter]];
    }

/*     clone.children[0].dataset = `${bookNum}`;
    clone.children[1].dataset = `${bookNum}`;
    clone.children[2].dataset = `${bookNum}`;


    clone.children[3].dataset.read = `${bookNum}`;
    clone.children[0].textContent = book.title;
    clone.children[1].textContent = book.author;
    clone.children[2].textContent = book.pages;
    clone.children[3].children[0].checked = book.read; */
    

    original.after(clone);
}