<template>
  <div id="app">
      <ul>
          <item v-for="item in items" :item="item"></item>
      </ul>
      <div>
          <input type="text" v-model="inputTitle">
          <button @click="ADD_TASK(inputTitle)">追加</button>
      </div>
  </div>
</template>
<script>

import Item from './components/Item'
import { mapState,mapActions } from 'vuex'
import * as types from './store/mutation-types'

export default {
    name: 'app',
    components: { Item },
    data () {
        return {
            inputTitle: "",
        }
    },
    computed: {
        ...mapState(['items'])
    },
    methods: {
        ...mapActions([
            types.ADD_TASK
        ])
    }
}
</script>