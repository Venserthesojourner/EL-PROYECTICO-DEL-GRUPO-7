<!-- eslint-disable max-len -->
<template>
  <q-layout view="hHh Lpr lff">
    <q-header reveal class="bg-dark text-primary q-py-lg q-px-lg">
      <q-toolbar>
        <!-- Logo -->
        <q-img src="../assets/logo.png" height="40px" width="40px" alt="logo" />
        <!-- Nombre del sitio -->
        <q-toolbar-title class="text-weight-bold text-uppercase">Park-Our</q-toolbar-title>

        <q-space />
        <!-- Menú -->
        <q-tabs class="gt-sm" v-model="tab" shrink>
          <q-route-tab to="/" name="home" label="Inicio" exact />
          <q-route-tab href="http://localhost:9000/#about" name="about" label="Nosotros" />
          <q-route-tab href="/#team" name="team" label="Equipo" />
          <q-route-tab href="/#contact" name="contact" label="Contacto" />
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
      <q-drawer v-model="drawer" :width="250" :breakpoint="500" overlay
        class="bg-dark text-primary text-h5 text-center">
        <q-scroll-area class="fit">

          <q-list>
            <q-item style="width: 100%;" clickable v-ripple to="/">
              <q-item-section>Inicio</q-item-section>
            </q-item>

            <q-item style="width: 100%;" clickable v-ripple href="/#about">
              <q-item-section>Nosotros</q-item-section>
            </q-item>

            <q-item style="width: 100%;" clickable v-ripple href="/#contact">
              <q-item-section>Contacto</q-item-section>
            </q-item>

            <q-item style="width: 100%;" clickable v-ripple href="login">
              <q-item-section>Login</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    </div>
    <!-- Page Container -->
    <q-page-container>
      <router-view />
      <BtnScrollerTop></BtnScrollerTop>
    </q-page-container>

    <q-footer class="bg-dark text-center">
      <q-toolbar>
        <q-toolbar-title>Grupo 7 💜 2022</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import BtnScrollerTop from '../components/BtnScrollerTop.vue';

export default {
  components: {
    BtnScrollerTop,
  },

  setup() {
    return {
      tab: ref(''),
      drawer: ref(false),
    };
  },
};
</script>

<style lang="sass" scoped>
.q-toolbar
  &__title
    font-family: $ff-brand
    font-size: 26px
:deep(.q-tab__label)
  font-size: 16px
  font-weight: bold
.q-footer
  & :deep(.q-toolbar__title)
    font-size: 14px
    color: rgba(255, 255, 255, 0.7)
.q-list
  display: flex
  flex-direction: column
  justify-content: space-evenly
  align-items: center

@media(max-width: 375px)
  header.q-header
    padding-left: 0
    padding-right: 0
</style>
