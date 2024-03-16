<script setup lang="ts">
defineProps<{
  name: string;
  image: string;
  user: string;
}>();
</script>
<template>
  <q-card class="wayna-card bg-secondary text-white">
    <img :src="image" />
    <q-card-section>
      <div class="text-h6">{{ name }}</div>
      <div class="text-subtitle2">by {{ user }}</div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.wayna-card {
  border-radius: 1rem;
}
</style>
