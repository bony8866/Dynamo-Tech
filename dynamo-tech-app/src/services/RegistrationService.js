import axios from 'axios';
class RegistrationService {
    url="http://localhost:8080/api/createUser";
    registerUser = (userDataObj) => {
        return axios.post(this.url, userDataObj);
    }
}
export default new RegistrationService();