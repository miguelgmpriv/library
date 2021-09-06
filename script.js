
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
    clone.children[4].dataset.remove = `${bookNum}`;
    for (counter = 0; counter < 4; counter++){
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
    original.remove();
    clone.style.display = 'block';
    library.insertBefore(clone, newBook);
}

function removeCard(event){
    const delCard = event.target.parentNode;
    const indexDel = delCard.dataset.book;
    while (library.firstChild.id !== 'add-book'){
        library.removeChild(library.firstChild);
    }
    myLibrary.splice(indexDel, 1);    
    for (let counter = 0, max = myLibrary.length - 1; counter <= max; counter++){
        makeCard(myLibrary[counter],counter);
    }
}