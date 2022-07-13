class Storage {
  static get allBooks() {
    const books = [];

    if (localStorage.getItem("mybooks")) {
      return JSON.parse(localStorage.getItem("mybooks"));
    }

    localStorage.setItem("mybooks", JSON.stringify(books));
    return books;
  }
}
