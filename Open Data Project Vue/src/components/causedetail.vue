<template>
  <div class="page">
    <router-link to="/">← Back</router-link>
    <h1>{{ record.leading_cause }}</h1>
    <p>Year: {{ record.year }}</p>
    <p>Sex: {{ record.sex }}</p>
    <p>Race / Ethnicity: {{ record.race_ethnicity }}</p>
    <p>Deaths: {{ record.deaths }}</p>
    <p>Death Rate: {{ record.death_rate }}</p>
    <p>Age Adjusted Death Rate: {{ record.age_adjusted_death_rate }}</p>

    <DeathsBarChart :record="record" />
  </div>
</template>

<script setup>
import { ref, onMounted,  } from 'vue'
import DeathsBarChart from './deathbarchart.vue'

const record = ref({})

onMounted(() => {
  record.value = history.state?.record || {}
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

a {
  color: #c0392b;
  font-weight: bold;
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
</style>
