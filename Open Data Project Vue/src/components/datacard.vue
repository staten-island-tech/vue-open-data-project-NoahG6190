<template>
    <div class="card">
        <h2>{{ data.name }}</h2>
        <p>{{ data.description }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>

</style>