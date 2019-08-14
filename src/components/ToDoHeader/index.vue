<template>
  <div class="todoheader">
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
  </div>
</template>

<script>
export default {
  name: 'todoheader',
}
</script>

<style scoped lang="stylus">
</style>
