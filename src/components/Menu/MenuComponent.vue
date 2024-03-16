<script setup lang="ts">
import LinkComponent from './LinkComponent.vue';

const routes = [
  {
    icon: 'home',
    name: 'Dashboard',
    path: '/',
  },
  {
    icon: 'people',
    name: 'Usuarios',
    path: '/users',
  },
  {
    icon: 'emoji_events',
    name: 'Eventos',
    path: '/events',
  },
];
</script>
<template>
  <q-list>
    <LinkComponent
      v-for="{ name, path, icon } in routes"
      :key="path"
      :name="name"
      :path="path"
      :icon="icon"
    />
  </q-list>
</template>

<style scoped></style>
