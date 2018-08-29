<template>
  <div class="">
    <input type="text" v-bind:value="title"  @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'ChangeTitleComponent',
  methods: {
    /* add new item */
    onInput: function (event) {
      var text;
      
      text = event.target.value.trim();
      //event trigger ( call add in parentComponent )
      this.$emit('change', text);
    }
  },
  props: ['title']
}
</script>
