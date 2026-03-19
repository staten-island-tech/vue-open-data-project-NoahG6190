<template>
    <div class="container">
    <Datacard v-for="(item, i) in data" :key="item.unique_squirrel_id || i" :uniquesquirrelid="item.unique_squirrel_id || item.uniquesquirrelid" :age="item.age || item.age_group || ''" :primaryfurcolor="item.primary_fur_color || item.primaryfurcolor || ''" :x="Number(item.longitude) || Number(item.x) || 0" :y="Number(item.latitude) || Number(item.y) || 0" />
    </div>
</template>

<script setup >
import { ref, onMounted } from 'vue';  
import Datacard from './datacard.vue';

const data = ref([]);
async function fetchData() {
    try {
        const response = await fetch("https://data.cityofnewyork.us/api/v3/resource/vfnx-vebw/query.json");
       const data = await response.json();
       data.value = data.results;
    } catch (error) {
        console.error( error);
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
