class LoginController {
    constructor(view, service) {
        this.view = view
        this.service = service
        this.handleLogin()
        this.view.toggleOptions()
        this.view.logout()
        this.handleDisplayData()
    }
    async handleLogin(){
        const user = await this.service.getUsers()
        this.view.login(user)
    }

    
}

export default LoginController;
