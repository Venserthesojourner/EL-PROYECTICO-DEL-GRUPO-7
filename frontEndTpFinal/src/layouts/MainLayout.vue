<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="transparent text-primary q-py-lg q-px-xl">
      <q-toolbar>
        <q-avatar>
          <img src="../assets/logo2.png">
        </q-avatar>

        <q-toolbar-title class="chichilo text-weight-bold text-uppercase">Chichilo</q-toolbar-title>

        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-tab name="home" label="Home" />
          <q-tab name="about" label="About" />
          <q-tab name="contact" label="Contact" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<!-- eslint-disable linebreak-style -->
<style lang="sass" scoped>
.chichilo
  font-family: $ff-chichilo
  font-size: 26px

:deep(.q-tab__label)
  font-size: 16px
</style>
<!-- eslint-disable linebreak-style -->
<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      tab: ref(''),
    };
  },
};
</script>
