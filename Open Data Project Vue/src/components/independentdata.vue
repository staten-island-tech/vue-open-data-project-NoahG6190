<template>
  <div>
    <router-link to="/apidata">Back</router-link>
    <h2>Squirrel ID: {{ squirrel.unique_squirrel_id }}</h2>
    <h3>Age: {{ squirrel.age }}</h3>
    <h3>Primary Fur Color: {{ squirrel.primary_fur_color }}</h3>
    <h3>Location: ({{ squirrel.x }}, {{ squirrel.y }})</h3>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const squirrel = ref(null)

async function fetchData(id) {
  if (!id) {
    squirrel.value = null
    return
  }
  try {
    // Query the resource endpoint for a specific unique id
    const url = `https://data.cityofnewyork.us/resource/uvpi-gqnh.json?unique_squirrel_id=${encodeURIComponent(
      id,
    )}`
    const response = await fetch(url)
    const json = await response.json()
    squirrel.value = Array.isArray(json) && json.length ? json[0] : null
  } catch (error) {
    console.error(error)
    squirrel.value = null
  }
}


onMounted(() => {
  fetchData(route.params.id)
})
watch(
  () => route.params.id,
  (id)=> {
    fetchData(id)
  },
)
const data = ref([])
</script>

<style scoped></style>
