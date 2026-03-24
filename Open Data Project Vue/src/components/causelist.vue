<template>
  <div class="container">
    <CauseCard v-for="(record, index) in records" :key="index" :record="record" :id="index" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CauseCard from './causecard.vue'

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
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1100px;
  margin: 30px auto;
  padding: 0 12px 24px 12px;
  align-items: stretch;
}
</style>
