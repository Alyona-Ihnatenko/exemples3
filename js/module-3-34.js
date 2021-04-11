const bookShelf = {
    // Пиши код ниже этой строки
    books: ['Последнее королевство', 'Страж снов'],
    getBooks() {
      return 'Возвращаем все книги';
    },
    addBook(bookName) {
      return `Добавляем книгу ${bookName}`;
    },
    removeBook(bookName){
      return `Удаляем книгу ${bookName}`;
    },
    updateBook(bookName,newBookName){
      return `Обновляем книгу ${bookName} на ${newBookName}`}
      
    // Пиши код выше этой строки
  };
  console.log(bookShelf)