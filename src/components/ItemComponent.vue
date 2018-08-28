<template lang="html">
  <li :class="{ 'removed':item.checked }">
    <div class="checkbox">
      <label @mouseover="mouseOver">
        <input type="checkbox" v-model="item.checked">{{ item.name }}
      </label>
    </div>
  </li>
</template>

<script>
export default {
  methods: {
    mouseOver: function (event) {
      var index = this.item.name.indexOf('.js');
      if( index > 0) {
          this.$emit('mouseover',this.item.name.substr(0,index));
      }
    }
  },
  props: ['item']
}
</script>

<style lang="css">
  .removed {
    color: gray;
  }
  .removed span {
    text-decoration: line-through;
  }
  li {
    list-style-type: none;
  }
  li span {
    margin-left: 5px;
  }
</style>
