<template>
  <ul>
    <div v-for="item in items">
      <input type="checkbox" v-bind:checked="item.checked">{{item.name}}
    </div>
  </ul>
</template>

<script>
export default {
  name: 'ItemsComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['items']
}
</script>
