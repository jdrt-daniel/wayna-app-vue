import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const usersStore = defineStore('users', () => {
  const state = ref('');

  const getter1 = computed(() => {
    return '';
  });

  const actionMode = () => {
    console.log('actions');
  };

  return {
    state,
    getter1,
    actionMode,
  };
});
