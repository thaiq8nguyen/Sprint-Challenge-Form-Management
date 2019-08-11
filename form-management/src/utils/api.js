import axios from "axios";
class API {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:5000/api/",
      headers: {
        authorization: localStorage.getItem("lambda_user_token") || ""
      }
    });
  }

  register(newUser) {
    this.client.post("register", newUser);
  }

  login(credential) {
    return this.client.post("login", credential);
  }
  getMealCourses() {
    return this.client.get("restricted/data");
  }
}

export default new API();
