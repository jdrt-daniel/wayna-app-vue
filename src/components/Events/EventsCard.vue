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
    <q-card-section horizontal>
      <q-card-section>
        <div class="text-h6">{{ name }}</div>
        <div class="text-subtitle2 text-warning">by {{ user }}</div>
      </q-card-section>
      <q-space />
      <q-card-section class="text-right">
        <q-btn color="primary" label="Ver" />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.wayna-card {
  border-radius: 0.7rem;
  img {
    max-height: 200px;
  }
}
</style>
