<template>
  <q-page>
    <!-- Bienvenida -->
    <SectionBienvenida></SectionBienvenida>
    <!-- About -->
    <SectionAbout></SectionAbout>
    <!-- Team -->
    <SectionTeam></SectionTeam>
    <!-- Contact -->
    <SectionContact></SectionContact>
  </q-page>
</template>

<script>
import SectionBienvenida from '../components/SectionBienvenida.vue';
import SectionAbout from '../components/SectionAbout.vue';
import SectionTeam from '../components/SectionTeam.vue';
import SectionContact from '../components/SectionContact.vue';

export default {
  components: {
    SectionBienvenida,
    SectionAbout,
    SectionTeam,
    SectionContact,
  },
};
</script>
