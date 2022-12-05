<!-- eslint-disable linebreak-style -->
<template>
  <div class="q-pa-md">
    <div class="container-plaza row justify-start">
      <CardPlazaAdd v-bind:agregarPlaza='agregarPlaza'></CardPlazaAdd>
      <CardPlazaOne></CardPlazaOne>
      <q-intersection v-for="index in cantidadPlazas" v-bind:key="index">
        <CardPlaza v-bind:index='index'></CardPlaza>
      </q-intersection>
    </div>
  </div>
</template>
<!-- eslint-disable linebreak-style -->
<script>
import { ref } from 'vue';
import CardPlaza from '../components/CardPlaza.vue';
import CardPlazaAdd from '../components/CardPlazaAdd.vue';
import CardPlazaOne from '../components/CardPlazaOne.vue';

export default {
  components: {
    CardPlaza,
    CardPlazaAdd,
    CardPlazaOne,
  },

  setup() {
    const cantidadPlazas = ref(9);
    return {
      cantidadPlazas,

      agregarPlaza() {
        cantidadPlazas.value += 1;
      },
    };
  },
};
</script>
<!-- eslint-disable linebreak-style -->
<style lang="sass" scoped>
@media(max-width: 600px)
  .container-plaza
      justify-content: center
</style>
