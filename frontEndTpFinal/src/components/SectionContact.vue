<!-- eslint-disable max-len -->
<template>
  <section id="contact">
    <!-- <div class="row justify-center items-center">
      <div class="q-mx-lg q-px-lg text-center">
        <div><i class="fa-brands fa-github fa-3x"></i></div>
        <q-btn href="https://github.com/Venserthesojourner" target="_blank" label="Luis Cañete" class="q-mt-sm text-h6"
          dense flat no-caps />
      </div>
      <div class="q-mx-lg q-px-lg text-center">
        <div><i class="fa-brands fa-github fa-3x"></i></div>
        <q-btn href="https://github.com/hctmanuelortiz" target="_blank" label="Manuel Ortiz" class="q-mt-sm text-h6"
          dense flat no-caps />
      </div>
      <div class="columns q-mx-lg q-px-lg text-center">
        <div><i class="fa-brands fa-github fa-3x"></i></div>
        <q-btn href="https://github.com/Blackpachamame" target="_blank" label="Marcos Travaglini"
          class="q-mt-sm text-h6" dense flat no-caps />
      </div>
    </div> -->
    <!-- Contact -->
    <div class="row justify-center q-gutter-x-md q-gutter-y-lg q-mt-xl">
      <CardContact></CardContact>
      <CardContact></CardContact>
      <CardContact></CardContact>
    </div>
  </section>
</template>

<script>
import CardContact from './CardContact.vue';

export default {
  components: {
    CardContact,
  },
};
</script>

<style lang="sass" scoped>
#contact
    display: flex
    justify-content: center
    align-items: center
    min-height: 600px
</style>
