import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useSessionMarcos = defineStore('sessionStatus', {
  state: () => ({
    status: useStorage('state', false),
  }),
  getters: {
    estado: (state) => {
      if (state.status) return true;
      return false;
    },
  },
  actions: {
    changeStatus() {
      this.status = !this.status;
    },
  },
});
