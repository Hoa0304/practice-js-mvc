class LoginController {
  constructor(view, service) {
    this.view = view;
    this.service = service;
    this.handleLogin();
    this.view.toggleOptions();
    this.view.logout();
    this.handleDisplayData();
    this.handleDelete();
    this.service.bindDataChanged(this.onDataChanged);
    this.handleShowEditForm();
  }
  async handleLogin() {
    const user = await this.service.getUsers();
    this.view.login(user);
  }
  async handleShowEditForm() {
    const books = await this.service.getBooks();
    this.view.toggleFormEdit(books);
  }

  async handleDisplayData() {
    const book = await this.service.getBooks();
    this.view.displayData(book);
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
}

export default LoginController;
