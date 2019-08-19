<template>
  <div class="todolist mb-5">

    <h1 class="text-center mb-4 h2">{{ h1Text }}</h1>

    <div class="todolist-content bg-light mw-100 mx-auto rounded-lg shadow py-3 px-4">

      <ToDoHeader />

      <ToDoAddForm />

      <ToDoItems />

      <v-pagination
         v-show="(countPage > 1 ? true : false)"
         v-model="currentPage"
         :classes="bootstrapPaginationClasses"
         :page-count="countPage"></v-pagination>

    </div>

  </div>
</template>

<script>
//import firebase from '../../Firebase'

import vPagination from 'vue-plain-pagination'
import ToDoHeader from '@/components/ToDoHeader/index.vue'
import ToDoAddForm from '@/components/ToDoAddForm/index.vue'
import ToDoItems from '@/components/ToDoItems/index.vue'

import {mapState, mapGetters} from 'vuex';

//let db = firebase.firestore();
//let docRef = db.collection('todo_db')

export default {

  name: 'ToDoList',

  data() {
    return {
      currentPage: 1,
      bootstrapPaginationClasses: {
        ul: 'pagination justify-content-center mb-2',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page-link'  
      }
    }
  },

  props: {
    h1Text: String
  },

  components: {
    ToDoHeader,
    ToDoItems,
    ToDoAddForm,
    vPagination
  },

  watch: {
    // отслеживаем пагинацию
    // page - номер выбранной страницы
    currentPage: function(page){
      this.pageTodo(page);
    }
  },

  methods: {
    // заносим активную страницу в store
    // p - номер страницы
    pageTodo: function (p) {
      this.$store.dispatch('pageTodo', p);
    }
  },

  computed: {
    ...mapState({
      // получанием номер страницы из store
      page: state => state.page.current
    }),
    ...mapGetters([

      // всего страниц для списка задач
      // countPage = number
      'countPage',

      // всего задачь в store
      // countTodo = number
      'countTodo',

      // список задач для автивной страницы
      // listTodo = array
      'listTodo'
    ])
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.todolist
  
  &-content
    width 600px

</style>
