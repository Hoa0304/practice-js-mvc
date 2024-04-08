class RegisterController {
  constructor(view, service) {
    this.view = view;
    this.service = service;
    this.view.bindAddUser(this.handleAddUser);
  }
  handleAddUser = (user) => {
    this.service.register(user);
  };
}

export default RegisterController;
