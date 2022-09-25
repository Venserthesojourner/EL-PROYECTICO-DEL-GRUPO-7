<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-layout view="hHh Lpr lff">
    <q-header reveal class="transparent text-primary q-py-lg q-px-xl">
      <q-toolbar>
        <q-avatar>
          <img src="../assets/logo2.png">
        </q-avatar>

        <q-toolbar-title class="chichilo text-weight-bold text-uppercase">Chichilo</q-toolbar-title>

        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-route-tab to="/" name="home" label="Home" exact />
          <q-route-tab to="about" name="about" label="About" exact />
          <q-route-tab to="contact" name="contact" label="Contact" exact />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <!-- place QPageScroller at end of page -->
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
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
