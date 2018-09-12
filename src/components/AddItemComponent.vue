<template>
  <div class="">
    <input type="text" v-model="newItem" @keyup.enter="addItems" placeholder="add js list item">
    <button @click="addItems" type="button" name="button">입력</button>
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
    addItems (ev) {
      this.$store.commit('addItems',this.newItem)
    },
    onRemove (ev) {
      this.$store.commit('addItems',ev.target.value)
    },
    onEditClick () {
      this.$store.commit('addItems',ev.target.value)
    }
  },
  props:['items','value','chkVisible']
}
</script>
