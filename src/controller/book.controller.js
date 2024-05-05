class LoginController {
  constructor(view, service) {
    this.view = view;
    this.service = service;
    this.flag();
    this.service.bindDataChanged(this.onDataChanged);
    this.handleSearchData();
  }
  handleAddUser = (user) => {
    this.service.register(user);
  };
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
  flag() {
    const paths = window.location.pathname;
    console.log(paths);
    switch (paths) {
      case '/':
        this.handleLogin();
        break;
      case '/register':
        this.view.bindAddUser(this.handleAddUser);
        break;
      case '/home':
        this.view.changeQuote();
        this.view.toggleOptions();
        this.handleDisplayData();

        this.view.logout();
        this.view.handleToggleModal();
        break;
      case '/management':
        this.handleDisplayData();
        this.view.toggleForm();

        this.view.bindAddBook(this.handleAddBook);
        this.view.logout();
        this.handleDelete();
        this.handleShowEditForm();
        break;
    }
  }
}

export default LoginController;
