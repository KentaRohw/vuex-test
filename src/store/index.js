import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const savedLists = localStorage.getItem('todo-lists');

const state = {
    items: savedLists ? JSON.parse(savedLists) : [
      {is_do: false, title: 'タスク1'},
      {is_do: true, title: 'タスク2'},
      {is_do: false, title: 'タスク3'}
    ]
};

const actions = {
    [types.ADD_TASK] ({ commit }, title) {
        let newItem = {
            title: title,
            is_do: false
        }
        commit({
            type: types.ADD_TASK,
            data: newItem
        })
    },
    [types.DONE_TASK] ({ commit }, item) {
        commit({
            type: types.DONE_TASK,
            data: item
        })
    }
};
  
const mutations = {
    [types.ADD_TASK] (state, payload) {
        state.items.push(payload.data);
    },
    [types.DONE_TASK] (state, payload) {
        let index = state.items.indexOf(payload.data)
        state.items[index].is_do = !payload.data.is_do;
    }
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
});

store.subscribe((mutation, { items }) => {
  localStorage.setItem('todo-lists', JSON.stringify(items));
});

export default store;