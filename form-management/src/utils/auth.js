class Auth {
  constructor() {
    this.authenticated = localStorage.getItem("lambda_user_token")
      ? true
      : false;
  }

  register() {
    this.authenticated = true;
  }

  login(token) {
    localStorage.setItem("lambda_user_token", token);
    this.authenticated = true;
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
