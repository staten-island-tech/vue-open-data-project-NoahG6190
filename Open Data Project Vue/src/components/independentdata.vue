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
const squirrel = red(null)

async function fetchData(id) {
  const response = await fetch(
    "https://data.cityofnewyork.us/resource/vfnx-vebw/query.json",
  )
  const json = await response.json();
squirrel.value=json.find(item=> item.unique_squirrel_id === id);
} catch (error){
console.error(error);
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
