<template>
  <div class="todoaddform">
    <b-input-group class="mb-3">
      <b-form-input size="lg" placeholder="Новая задача"></b-form-input>
      <b-input-group-append>
        <b-button variant="success">
          <font-awesome-icon icon="plus" />
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: 'todoaddform',
}
</script>

<style scoped lang="stylus">
</style>
