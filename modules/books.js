class Book {
  static save(book) {
    const currentBooks = JSON.parse(localStorage.getItem('mybooks'));
    const update = [...currentBooks, book];

    localStorage.setItem('mybooks', JSON.stringify(update));
  }

  static remove(bookId) {
    const currentBooks = JSON.parse(localStorage.getItem('mybooks'));
    const leftOver = currentBooks.filter(
      (book) => Number(book.id) !== Number(bookId),
    );

    localStorage.setItem('mybooks', JSON.stringify(leftOver));
  }
}

export default Book;