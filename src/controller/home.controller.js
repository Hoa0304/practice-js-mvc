class HomeController {
    constructor(view, service) {
        this.view = view
        this.service = service
        this.view.changeQuote()
    }
}

export default HomeController
