const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const loading = document.querySelector("#loading");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  fetch(url)
    .then((response) => {
      // returns the response object
      // the data is in the body of the response
      console.log("Request successful", response);
      return response.json();
    })
    .then((data) => {
      // returns the data in json format
      console.log("Data", data);
      loading.hidden = true;
      // loop through data
      data.forEach((book) => {
        let newBook = document.createElement("div");
        let title = document.createElement("h2");
        let author = document.createElement("p");
        let year = document.createElement("p");
        let pages = document.createElement("p");

        childElements = [title, author, year, pages];

        childElements.forEach((element) => {
          title.textContent = book.name;
          author.textContent = book.authors;
          year.textContent = book.released.slice(0, 4);
          pages.textContent = book.numberOfPages;
          newBook.appendChild(element);
        });

        app.appendChild(newBook);
      });
    })
    .catch((error) => {
      console.error("Request failed", error);
    });
};
// Create an element for each book that contains title, author, publication year, and number of pages
// Update the styles in JavaScript to center all the books in the container given
app.style.alignItems = "center";

fetchData(url);
