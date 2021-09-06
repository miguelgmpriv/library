
let myLibrary = []
const original = document.querySelector(`div[data-book='']`);
const library = document.getElementById('my-library')
const newBook = document.getElementById('add-book');
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
    event.preventDefault();

}

function makeCard(book, bookNum){
    //Clone original node and revise based on user input. Updates data attributes as well
    let clone = original.cloneNode(true); 
    bookItems = Object.keys(book); //Turn object into array so we can use in for loop
    clone.dataset.book = `${bookNum}`;
    for (counter = 0; counter < 4; counter++){
        const displayText = clone.children[counter].textContent;
        clone.children[counter].dataset[bookItems[counter]] = `${bookNum}`
        if (counter === 3){
            if (book[bookItems[counter]]){ 
                clone.children[counter].innerText = 'Read';
            } else {
                clone.children[counter].innerText = 'Not Read';
            }
        continue;
        }
        clone.children[counter].textContent += book[bookItems[counter]];
    }
/*     if (bookNum === 0){
        original.remove();
        library.appendChild(clone);
        return;
    } */
    clone.style.display = 'block';
    library.insertBefore(clone, newBook);
    
}