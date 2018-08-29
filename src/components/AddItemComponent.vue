<template>
  <div class="">
    <input type="text" v-model="newItem"  @input="onInput" @keyup.enter="onAdd" placeholder="add js list item">
    <button @click="onAdd" type="button" name="button">입력</button>
    <button @click="onEditClick" type="button" name="button">편집</button>
    <transition name="fade"><button @click="onRemove" type="button" name="button" v-if="chkVisible">삭제</button></transition>
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
    },
    onEditClick : function (event) {
      this.$emit('edit',event)
    }
  },
  props:['items','value','chkVisible']
}
</script>
