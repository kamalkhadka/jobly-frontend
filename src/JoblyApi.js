import axios from "axios";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    let _token = localStorage.getItem("jobly_token");

    paramsOrData = { _token, ...paramsOrData };

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (
        await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData,
        })
      ).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompanies(search) {
    let res = await this.request("companies", { search });
    return res.companies;
  }

  static async getJobs() {
    let res = await this.request("jobs");
    return res.jobs;
  }

  static async login(credentials) {
    let res = await this.request("login", credentials, "post");
    return res.token;
  }

  static async signup(data) {
    let res = await this.request("users", data, "post");
    return res.token;
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateCurrentUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
  static async applyToJob(id) {
    let res = await this.request(`jobs/${id}/apply`, {}, "post");
    return res.message;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
}

export default JoblyApi;
