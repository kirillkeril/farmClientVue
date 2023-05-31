import api from "@/api/api";
import {ApiError} from "@/api/apiError";
class UserService {
    async getAll() {

    }
    async getById() {

    }
    async register(user) {
        let res;
        let data;
        try {
            res = await api.post('/users/register', user)
                .then(() => {
                        data = res.data;
                        return data;
                    })
                .catch((e) => {
                    data = e.response.data;
                    return data;
                })
            return res;
        } catch (e) {
            throw new Error(e.message);
        }
    }
    async login() {

    }
    async logout(){

    }
}

export default new UserService();