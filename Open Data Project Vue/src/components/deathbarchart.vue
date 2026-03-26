<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const props = defineProps({
  record: {
    type: Object,
    required: true,
  },
})

const chartData = computed(() => {
  return {
    labels: ['Death Rate', 'Age Adjusted Death Rate'],
    datasets: [
      {
        label: 'Rate',
        data: [props.record.death_rate, props.record.age_adjusted_death_rate],
        backgroundColor: ['#1a1a2e', '#c0392b'],
      },
    ],
  }
})

const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Death Rate vs Age Adjusted Death Rate',
    },
  },
}
</script>
