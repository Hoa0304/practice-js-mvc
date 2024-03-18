import User from "../model/users.model";
import { createToast } from "../views/components/handleToast";
import api from "../api/books";
class BookService {
    constructor() {
        this.books = []
        this.users = []
    }
    async getUsers() {
        try{
            let {data} = await api.get('/users');
            if(data){
                data = await data.map((user) => new User(user));
                this.users = data;
                console.log(this.users);
                return this.users;
            }
          }catch (error) {
            createToast('error', error);
          }
    }
}

export default BookService;
