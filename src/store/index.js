import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', credentials);
        commit('SET_USER', response.data.user);
        commit('SET_TOKEN', response.data.token);
      } catch (error) {
        // Handle error and show message to the user
        console.error('Login failed', error);
        throw new Error('Invalid login credentials or server error.');
      }
    },
    async register({ commit }, userDetails) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', userDetails);
        commit('SET_USER', response.data.user);
        commit('SET_TOKEN', response.data.token);
      } catch (error) {
        console.error('Registration failed', error);
      }
    },
    logout({ commit }) {
      commit('LOGOUT');
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
  }
});
