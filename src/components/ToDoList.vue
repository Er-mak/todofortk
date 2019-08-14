<template>
  <div class="todolist mb-5">

    <h1 class="text-center mb-4 h2">{{ msg }}</h1>

    <div class="todolist-content bg-light mw-100 mx-auto rounded-lg shadow p-3">

      <div class="row">
        <div class="col-6">

          <h3 class="mb-3">
            Задачи
          </h3>

        </div>
        <div class="col-6">

          <div class="text-right">
            <b-dropdown variant="link" toggle-class="text-decoration-none" right no-caret>
              <template slot="button-content">
                <font-awesome-icon icon="ellipsis-h" class="text-secondary" />
                <span class="sr-only">Sort</span>
              </template>
              <b-dropdown-item href="#" active>По убыванию</b-dropdown-item>
              <b-dropdown-item href="#">По возрастанию</b-dropdown-item>
            </b-dropdown>
          </div>

        </div>
      </div>

      <b-input-group class="mb-3">
        <b-form-input size="lg" placeholder="Новая задача"></b-form-input>
        <b-input-group-append>
          <b-button variant="success">
            <font-awesome-icon icon="plus" />
          </b-button>
        </b-input-group-append>
      </b-input-group>

      <b-list-group class="mb-4">
        <b-list-group-item v-for="n in 10">
          <div class="d-flex">
            <div class="text-truncate pr-3">
              {{ n }}) Cras justo odio asdfkja s;dfkj askldfj a;slkdfj;salkdjf ;askdfj ;salk dfj;asd fj;sakldf j;salkdjf ;aslkdjf ;laskjd f;aslkdj f;lsak jdf;laskdjf
            </div>
            <div class="text-nowrap">
              <b-link class="mr-3 text-success">
                <font-awesome-icon icon="pen" />
              </b-link>
              <b-link class="text-danger">
                <font-awesome-icon icon="times" />
              </b-link>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>

      <p class="d-none">Current page: {{ currentPage }}</p>
      <v-pagination
         v-model="currentPage"
         :classes="bootstrapPaginationClasses"
         :page-count="30"></v-pagination>

    </div>

  </div>
</template>

<script>
import vPagination from 'vue-plain-pagination'

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
    msg: String
  },

  components: {
    vPagination
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.todolist
  
  &-content
    width 600px

</style>
