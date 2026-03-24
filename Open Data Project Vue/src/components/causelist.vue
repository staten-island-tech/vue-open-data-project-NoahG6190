<template>
  <div class="container">
    <CauseCard v-for="(record, index) in records" :key="index" :record="record" :id="index" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CauseCard from '@/components/CauseCard.vue'

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
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
}
</style>
