<template>
  <div class="todolist">

    <h1 class="text-center mb-4 h2">{{ msg }}</h1>

    <div class="bg-light w-75 mx-auto rounded-lg shadow p-3">
      <p>ToDo list</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.text
  color red
</style>
