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
    uniquesquirrelid: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    primaryfurcolor: {
        type: String,
        required: true
    },
    primaryfurcolor: {
        type: String,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    }
});

const route = useRoute()
async function fetchData(id) {
    const response = await fetch(`https://data.cityofnewyork.us/api/v3/views/vfnx-vebw/rows.json?accessType=DOWNLOAD&bom=true&format=json&filename=squirrel-data.json`);
    const json = await response.json();
    data.value=json.data;
    console.log(data.value);
}
onMounted(() => {
    fetchData(route.params.id);
})
watch(() => route.params.id,
function(id) {
    fetchData(id);
}
)
const data = ref([]);
</script>

<style  scoped>

</style>
