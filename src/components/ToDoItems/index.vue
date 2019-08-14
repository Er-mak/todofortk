<template>
  <div class="todoitems">
    <b-list-group class="mb-4">
      <b-list-group-item v-for="n in 10" class="todo-item">
        <div class="d-flex">
          <div class="text-truncate pr-3">
            {{ n }}) Cras justo odio asdfkja s;dfkj askldfj a;slkdfj;salkdjf ;askdfj ;salk dfj;asd fj;sakldf j;salkdjf ;aslkdjf ;laskjd f;aslkdj f;lsak jdf;laskdjf
          </div>
          <div class="text-nowrap todo-item-btns">
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
  </div>
</template>

<script>
export default {
  name: 'todoitems'
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
