<template>
  <div id="app">
      <ul>
          <item v-for="item in items" :item="item"></item>
      </ul>
      <div>
          <input type="text" v-model="inputTitle">
          <button @click="ADD_TASK(inputTitle)">追加</button>
      </div>
      <commit-chart :width="900" :height="300" :chartData="chartData"></commit-chart>
      <button @click="fillData">ランダム</button>
  </div>
</template>
<script>

import Item from './components/Item'
import CommitChart from './components/CommitChart'
import { mapState,mapActions } from 'vuex'
import * as types from './store/mutation-types'

export default {
    name: 'app',
    components: { 
      Item,
      CommitChart
    },
    data () {
        return {
            inputTitle: "",
            chartData: {}
        }
    },
    computed: {
        ...mapState([
          'items'
        ])
    },
    methods: {
        ...mapActions([
            types.ADD_TASK
        ]),
        getRandomInt() {
          return Math.floor(Math.random() * 100)
        },
        fillData () {
          this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
              {
                label: 'GitHub Commits',
                backgroundColor: '#f87979',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }
            ]
          }
        }
    },
    created() {
      this.fillData()
    }
}
</script>