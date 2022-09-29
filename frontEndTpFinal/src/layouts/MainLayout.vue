<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-layout view="hHh Lpr lff">
    <q-header reveal class="bg-white text-primary q-py-lg q-px-lg">
      <q-toolbar>
        <!-- Logo -->
        <q-avatar>
          <img src="../assets/logo2.png">
        </q-avatar>
        <!-- Nombre del sitio -->
        <q-toolbar-title class="chichilo text-weight-bold text-uppercase">Chichilo</q-toolbar-title>

        <q-space />
        <!-- Menú -->
        <q-tabs class="gt-sm" v-model="tab" shrink>
          <q-route-tab to="/" name="home" label="Home" exact />
          <q-route-tab href="/#about" name="about" label="About" exact />
          <q-route-tab href="/#contact" name="contact" label="Contact" exact />
          <q-route-tab to="login" name="login" label="Login" exact />
        </q-tabs>
        <!-- Boton Menú -->
        <div class="lt-md">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </div>
      </q-toolbar>
    </q-header>
    <!-- Menú responsive -->
    <div class="lt-md">
      <q-drawer v-model="drawer" :width="250" :breakpoint="500" overlay class="text-primary text-h5 text-center">
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>
    </div>

    <q-page-container>
      <router-view />
      <!-- place QPageScroller at end of page -->
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="fa-solid fa-chevron-up" color="positive" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

const menuList = [
  {
    label: 'Home',
  },
  {
    label: 'About',
  },
  {
    label: 'Contact',
  },
  {
    label: 'Login',
  },
];

export default {
  setup() {
    return {
      tab: ref(''),
      drawer: ref(false),
      menuList,
    };
  },
};
</script>

<style lang="sass" scoped>
.q-toolbar
  &__title
    font-family: $ff-chichilo
    font-size: 26px
:deep(.q-tab__label)
  font-size: 16px
.q-list
  display: flex
  flex-direction: column
  justify-content: space-evenly
  align-items: center
</style>
