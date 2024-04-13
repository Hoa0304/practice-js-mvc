import User from '../model/users.model';
import { createToast } from '../views/components/handleToast';
import api from '../api/books';
class RegisterService {
  constructor() {
    this.user = [];
  }
  async getUsers() {
    try {
      let { data } = await api.get('/users');
      if (data) {
        data = await data.map((user) => new User(user));
        this.users = data;
        console.log(this.users);
        return this.users;
      }
    } catch (error) {
      createToast('error', error);
    }
  }

  async register(user) {
    console.log(user);
    try {
      let { data } = await api.post('/users', user);
      if (data) {
        this.user = data;
        console.log(this.user);
        createToast('info', 'Successfully registered');
        return this.user;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default RegisterService;
