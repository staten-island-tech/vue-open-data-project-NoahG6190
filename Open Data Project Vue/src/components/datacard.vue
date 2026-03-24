<template>
  <div class="card">
    <router-link :to="independentdataPath" class="detail-link"> View Details</router-link>
    <h2>Squirrel ID: {{ displayId }}</h2>
    <h3>Age: {{ displayAge }}</h3>
    <h3>Primary Fur Color: {{ displayColor }}</h3>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: false,
  },
  x: Number,
  y: Number,
  uniquesquirrelid: String,
  age: String,
  primaryfurcolor: String,
})

const displayId = computed(() => {
  return props.data?.unique_squirrel_id || props.data?.uniquesquirrelid || props.uniquesquirrelid || ''
})

const displayAge = computed(() => {
  return props.data?.age || props.age || props.data?.age_group || ''
})

const displayColor = computed(() => {
  return props.data?.primary_fur_color || props.primaryfurcolor || props.data?.primaryfurcolor || ''
})

const independentdataPath = computed(() => {
  return `/api/squirrels/${displayId.value}`
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
