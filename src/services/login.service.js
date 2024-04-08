import User from "../model/users.model";
import api from '../api/books';
import { createToast } from "../views/components/handleToast";

class LoginService {
    constructor() {
        this.users = []
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
}

export default LoginService;
