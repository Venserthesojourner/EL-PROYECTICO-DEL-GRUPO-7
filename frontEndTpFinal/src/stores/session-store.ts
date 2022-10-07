/* eslint-disable linebreak-style */
import { defineStore } from 'pinia';

export const useSessionStatus = defineStore('sessionStatus', {
  state: () => ({
    status: false,
  }),
  getters: {
    login: (state) => {
      if (state.status) return 'login';
      return 'logout';
    },
  },
  actions: {
    changeStatus() {
      this.status = !this.status;
    },
  },
});
