<template>
  <div>
    <item-component v-bind:key="item.text" v-bind:item="item" v-for="item in items" @mouseover="mouseOver"></item-component>
  </div>
</template>

<script>

import ItemComponent from './ItemComponent'

export default {
  name: 'ItemsComponent',
  components: {
    ItemComponent
  },
  methods: {
    mouseOver: function (value) {
      this.$emit("mouseover",value);
    }
  },
  props:['items']

}
</script>
