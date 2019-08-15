<template>
  <div class="todoitems">
    <b-list-group class="mb-1">
      <b-list-group-item v-for="(todo, i) in listTodo" class="todo-item">
        <div class="d-flex">
          <div class="text-truncate pr-3 w-100">
            {{ ((activePage-1)*10)+i+1 }}) {{ todo.name }}
          </div>
          <div class="text-nowrap todo-item-btns">
            <b-link class="mr-3 text-success">
              <font-awesome-icon icon="pen" />
            </b-link>
            <b-link class="text-danger" v-on:click="removeTodo(todo.id)">
              <font-awesome-icon icon="times" />
            </b-link>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
    <p class="mb-3">Всего задач: <strong>{{ countTodo }}</strong></p>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
  name: 'todoitems',

  methods: {
    removeTodo: function(todoId){
      this.$store.commit('removeTodo', todoId);
    }
  },

  computed: {
    ...mapState({
      //countTodo: state => state.todolist.todo.length
    }),
    ...mapGetters([
      'activePage',
      'countTodo',
      'listTodo'
    ])
  }
}

</script>

<style scoped lang="stylus">
.todo-item

  &-btns
    display none

  &:hover
    background-color #f5f5f5

    .todo-item-btns
      display block
</style>
