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
 
    <DeathsBarChart v-if="record.death_rate" :record="record" />
  </div>
</template>
 
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DeathsBarChart from '@/components/deathbarchart.vue'
import DoughnutChart from '@/components/doughnutchart.vue'

const route = useRoute()
 
const record = computed(() => {
  return records[route.params.id] || {}
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
