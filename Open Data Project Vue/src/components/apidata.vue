<template>
    <div class="container">
        <Datacard v-for="item in data" :key="item[0]" :item="item" />
    </div>
</template>

<script setup >
import { ref, onMounted } from 'vue';  
import Datacard from './datacard.vue';

const data = ref([]);
async function fetchData() {
    try {
        const response = await fetch("https://data.cityofnewyork.us/api/v3/views/vfnx-vebw/query.json");
        data.value = await response.json();
        console.log(data.value);
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
