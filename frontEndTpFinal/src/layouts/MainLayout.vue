<!-- eslint-disable max-len -->
<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-white text-primary q-py-lg q-px-xl">
      <q-toolbar>
        <q-btn flat label="Chichilo" />
        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-tab name="tab1" label="Tab 1" />
          <q-tab name="tab2" label="Tab 2" />
          <q-tab name="tab3" label="Tab 3" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

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
