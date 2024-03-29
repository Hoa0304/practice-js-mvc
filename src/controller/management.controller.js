class ManagementController {
    constructor(view, service) {
        this.view = view;
        this.service = service;
        this.view.toggleForm();
    }

}

export default ManagementController
