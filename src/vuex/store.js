// npm install vuex --save
//store.js
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
//import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types'
//import actions from './actions'

Vue.use(Vuex)

//state(상태) : msg 를 저장하고있다.
//mutations(변이) : msg 를 변경할 수 있는 메소드 제공
const state = {
  msg: 'Hello Vue!',
  title: 'JavaScript Heros',
  items: [{name:'vue.js', checked:false, text:"Vue.js는 사용자 인터페이스 빌드를 위한 오픈 소스 프로그레시브 자바스크립트 프레임워크이다. 뷰를 사용하여 다른 자바스크립트 라이브러리를 사용하는 프로젝트에 통합하는 일은 쉬운데 그 이유는 점진적으로 채택할 수 있게 설계되어 있기 때문이다. 또, Vue는 고급 싱글 페이지 애플리케이션을 지원하는 웹 애플리케이션 프레임워크의 역할을 할 수도 있다."},
          {name:'react.js', checked:false, text:"페이스북에서 나온 사용자 인터페이스 빌드를 위한 자바스크립트 라이브러리"},
          {name:'angualr.js', checked:false, text:"AngularJS는 자바스크립트 기반의 오픈 소스 프론트엔드 웹 애플리케이션 프레임워크의 하나로, 싱글 페이지 애플리케이션 개발 중에 마주치는 여러 문제들을 해결하기 위해 개발되었으며 주로 구글과 개별 커뮤니티, 여러 회사에 의해 유지보수되고 있다. 자바스크립트 구성 요소들은 크로스 플랫폼 모바일 앱을 개발하기 위해 사용되는 프레임워크인 아파치 코도바를 보완한다."}],
  imgSrc: require('@/assets/javascript-logo.png'),
  chkVisible: false,
  newItem: ''

}
const mutations = {
  changeTitle (state,title) {
    state.title = title;
  },
  changeImg (state,value) {
    state.imgSrc =require('@/assets/'+value+'-logo.png');
  },
  addItems (state,name) {
    state.items.push({
      name: name,
      checked: false
    });
  },
}
/*
const mutations = {
  [CHANGE_MSG] (state,msg) {
    state.msg = msg;
  },
  [INCREMENT_COUNTER] (state) {
    state.count ++;
  }
}
*/
//init vuex
export default new Vuex.Store({
  state, mutations, getters//, actions
});
