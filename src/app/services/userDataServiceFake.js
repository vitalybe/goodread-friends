var axios = require('axios');

class UserDataServiceFake {
     constructor() {
          
     }

     createUser(registrationData) {
        return new Promise((resolve, reject) => resolve({data: {fakeUser: "fakePassword"}}));
     }

     getUser() {
         return new Promise((resolve, reject) => resolve());
     }
}

module.exports = new UserDataServiceFake();