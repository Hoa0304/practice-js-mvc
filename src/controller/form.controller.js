class FormController {
    constructor(view, service) {
        this.view = view;
        this.service = service;
        this.view.toggleFormEdit();
    }
}

export default FormController