
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const record = ref({})

onMounted(() => {
  record.value = history.state?.record || {}
})
</script>

<style scoped>
.detail {
  width: 80vw;
  margin: 30px auto;
}
</style>
