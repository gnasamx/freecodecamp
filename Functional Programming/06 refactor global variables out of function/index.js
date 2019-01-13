// the global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add(arr, bookName) {
  let bookArr = [...arr];
  bookArr.push(bookName);
  return bookArr;

  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(arr, bookName) {
  let bookArr = [...arr];
  if (bookArr.indexOf(bookName) >= 0) {
    bookArr.splice(bookArr.indexOf(bookName), 1);
    return bookArr;
    // Add your code above this line
  }
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);
console.log(newBookList);

console.log(bookList);
