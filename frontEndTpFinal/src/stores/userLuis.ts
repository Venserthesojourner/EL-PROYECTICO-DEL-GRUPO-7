import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useSessionLuis = defineStore('useSessionLuis', {
  state: () => ({
    status: useStorage('luis', false),
  }),
  getters: {
    estado: (luis) => {
      if (luis.status) return true;
      return false;
    },
  },
  actions: {
    changeStatus() {
      this.status = !this.status;
    },
  },
});
