<template>
  <div class="todoitems">
    <b-list-group class="mb-1">
      <b-list-group-item v-for="(todo, i) in listTodo" class="todo-item pl-3">
        <div class="d-flex">
          <div class="text-truncate pl-1 pr-3 w-100">
            <b-form-checkbox
               name="checkbox-(((activePage-1)*maxitem)+i)"
               v-model="todo.done"
               v-on:click="doneTodo((((activePage-1)*maxitem)+i))"
               >
               <span 
                 v-bind:class="{'todo-item-done': todo.done}">
                {{ ((countTodo-i)-(activePage-1)*maxitem) }}) {{ todo.name }}
               </span>
            </b-form-checkbox>
          </div>
          <div class="text-nowrap todo-item-btns">
            <b-link class="mr-3 text-success">
              <font-awesome-icon icon="pen" />
            </b-link>
            <b-link class="text-danger" v-on:click="removeTodo((((activePage-1)*maxitem)+i))">
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
      this.$store.dispatch('removeTodo', todoId);
    },

    doneTodo: function(todoId){
      this.$store.dispatch('doneTodo', todoId);
    }
  },

  computed: {
    ...mapState({
      //countTodo: state => state.todolist.todo.length
    }),
    ...mapGetters([
      'maxitem',
      'activePage',
      'countPage',
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

  &-done
    text-decoration line-through

</style>
