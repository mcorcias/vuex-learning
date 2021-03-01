import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increasCounter(state, randonNumber) {
      state.counter += randonNumber;
    },
    decreasCounter(state) {
      state.counter--;
    },
  },
  actions: {
    increasCounter({ commit }) {
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then((res) => commit('increasCounter', res.data));
    },
  },
  modules: {},
});
