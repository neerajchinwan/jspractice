const Library = function(name, location){
    this.name = name;
    this.location = location;
    this.books = [];
}

Library.prototype.addBook = function(title, author, genre, checkedOut){
    this.books = [...this.books, {title, author, genre, checkedOut}]
}

Library.prototype.checkedOutBook = function(title){
    for(let i = 0; i < this.books.length; i++){
        if(this.books[i].title === title){
            this.books[i].checkedOut = true;
        }
    }
}

Library.prototype.returnBook = function(title){
    for(let i = 0; i< this.books.length; i++){
        if(this.books[i].title === title){
            this.books[i].checkedOut = false;
        }
    }
}

// Library.prototype.listAvailbleBook = function(){
//     this.books.map(function(book){
//         if(book.checkedOut === false){
//             return book;
//         }
//     })
// }

const palamLibrary = new Library('Palam Library', 'Palam');

palamLibrary.addBook('BookOne', 'xyz', 'action', false);
palamLibrary.addBook('BookTwo', 'abc', 'sci-fi', false);

console.log(palamLibrary);
palamLibrary.checkedOutBook('BookOne');
console.log(palamLibrary);
palamLibrary.returnBook('BookOne');
console.log(palamLibrary);