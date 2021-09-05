document.getElementById('new-book').addEventListener('click', function (e){
    document.getElementById('new-modal').style.display = "block";
});

let myLibrary = []
const bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', addBook)
function Book(){

}

function addBook(event){
    
    console.log(event);
    console.log(bookForm.elements[3].value);
    event.preventDefault();
}