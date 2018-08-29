<template>
  <div id="app">
    <img v-bind:src="imgSrc" width="100" height="100">
    <h1>{{title}}</h1>
    <sample-component/>
    <add-item-component @add="onAdd" @input="onInput" @remove="onRemove" @edit="onEditClick" :items="items" :chkVisible="chkVisible"></add-item-component>
    </br>
    <items-component :items="items" @mouseover="onMouseOver" :chkVisible="chkVisible"></items-component>
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
      items: [{name:'vue.js', checked:false, text:"Vue.js는 사용자 인터페이스 빌드를 위한 오픈 소스 프로그레시브 자바스크립트 프레임워크이다. 뷰를 사용하여 다른 자바스크립트 라이브러리를 사용하는 프로젝트에 통합하는 일은 쉬운데 그 이유는 점진적으로 채택할 수 있게 설계되어 있기 때문이다. 또, Vue는 고급 싱글 페이지 애플리케이션을 지원하는 웹 애플리케이션 프레임워크의 역할을 할 수도 있다."},
              {name:'react.js', checked:false, text:"페이스북에서 나온 사용자 인터페이스 빌드를 위한 자바스크립트 라이브러리"},
              {name:'angualr.js', checked:false, text:"AngularJS는 자바스크립트 기반의 오픈 소스 프론트엔드 웹 애플리케이션 프레임워크의 하나로, 싱글 페이지 애플리케이션 개발 중에 마주치는 여러 문제들을 해결하기 위해 개발되었으며 주로 구글과 개별 커뮤니티, 여러 회사에 의해 유지보수되고 있다. 자바스크립트 구성 요소들은 크로스 플랫폼 모바일 앱을 개발하기 위해 사용되는 프레임워크인 아파치 코도바를 보완한다."}],
      deleteItems: [],
      newItem: '',
      imgSrc: require('@/assets/javascript-logo.png'),
      chkVisible: false
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
