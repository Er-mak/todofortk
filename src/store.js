import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    page: {
      current: 1,
      maxitem: 10
    },
    todolist: {
      todo: [
        {id: 'id_1', name: 'todo 1', done: false},
        {id: 'id_2', name: 'todo 2', done: true},
        {id: 'id_3', name: 'todo 3', done: false},
        {id: 'id_4', name: 'todo 4', done: false},
        {id: 'id_5', name: 'todo 5', done: false},
        {id: 'id_6', name: 'todo 6', done: false},
        {id: 'id_7', name: 'todo 7', done: false},
        {id: 'id_8', name: 'todo 8', done: false},
        {id: 'id_9', name: 'todo 9', done: false},
        {id: 'id_10', name: 'todo 10', done: false},
        {id: 'id_11', name: 'todo 11', done: false},
        {id: 'id_12', name: 'todo 12', done: false},
        {id: 'id_13', name: 'todo 13', done: false},
        {id: 'id_14', name: 'todo 14', done: false},
        {id: 'id_15', name: 'todo 15', done: false},
        {id: 'id_16', name: 'todo 16', done: false},
        {id: 'id_17', name: 'todo 17', done: false},
        {id: 'id_18', name: 'todo 18', done: false},
        {id: 'id_19', name: 'todo 19', done: false},
        {id: 'id_20', name: 'todo 20', done: false},
        {id: 'id_21', name: 'todo 21', done: false},
        {id: 'id_22', name: 'todo 22', done: false},
        {id: 'id_23', name: 'todo 23', done: false},
        {id: 'id_24', name: 'todo 24', done: false},
        {id: 'id_25', name: 'todo 25', done: false},
        {id: 'id_26', name: 'todo 26', done: false},
        {id: 'id_27', name: 'todo 27', done: false}
      ]
    }
  },

  getters: {
    // получение числа активной страницы
    activePage: state => state.page.current,
    // максимальногое количество задач на странице
    maxitem: state => state.page.maxitem,

    // количество страниц
    countPage: (state, getters) => Math.ceil(getters.countTodo / state.page.maxitem),

    // количество задач
    countTodo: state => state.todolist.todo.length,

    // вывод задач на страницу по максимальному значению
    listTodo: state => {
      let {current, maxitem} = state.page;
      let start = ((current-1)*10);
      return state.todolist.todo.slice(start, start+maxitem);
    }
  },

  mutations: {
    // обновляем активную страницу списка задач (пагинация)
    pageTodo(state, page){
      state.page.current = page;
    },

    // удаление задачи из списка
    removeTodo(state, i){
      state.todolist.todo.splice(i, 1);
    },

    // добавление новой задачи
    addTodo (state, todo) {
      state.todolist.todo.unshift({
        id: 'id'+(Date.now()),
        name: todo,
        done: false
      });
      if( state.page.current != 1) state.page.current = 1;
    },

    // установка статуса выполнения
    doneTodo (state, todoId) {
      let done = state.todolist.todo[todoId].done;
      done = (done ? false : true);
    }
  },

  actions: {

    // событие смены активной страницы
    pageTodo ({commit}, page) {
      commit('pageTodo', page);
    },

    // событие удаление задачи из списка
    removeTodo ({commit}, i) {
      commit('removeTodo', i);
    },

    // событие добавления новой задачи
    addTodo ({commit}, todo) {
      commit('addTodo', todo);
    },

    // событие статуса выполнения
    doneTodo ({commit}, todoId) {
      commit('doneTodo', todoId);
    }

  }

})
