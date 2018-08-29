<template lang="html">
  <li :class="{ 'removed':item.checked }">
    <div class="checkbox">
      <label @mouseover="mouseOver">
        <transition name="fade"><input type="checkbox" v-model="item.checked" v-if="chkVisible"></transition>
        <div @click="onClick" style="display:inline" >{{ item.name }}</div>
      </label>
      <div><textarea v-if="show" name="name" rows="8" cols="80">{{ item.text }}</textarea></div>
    </div>
  </li>
</template>

<script>
export default {
  data: function () {
    return {
      show: ''
    }
  },
  methods: {
    /* label mouseOver 이벤트 */
    mouseOver: function (event) {
      var index = this.item.name.indexOf('.js');
      if( index > 0) {
          this.$emit('mouseover',this.item.name.substr(0,index));
      }else{
        this.$emit('mouseover',this.item.name);
      }
    },
    /* 해당 item의 내용을 보여주는 event */
    onClick: function () {
      if (this.chkVisible) return
      this.show = !this.show;
    },
    /* 해당 item의 내용을 수정할때 발생하는 event */
    onInput: function (event) {
      alert(this.target.event)
    }
  },

  props: ['item','chkVisible']
}
</script>

<style lang="css">
  .removed {
    color: red;
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
