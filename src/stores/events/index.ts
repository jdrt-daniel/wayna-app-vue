import { ref } from 'vue';
import { defineStore } from 'pinia';

export const eventsStore = defineStore('events', () => {
  const state = ref('');

  return {
    state,
  };
});
