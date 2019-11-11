import Vue from "vue";

export default {
  getDash: () => {
    let username = "jmarioguedes@gmail.com";
    let password = "dBUOb&6LQ2Ss";
    return Vue.http
      .get(`http://45.162.230.44/api/v1/dashboard?page=1&per_page=10`,{
        headers: {
          Authorization: "Basic " + btoa(`${username}:${password}`)
        }
      })
      .then(response => {
        return response;
      });
  }
};
