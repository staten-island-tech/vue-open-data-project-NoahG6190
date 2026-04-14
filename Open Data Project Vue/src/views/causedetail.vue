<template>
  <div class="page">
    <button @click="router.back()">← Back</button>

    <h1>{{ record.leading_cause }}</h1>
    <p>Year: {{ record.year }}</p>
    <p>Sex: {{ record.sex }}</p>
    <p>Race / Ethnicity: {{ record.race_ethnicity }}</p>
    <p>Deaths: {{ record.deaths }}</p>
    <p>Death Rate: {{ record.death_rate }}</p>
    <p>Age Adjusted Death Rate: {{ record.age_adjusted_death_rate }}</p>

    <div class="charts" v-if="record && Object.keys(record).length">
      <DeathsBarChart :record="record" />
      <DoughnutChart :record="record" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import DeathsBarChart from '@/components/deathbarchart.vue'
import DoughnutChart from '@/components/doughnutchart.vue'

const record = ref({})
const router = useRouter()
const route = useRoute()

onMounted(() => {
  const id = route.params.id

  const data = JSON.parse(localStorage.getItem('records')) || []

  record.value = data[id] || {}
})
</script>

<style scoped>
.page {
  width: 90%;
  max-width: 600px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

button {
  background: none;
  border: none;
  color: #c0392b;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  text-align: left;
}

h1 {
  font-size: 1.6rem;
  color: #1a1a2e;
  margin: 0;
}

p {
  margin: 0;
  color: #333;
}

.charts {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 16px;
}
</style>