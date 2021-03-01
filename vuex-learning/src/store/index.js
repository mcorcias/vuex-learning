import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    counter: 0,
    colorCode: 'red',
  },
  mutations: {
    increasCounter(state, randonNumber) {
      state.counter += randonNumber;
    },
    decreasCounter(state, randonNumber) {
      state.counter -= randonNumber;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    },
  },
  actions: {
    increasCounter({ commit }) {
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then((res) => commit('increasCounter', res.data));
    },
    decreasCounter({ commit }) {
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then((res) => commit('decreasCounter', res.data));
    },
  },
  getters: {
    counterSquared(state) {
      return Math.pow(state.counter, 2);
    },
  },
  modules: {},
});
