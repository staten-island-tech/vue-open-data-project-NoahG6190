<template>
  <router-link :to="causePath" class="card">
    <span class="card-year">{{ record.year }}</span>
    <h2 class="card-cause">{{ record.leading_cause }}</h2>
    <p>{{ record.sex }}</p>
    <p>{{ record.race_ethnicity }}</p>
    <p class="card-deaths">{{ record.deaths }} deaths</p>
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
  background-color: #f0f4ff;
  border-left: 4px solid #1a1a2e;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  color: #1a1a2e;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: calc(33% - 20px);
  box-sizing: border-box;
  transition: background-color 0.2s;
}

.card:hover {
  background-color: #dce4ff;
}

.card-year {
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #c0392b;
}

.card-cause {
  font-size: 1rem;
  margin: 4px 0;
  line-height: 1.4;
}

p {
  margin: 0;
  font-size: 0.85rem;
  color: #555;
}

.card-deaths {
  font-weight: bold;
  color: #1a1a2e;
  margin-top: 8px;
}
</style>
