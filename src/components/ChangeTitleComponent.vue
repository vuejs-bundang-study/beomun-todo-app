<template>
  <div class="">
    <input type="text" :value="title" @keyup="changeTitle">
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'ChangeTitleComponent',
  computed: mapGetters({
    title : 'getTitle',
  }),
  methods: {
    changeTitle (ev) {
      this.$store.commit('changeTitle',ev.target.value)
    }
  }

  /*
  methods: {
    // add new item
    onInput: function (event) {
      var text;

      text = event.target.value.trim();
      //event trigger ( call add in parentComponent )
      this.$emit('change', text);
    }
  },
  props: ['title']
  */
}
</script>
