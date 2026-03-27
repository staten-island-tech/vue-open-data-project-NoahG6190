<template>
  <div class="page">
    <h1>NYC Leading Causes of Death</h1>
    <div class="card-grid">
      <CauseCard v-for="(record, index) in records" :key="index" :record="record" :id="index" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CauseCard from '@/components/causecard.vue'

const records = ref([])

async function getRecords() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
    const data = await response.json()
    records.value = data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getRecords()
})
</script>

<style scoped>
.page {
  width: 90%;
  margin: 40px auto;
}

h1 {
  font-size: 1.8rem;
  color: #1a1a2e;
  margin-bottom: 32px;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
