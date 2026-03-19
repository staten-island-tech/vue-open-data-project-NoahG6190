<template>
    <div>
        <router-link to="/apidata">View Details</router-link>
        <h2>Squirrel ID: {{ props.uniquesquirrelid }}</h2>
        <h3>Age: {{ props.age }}</h3>
        <h3>Primary Fur Color: {{ props.primaryfurcolor }}</h3>
        <h3>Location: ({{ props.x }}, {{ props.y }})</h3>

    </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue';
import {useRoute} from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
    uniquesquirrelid: String,
    age: Number,
    primaryfurcolor: String,
    x: Number,
    y: Number
});

const route = useRoute()
async function getData(id) {
    const response = await fetch(`https://data.cityofnewyork.us/api/v3/views/vfnx-vebw/rows.json?accessType=DOWNLOAD&bom=true&format=json&filename=squirrel-data.json`);
    const json = await response.json();
    data.value=json.data;
    console.log(data.value);
}
onMounted(() => {
    getData(route.params.id);
})
watch(() => route.params.id, (newId) => {
    getData(newId);
})
</script>

<style  scoped>

</style>
