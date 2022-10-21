/* eslint-disable linebreak-style */
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

interface Props {
  precio: any;
  nombre: any;
  plan: {nombre:string, precio:number};
}
export const usePlanesStore = defineStore('planes', {
  state: () => ({
    planes: useStorage(
      'planes',
      [],
      undefined,
      {
        serializer: {
          read: (v: any) => (v ? JSON.parse(v) : null),
          write: (v: any) => JSON.stringify(v),
        },
      },
    ),
  }),
  getters: {
    mostrar: (state) => state.planes,
  },
  actions: {
    agregarPlan(plan:Props):void {
      console.log(plan);
      const newArray = [plan.nombre, plan.precio];
      console.log(newArray);
      // this.planes.push(newArray);
      console.log(this.planes);
    },
  },
});
