
let myLibrary = []
const original = document.querySelector(`div[data-book='']`);
const library = document.getElementById('my-library')
const newBook = document.getElementById('add-book');
const newModal = document.getElementById('new-modal');
const bookForm = document.getElementById('book-form');



library.addEventListener('click',routeClick);
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
function routeClick(event){
    const dataAtt = event.target.dataset
    if(dataAtt.remove) removeCard(event);
    if(dataAtt.read) toggleRead(event);
}

function addBook(event){
    myLibrary.push(new Book());
    makeCard(myLibrary.at(-1), (myLibrary.length - 1));
    event.preventDefault();
}

function toggleRead(event){
    let bookRead = event.target
    if (bookRead.textContent === 'Read'){
        bookRead.textContent = 'Not Read';
        myLibrary[bookRead.dataset.read].read = false;
        bookRead.style.backgroundColor = 'rgb(133, 8, 8)';
    } else {
        bookRead.textContent = 'Read';
        myLibrary[bookRead.dataset.read].read = true;
        bookRead.style.backgroundColor = 'blue';
    }
}

function makeCard(book, bookNum){
    //Clone original node and revise based on user input. Updates data attributes as well
    let clone = original.cloneNode(true); 
    bookItems = Object.keys(book); //Turn object into array so we can use in for loop
    //Add dataset values to children. We likely only needed one for book though
    clone.dataset.book = `${bookNum}`;
    clone.children[4].dataset.remove = `${bookNum}`;
    for (counter = 0; counter < 4; counter++){
        clone.children[counter].dataset[bookItems[counter]] = `${bookNum}`
        if (counter === 3){
            if (book[bookItems[counter]]){ 
                clone.children[counter].innerText = 'Read';
                clone.children[counter].style.backgroundColor = 'blue';
            } else {
                clone.children[counter].innerText = 'Not Read';
            }
        continue;
        }
        clone.children[counter].textContent += book[bookItems[counter]];
    }
    //Removes original if first time
    original.remove();
    clone.style.display = 'block';
    library.insertBefore(clone, newBook);
}

function removeCard(event){
    //Deletes all divs except add-book
    const indexDel = event.target.parentNode.dataset.book;
    while (library.firstChild.id !== 'add-book'){
        library.removeChild(library.firstChild);
    }
    //Removes from the library array based on the dataset value, then redraw library
    myLibrary.splice(indexDel, 1);    
    for (let counter = 0, max = myLibrary.length - 1; counter <= max; counter++){
        makeCard(myLibrary[counter],counter);
    }
}