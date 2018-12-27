import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
    ],
    count: 1,
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');  // 执行一个 state.count++ 的动作
    },
  },
});
