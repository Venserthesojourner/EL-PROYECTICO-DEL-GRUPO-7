<!-- eslint-disable linebreak-style -->
<template>
  <div class="q-pa-md">
    <div class="container-plaza row justify-start">
      <CardPlazaAdd></CardPlazaAdd>
      <CardPlaza></CardPlaza>
    </div>
  </div>
</template>

<script>
import CardPlaza from '../components/CardPlaza.vue';
import CardPlazaAdd from '../components/CardPlazaAdd.vue';

export default {
  components: {
    CardPlaza,
    CardPlazaAdd,
  },
};
</script>

<style lang="sass" scoped>
@media(max-width: 600px)
  .container-plaza
      justify-content: center
</style>
