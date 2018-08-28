<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{title}}</h1>
    <sample-component/>
    <add-item-component :items="items" :value="newItem"></add-item-component>
    <items-component :items="items"></items-component>
  </div>
</template>

<script>
import SampleComponent from './components/SampleComponent'
import ItemsComponent from './components/ItemsComponent'
import AddItemComponent from './components/AddItemComponent'

export default {
  name: 'App',
  components: {
    SampleComponent,
    ItemsComponent,
    AddItemComponent
  },
  data () {
    return {
      title: 'JavaScript Heros',
      items: [{name:'vue.js', checked:false},
              {name:'react.js', checked:false},
              {name:'angualr.js', checked:false}],
      newItem: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
