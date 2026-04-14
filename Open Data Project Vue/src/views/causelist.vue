<template>
  <div class="container">
    <CauseCard
      v-for="(record, index) in records"
      :key="record?.id ?? index"
      :record="record"
      :id="index"
    />
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
    records.value = Array.isArray(data) ? data : []
  } catch (error) {
    console.error('fetch error', error)
    records.value = []
  }
}

onMounted(getRecords)
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-rows: minmax(180px, 1fr);
  gap: 20px 20px;
  width: 100%;
  max-width: 1100px;
  margin: 30px auto;
  padding: 0 12px 40px;
  align-items: stretch;
}
</style>