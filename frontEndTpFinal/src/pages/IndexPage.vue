<template>
  <q-page>
    <!-- Bienvenida -->
    <SectionBienvenida></SectionBienvenida>
    <!-- About -->
    <SectionAbout></SectionAbout>
    <!-- Contact -->
    <SectionContact></SectionContact>
  </q-page>
</template>

<script>
import SectionBienvenida from '../components/SectionBienvenida.vue';
import SectionAbout from '../components/SectionAbout.vue';
import SectionContact from '../components/SectionContact.vue';

export default {
  components: {
    SectionBienvenida,
    SectionAbout,
    SectionContact,
  },
};
</script>
