<template>
  <div class="todolistpage">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ToDoList msg="Welcome to ToDoList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'todolistpage',
  components: {
    ToDoList
  }
}
</script>
