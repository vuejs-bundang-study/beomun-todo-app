<template>
  <div class="">
    <input type="text" v-model="value" @input="onInput" @keyup.enter="onClick"> <button @click="onClick" type="button" name="button">입력</button>
     <div class="">
      new Item : {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddItemComponent',
  methods: {
    /* add new item */
    onClick: function (event) {

      var text = this.value.trim();
      if( text ) {
        this.items.push({name: text,checked: false})
      }
    },
    onInput: function (event) {
      //event trigger
      this.$emit('input',event.target.value)
    }
  },
  props:['items','value']
}
</script>
