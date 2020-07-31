import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: []
  },
  mutations: {
    UPDATE_PROJECTS(state, projects) {
      state.projects = projects;
    }
  },
  actions: {
    FETCH_PROJECTS({ commit }) {
      return fetch(
        "http://my-json-server.typicode.com/alexbirvik/softlex_test/db"
      )
        .then(res => {
          // console.log(res);
          return res.json();
        })
        .then(res => {
          // console.log(res);
          commit("UPDATE_PROJECTS", res.projects);
          return res;
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    }
  }
});
