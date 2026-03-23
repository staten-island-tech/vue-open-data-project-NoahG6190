<template>
  <div class="card">
    <router-link :to="independentdataPath" class="detail-link"> View Details</router-link>
    <h2>Squirrel ID: {{ uniquesquirrelid }}</h2>
    <h3>Age: {{ age }}</h3>
    <h3>Primary Fur Color: {{ primaryfurcolor }}</h3>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  uniquesquirrelid: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  primaryfurcolor: {
    type: String,
    required: true,
  },
})
const independentdataPath = computed(() => {
  ;`/api/squirrels/${props.uniquesquirrelid}`
})
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
.detail-link {
  margin-bottom: 10px;
  text-decoration: none;
  color: blue;
  font-weight: bold;
}
</style>
