<script>
import { Bar, mixins } from 'vue-chartjs'

export default Bar.extend({
  mixins: [mixins.reactiveProp],
  props: ["chartData"],
  mounted () {
    this.renderChart(this.chartData)
  }
})
</script>