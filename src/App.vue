<template>
  <div id="app">
    <img v-bind:src="imgSrc" width="100" height="100">
    <h1>{{title}}</h1>
    <sample-component/>
    <add-item-component @add="onAdd" @input="onInput" @remove="onRemove" :items="items"></add-item-component>
    </br>
    <items-component :items="items" @mouseover="onMouseOver"></items-component>
    </br>
    <change-title-component :title="title" @change="onTitleChange"></change-title-component>
  </div>
</template>

<script>
import SampleComponent from './components/SampleComponent'
import ItemsComponent from './components/ItemsComponent'
import AddItemComponent from './components/AddItemComponent'
import ChangeTitleComponent from './components/ChangeTitleComponent.vue'

export default {
  name: 'App',
  components: {
    SampleComponent,
    ItemsComponent,
    AddItemComponent,
    ChangeTitleComponent
  },
  data () {
    return {
      title: 'JavaScript Heros',
      items: [{name:'vue.js', checked:true},
              {name:'react.js', checked:false},
              {name:'angualr.js', checked:false}],
      deleteItems: [],
      newItem: '',
      imgSrc: require('@/assets/javascript-logo.png')
    }
  },
  methods: {
    onAdd: function (name) {
      this.items.push({
        name: name,
        checked: false
      });
    },
    onRemove: function (event) {

      for( var i=0; i<this.items.length; i++ ){
        if ( this.items[i].checked ){
          this.items.splice(i,1);
          i--;
        }
      }

    },
    onInput: function (value) {

      //alert(event.target.value)
      //this.newItem = event.target.value
    },
    /* 타이틀 변경해주는 이벤트 */
    onTitleChange: function (value) {
      this.title = value
    },
    /* 아이템 리스트를 선택하여 상단 이미지를 바꿔주는 이벤트 */
    onMouseOver: function (value) {
      this.imgSrc = require('@/assets/'+value+'-logo.png');
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
