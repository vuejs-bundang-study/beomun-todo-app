<template>
  <div class="">
    <input type="text" v-model="newItem"  @input="onInput" @keyup.enter="onAdd" placeholder="add js list item">
    <button @click="onAdd" type="button" name="button">입력</button>
    <button @click="onRemove" type="button" name="button">선택된 항목 삭제</button>
  </div>
</template>

<script>
export default {
  name: 'AddItemComponent',
  data: function () {
    return {
      newItem: ''
    }
  },
  methods: {
    /* add new item */
    onAdd: function () {
      var text;

      text = this.newItem.trim();
      if( text ) {
        //event trigger ( call add in parentComponent )
        this.$emit('add', this.newItem);
        this.newItem = '';
      }
    },
    onRemove: function (event) {
      this.$emit('remove', event);
    },
    onInput: function (event) {
      //event trigger ( call input in parentComponent )
      this.$emit('input',event.target.value)
    }
  },
  props:['items','value']
}
</script>
