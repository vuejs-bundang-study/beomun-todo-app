<template>
  <div>
    <input
    :value="msg"
    @keyup="changeMessage($event.target.value)"
    @keyup.enter="incrementCounter"></input>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    /*
    computed: {
      msg () {
        return matGetters()
      }
    },
    */
    //matGetters(['getMessage']),
    computed: mapGetters({
      msg: 'getMessage'
    }),
    /*
    methods: {

      changeMsg (ev) {
        this.$store.commit('CHANGE_MSG',ev.target.value)
      }

    }
    */
    methods: mapActions(['changeMessage','incrementCounter'])
  }
</script>
