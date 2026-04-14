
<template>
  <div class="detail">
    <router-link to="/"> Back to List</router-link>
    <h1>{{ record.leading_cause }}</h1>
    <h2>{{ record.year }}</h2>
    <p>Sex: {{ record.sex }}</p>
    <p>Race / Ethnicity: {{ record.race_ethnicity }}</p>
    <p>Deaths: {{ record.deaths }}</p>
    <p>Death Rate: {{ record.death_rate }}</p>
    <p>Age Adjusted Death Rate: {{ record.age_adjusted_death_rate }}</p>
<<<<<<< HEAD:Open Data Project Vue/src/views/causelist.vue
 
    <div class="charts">
      <DeathsBarChart :record="record" />
      <DoughnutChart :record="record" />
    </div>
=======
>>>>>>> parent of 675b9d6 (new code):Open Data Project Vue/src/components/causedetail.vue
  </div>
</template>
 
<script setup>
import { ref, onMounted } from 'vue'
<<<<<<< HEAD:Open Data Project Vue/src/views/causelist.vue
import DeathsBarChart from '@/components/deathbarchart.vue'
import DoughnutChart from '@/components/doughnutchart.vue'
 
=======

>>>>>>> parent of 675b9d6 (new code):Open Data Project Vue/src/components/causedetail.vue
const record = ref({})
 
onMounted(() => {
  record.value = history.state?.record || {}
})
</script>
 
<style scoped>
<<<<<<< HEAD:Open Data Project Vue/src/views/causelist.vue
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
=======
.detail {
  width: 80vw;
  margin: 30px auto;
>>>>>>> parent of 675b9d6 (new code):Open Data Project Vue/src/components/causedetail.vue
}
 
.charts {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 16px;
}
</style>