class Book {
  constructor({
    id,
    image,
    name,
    author,
    year,
    category,
    hardCopy,
    eBook,
    audioBook,
    borrowed,
    location,
  }) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.author = author;
    this.year = year;
    this.category = category;
    this.hardCopy = hardCopy;
    this.eBook = eBook;
    this.audioBook = audioBook;
    this.borrowed = borrowed;
    this.location = location;
  }
}

export default Book;
