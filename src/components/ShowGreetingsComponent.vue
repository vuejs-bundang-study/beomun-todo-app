<template>
  <div>
    <h1>{{ msg }}</h1>
    the message was changed {{ count }} times
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    /*
    computed: {

      msg () {
        return this.$store.getters.getMessage
      }

    }
    */
    computed: mapGetters({
      msg : 'getMessage',
      count: 'getCount'
    })
  }
</script>
