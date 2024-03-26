// Array of Library
const Library = [];

// Book Object Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read == "true" ? "has read" : "not yet read"
    }`;
  };
}

//Prototype toggleReads
Book.prototype.isRead = function () {
  console.log("Testing");
};

// Target <ol> in html page

const root = document.getElementById("table-root");

// Add example of Book
function bookExample() {
  const first_book = new Book("The Hobbit", "J.R.R", 200, true);
  const second_book = new Book("Letting things go", "Fumio Sasaki", 200, false);
  Library.push(first_book);
  Library.push(second_book);
}

// Display Book List
function displayBook() {
  // target DOM
  const table = document.getElementById("table-root");

  for (let i = 0; i < Library.length; i++) {
    let index = Library.indexOf(Library[i]); // Get the index of book

    // Create Row Element
    let row = document.createElement("tr");
    row.id = index;

    // Create Cell Element
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");
    let c5 = document.createElement("td");
    let c6 = document.createElement("td");

    // Create Button Delete
    const btnDel = document.createElement("button");
    btnDel.id = "delete-book";
    btnDel.textContent = "Delete";

    //Create Button Toggle Read
    const btnRead = document.createElement("button");
    btnRead.id = "toggle-read";
    btnRead.textContent = "Toggle Read";

    // Insert text on cell

    c1.textContent = index;
    c2.textContent = Library[i].title;
    c3.textContent = Library[i].author;
    c4.textContent = Library[i].pages;
    c5.textContent = Library[i].read;
    c6.appendChild(btnDel);
    c6.appendChild(btnRead);

    //add button delete event listener
    btnDel.addEventListener("click", () => {
      delete Library[i];
      const rowDelete = document.getElementById(index);
      rowDelete.remove();
    });

    //add button read event listener

    // Append Cell to Row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    row.appendChild(c6);

    // Append Row to table
    table.appendChild(row);
  }
}

// Add Book To Library on button submit
function addBookToLibrary(event) {
  event.preventDefault(); // Prevent form to do Submit Mehods
  let form = document.forms.bookForm;

  let title = form.elements.title.value;
  let author = form.elements.author.value;
  let pages = form.elements.pages.value;
  let read = form.elements.read.value;

  const newBook = new Book(title, author, pages, read);
  Library.push(newBook);
  console.log(Library);

  //Index of Book Objects in Array
  const index_book = Library.indexOf(newBook);

  // target DOM
  const table = document.getElementById("table-root");

  // Create Row Element
  let row = document.createElement("tr");
  row.id = index_book;

  // Create Cell Element
  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let c4 = document.createElement("td");
  let c5 = document.createElement("td");
  let c6 = document.createElement("td");

  // Create Button
  const btnDel = document.createElement("button");
  btnDel.textContent = "Delete";

  // Insert text on cell
  c1.textContent = index_book;
  c2.textContent = newBook.title;
  c3.textContent = newBook.author;
  c4.textContent = newBook.pages;
  c5.textContent = newBook.read;
  c6.appendChild(btnDel);

  // Append Cell to Row
  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);
  row.appendChild(c5);
  row.appendChild(c6);

  // Append Row to table
  table.appendChild(row);

  //add button delete event listener
  btnDel.addEventListener("click", () => {
    delete Library[index_book];
    const rowDelete = document.getElementById(index_book);
    rowDelete.remove();
  });
}

// Button Submit Function
const btnsubmit = document.getElementById("submit-button");
btnsubmit.addEventListener("click", addBookToLibrary);

// Display Array of Library Objects

//Execute Code
bookExample();
displayBook();
