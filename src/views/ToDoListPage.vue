<template>
  <b-container>
    <div class="todolistpage">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <ToDoList h1Text="Список задач"/>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList/index.vue'

export default {
  name: 'todolistpage',
  components: {
    ToDoList
  }
}
</script>
