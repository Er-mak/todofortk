<template>
  <div class="todoaddform">
    <b-input-group class="mb-3">
      <b-form-input size="lg" v-model.trim="input_add" v-on:keyup.enter="inputNewTodo($event)" placeholder="Новая задача"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" v-on:click="inputNewTodo">
          <font-awesome-icon icon="plus" />
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: 'todoaddform',

  data(){
    return {
      input_add: ''
    }
  },

  methods: {
    inputNewTodo: function(el){
      let value = this.input_add;
      if(value != ""){
        this.$store.dispatch('addTodo', value);
        this.input_add = '';
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
