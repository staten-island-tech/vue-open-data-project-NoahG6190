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


const causePath = computed(() => ({
  name: 'detail',
  params: { id: props.id },
  state: { record: props.record }
}))
</script>

<style scoped>
.card {
  background-color: #eaf0ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(12,22,39,0.06);
  border: 1px solid rgba(37,99,235,0.06);
}
.card:hover {
  transform: translateY(-6px);
}
</style>
