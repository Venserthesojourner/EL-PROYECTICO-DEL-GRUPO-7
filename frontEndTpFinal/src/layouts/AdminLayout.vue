<!-- eslint-disable max-len -->
<template>
  <q-layout view="hHh Lpr lff">
    <!-- Header -->
    <q-header class="bg-secondary">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Panel de Admin</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <!-- Barra Lateral -->
    <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick" :width="200"
      :breakpoint="500" bordered class="bg-grey-3">
      <q-scroll-area class="fit">
        <div class="column justify-between" style="min-height: calc(100vh - 50px);">
          <q-list padding>
            <q-item to="plazas" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="apps" />
              </q-item-section>

              <q-item-section>
                Plazas
              </q-item-section>
            </q-item>

            <q-expansion-item expand-separator icon="attach_money" label="Montos">

              <q-list>
                <q-item to="precios" clickable v-ripple>
                  <q-item-section>
                    Precios
                  </q-item-section>
                </q-item>
                <q-item to="planes" clickable v-ripple>
                  <q-item-section>
                    Planes
                  </q-item-section>
                </q-item>
                <q-item to="promociones" clickable v-ripple>
                  <q-item-section>
                    Promociones
                  </q-item-section>
                </q-item>
              </q-list>

            </q-expansion-item>

            <q-item to="horarios" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="schedule" />
              </q-item-section>

              <q-item-section>
                Horarios
              </q-item-section>
            </q-item>

            <q-item to="configuraciones" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>

              <q-item-section>
                Configuraciones
              </q-item-section>
            </q-item>

          </q-list>

          <q-list padding>
            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section>
                Cerrar Sesión
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-scroll-area>
      <!-- Botón para minimizar la barra lateral -->
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn dense round unelevated color="secondary" icon="keyboard_arrow_left" @click="miniState = true" />
      </div>
    </q-drawer>
    <!-- Page Container -->
    <q-page-container>
      <router-view />
      <BtnScrollerTop></BtnScrollerTop>
    </q-page-container>
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
    const miniState = ref(false);

    return {
      drawer: ref(false),
      miniState,

      drawerClick(e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false;

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation();
        }
      },
    };
  },
};
</script>
