<template>
  <router-link :to="causePath" class="card">
    <h3>{{ record.year }}</h3>
    <h2>{{ record.leading_cause }}</h2>
    <p>{{ record.sex }}</p>
    <p>{{ record.race_ethnicity }}</p>
    <p>{{ record.deaths }} deaths</p>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  record: {
    type: Object,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})

const causePath = computed(() => {
  return {
    name: 'detail',
    params: { id: props.id },
    state: { record: props.record },
  }
})
</script>

<style scoped>
.card {
  width: 28%;
  background-color: aliceblue;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
}

.card:hover {
  background-color: #d0e8f0;
}
</style>
