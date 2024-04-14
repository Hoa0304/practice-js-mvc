class LoginController {
  constructor(view, service) {
    this.view = view;
    this.service = service;
    this.handleLogin();
    this.view.toggleOptions();
    this.view.logout();
    this.handleDisplayData();
    this.view.bindAddBook(this.handleAddBook);
    this.handleDelete();
    this.service.bindDataChanged(this.onDataChanged);
    this.handleShowEditForm();
    this.handleSearchData();
  }
  async handleLogin() {
    const user = await this.service.getUsers();
    this.view.login(user);
    this.view.showPw();
  }
  async handleShowEditForm() {
    const books = await this.service.getBooks();
    this.view.toggleFormEdit(books, this.handleEdit);
  }

  async handleDisplayData() {
    const book = await this.service.getBooks();
    this.view.displayData(book);
  }
  async handleSearchData() {
    const book = await this.service.getBooks();
    this.view.searchBook(book);
  }

  handleDeleteData = (id) => {
    this.id = id;
    this.service.deleteBooks(id);
  };
  async handleDelete() {
    await this.handleDisplayData();
    this.view.bindDelete(this.handleDeleteData);
  }
  onDataChanged = (books) => {
    this.view.displayData(books);
  };

  handleAddBook = (book) => {
    this.service.addBook(book);
  };
  handleEdit = (id, book) => {
    this.service.edit(id, book);
  };
  handleSearch = (key) => {
    this.service.searchBooks(key);
  };
}

export default LoginController;
