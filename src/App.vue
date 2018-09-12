<template>
  <div id="app">
    <img v-bind:src="imgSrc" width="100" height="100">
    <h1>{{title}}</h1>
    <sample-component/>
    <add-item-component></add-item-component>
    </br>
    <items-component :items="items" @mouseover="onMouseOver" :chkVisible="chkVisible"></items-component>
    </br>
    <change-title-component :title="title"></change-title-component>
  </div>
</template>

<script>
import SampleComponent from './components/SampleComponent'
import ItemsComponent from './components/ItemsComponent'
import AddItemComponent from './components/AddItemComponent'
import ChangeTitleComponent from './components/ChangeTitleComponent.vue'
import store from './vuex/store.js'

import { mapGetters } from 'vuex'

export default {

  name: 'App',
  components: {
    SampleComponent,
    ItemsComponent,
    AddItemComponent,
    ChangeTitleComponent
  },
  store, //root instance 에 store option  제공 ( child component 에서 사용가능 )
  computed: mapGetters({
    title : 'getTitle',
    items: 'getItems',
    imgSrc: 'getImgSrc',
    chkVisible: 'getChkVisible',
  }),
  data () {
    return {

    }
  },
  methods: {

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

    /* 아이템 리스트를 선택하여 상단 이미지를 바꿔주는 이벤트 */
    onMouseOver: function (value) {
      this.imgSrc = require('@/assets/'+value+'-logo.png');
    },
      /* 체크박스를 보여주는 이벤트  */
    onEditClick: function (event) {
      this.chkVisible = !this.chkVisible;
      if( !this.chkVisible ){
        for (var key in this.items ) {
          this.items[key].checked = false
        }
      }
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
