<template>
    <div class="container">

    <Datacard
      v-for="(item, i) in data"
  :key="item.unique_squirrel_id"
  :uniquesquirrelid="item.unique_squirrel_id"
  :age="item.age || ''"
  :primaryfurcolor="item.primary_fur_color || ''"
  :x="Number(item.x) || 0"
  :y="Number(item.y) || 0"
/>
  </div>
</template>

<script setup >
import { ref, onMounted } from 'vue';  
import Datacard from './datacard.vue';

const data = ref([]);

async function fetchData() {
  try {
const response = await fetch(
  "https://data.cityofnewyork.us/resource/uvpi-gqnh.json"
)
     const json = await response.json();
     data.value = Array.isArray(json) ? json : (json.data || json.results || []);
  } catch (error) {
    console.error(error);
  }
}
onMounted(() => {
    fetchData();
});

</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

</style>
