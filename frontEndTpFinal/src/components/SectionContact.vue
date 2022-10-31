<!-- eslint-disable max-len -->
<template>
  <section id="contact">
    <!-- Contact -->
    <div class="row justify-center q-gutter-x-md q-gutter-y-lg q-mt-xl">
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
