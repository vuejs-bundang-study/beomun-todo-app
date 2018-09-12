<template>
  <div>
    <item-component v-bind:key="item.name" v-bind:item="item" v-for="item in items" @mouseover="mouseOver" :chkVisible="chkVisible"></item-component>
  </div>
</template>

<script>

import ItemComponent from './ItemComponent'

import { mapGetters } from 'vuex'

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
  /*
  props:['items','chkVisible']
 */
 computed: mapGetters({
   items : 'getItems',
   chkVisible : 'getChkVisible',
 }),
}
</script>
