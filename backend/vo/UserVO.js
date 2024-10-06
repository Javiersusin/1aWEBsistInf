// backend/vo/UserVO.js

class UserVO {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // Getters
  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  // Setters
  setUsername(username) {
    this.username = username;
  }

  setPassword(password) {
    this.password = password;
  }
}

module.exports = UserVO;

