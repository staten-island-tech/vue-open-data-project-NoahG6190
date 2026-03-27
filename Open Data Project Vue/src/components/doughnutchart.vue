<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Title, Legend)

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
        data: [Number(props.record.death_rate), Number(props.record.age_adjusted_death_rate)],
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
