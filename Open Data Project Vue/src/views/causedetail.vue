<template>
  <div class="page">
    <router-link to="/">← Back to List</router-link>

    <div v-if="hasRecord">
      <h1>{{ record.leading_cause }}</h1>
      <h2>{{ record.year }}</h2>
      <p>Sex: {{ record.sex }}</p>
      <p>Race / Ethnicity: {{ record.race_ethnicity }}</p>
      <p>Deaths: {{ record.deaths }}</p>
      <p>Death Rate: {{ record.death_rate }}</p>
      <p>Age Adjusted Death Rate: {{ record.age_adjusted_death_rate }}</p>

      <div class="charts" v-if="hasRecord">
        <DeathsBarChart :record="record" />
        <DoughnutChart :record="record" />
      </div>
    </div>

    <div v-else>
      <p>Loading detail...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import DeathsBarChart from '@/components/deathbarchart.vue'
import DoughnutChart from '@/components/doughnutchart.vue'

const route = useRoute()
const record = ref({})

const hasRecord = computed(() => record.value && Object.keys(record.value).length > 0)

onMounted(async () => {
  // try history state first (fast when navigating from the list)
  const stateRecord = history.state?.record
  if (stateRecord && Object.keys(stateRecord).length) {
    record.value = stateRecord
    return
  }

  // fallback: fetch list and use index param (your list passes index as id)
  const id = Number(route.params.id)
  if (!Number.isFinite(id)) {
    record.value = {}
    return
  }

  try {
    const resp = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
    const data = await resp.json()
    record.value = Array.isArray(data) ? (data[id] || {}) : {}
  } catch (err) {
    console.error('failed to fetch detail data', err)
    record.value = {}
  }
})
</script>

<style scoped>
.page {
  width: 90%;
  max-width: 720px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.charts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
}

a {
  color: #1a73e8;
  font-weight: 600;
  text-decoration: none;
}
</style>