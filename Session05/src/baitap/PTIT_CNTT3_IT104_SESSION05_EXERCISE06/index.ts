class Book {
  private id: number;
  private title: string;
  private author: string;
  private year: number;

  constructor(id: number, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getInfo(): string {
    return `${this.id}. ${this.title} - ${this.author} (${this.year})`;
  }

  updateInfo(newTitle: string, newAuthor: string, newYear: number): void {
    this.title = newTitle;
    this.author = newAuthor;
    this.year = newYear;
  }
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  viewBooks(): void {
    if (this.books.length === 0) {
      console.log("Thư viện đang trống.");
      return;
    }
    console.log("Danh sách sách trong thư viện:");
    this.books.forEach((book) => {
      console.log(book.getInfo());
    });
  }

  updateBookById(
    id: number,
    newTitle: string,
    newAuthor: string,
    newYear: number
  ): void {
    let book = this.books.find((b) => b.getId() === id);
    if (book) {
      book.updateInfo(newTitle, newAuthor, newYear);
      console.log(`Sách ID ${id} đã được cập nhật.`);
    } else {
      console.log(`Không tìm thấy sách với ID ${id}.`);
    }
  }

  searchBooksByTitle(title: string): void {
    let foundBooks = this.books.filter((b) =>
      b.getTitle().toLowerCase().includes(title.toLowerCase())
    );
    if (foundBooks.length > 0) {
      console.log(`🔍 Kết quả tìm kiếm cho "${title}":`);
      foundBooks.forEach((book) => console.log(book.getInfo()));
    } else {
      console.log(` Không tìm thấy sách với tên chứa "${title}".`);
    }
  }

  deleteBookById(id: number): void {
    let index = this.books.findIndex((b) => b.getId() === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(` Sách ID ${id} đã bị xóa.`);
    } else {
      console.log(` Không tìm thấy sách với ID ${id}.`);
    }
  }
}

let book1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
let book2 = new Book(2, "Lão Hạc", "Nam Cao", 1943);
let book3 = new Book(3, "Chí Phèo", "Nam Cao", 1941);
let book4 = new Book(4, "Tắt Đèn", "Ngô Tất Tố", 1939);
let book5 = new Book(5, "Số Đỏ", "Vũ Trọng Phụng", 1936);

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();
library.updateBookById(3, "Chí Phèo (Bản mới)", "Nam Cao", 1945);
library.viewBooks();
library.searchBooksByTitle("Lão");
library.deleteBookById(2);
library.viewBooks();
