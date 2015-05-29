var axios = require('axios');

class UserDataService {
     constructor() {
          
     }

     createUser(registrationData) {
        return axios.put('https://goodreads-friends.firebaseio.com/users.json', registrationData);
     }

     getUser() {
        return axios.get('https://goodreads-friends.firebaseio.com/users.json');
     }
}

module.exports = new UserDataService();