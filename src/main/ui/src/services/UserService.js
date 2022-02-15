import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:8080/api/users';
const USER_REST_API_URL = 'http://localhost:8080/api/user';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
    
    addUser(firstName, lastName, email){
		return axios.post(USER_REST_API_URL, {firstName: firstName, lastName: lastName, email: email});
	}
}

export default new UserService();