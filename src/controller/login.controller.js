class LoginController {
    constructor(view, service) {
        this.view = view
        this.service = service
        this.service.bindDataChanged(this.onDataChanged)
        this.handleLogin()
        this.view.toggleOptions()
        this.view.logout()
        this.handleDisplayData()
        this.handleShowEditForm();
        this.handleDelete()
    }
    async handleLogin(){
        const user = await this.service.getUsers()
        this.view.login(user)
    }
    async handleShowEditForm(){
        const books = await this.service.getBooks()
        this.view.toggleFormEdit(books);
        
    }
    
    async handleDisplayData() {
        const book = await this.service.getBooks()
        this.view.displayData(book)
    }
    handleDeleteData = (id) => {
        this.id = id
        this.service.deleteBooks(id)
    }
    async handleDelete() {
        await this.handleDisplayData()
        this.view.bindDelete(this.handleDeleteData)
    }
    onDataChanged = (books) => {
        this.view.displayData(books)
    }
}

export default LoginController;
