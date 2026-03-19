<template>
    <div class="card">

        <router-link to="/independentdata">Independent Data</router-link>
        <h2>Squirrel ID: {{ props.uniquesquirrelid }}</h2>
        <h3>Age: {{ props.age }}</h3>
        <h3>Primary Fur Color: {{ props.primaryfurcolor }}</h3>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    uniquesquirrelid:{
        type: String,
        required: true
    },
   age: {
        type: Number,
        required: true
    },
   primaryfurcolor: {
       type: String,
       required: true
   },
})
const dataPath = computed(() => {
    return `/api/squirrels/${props.uniquesquirrelid}`;
});

</script>

<style scoped>
.card {
  width: 28%;
  height: 500px;
  background-color: aliceblue;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
</style>