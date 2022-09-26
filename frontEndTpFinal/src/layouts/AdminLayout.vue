<!-- eslint-disable max-len -->
<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-secondary">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Panel de Admin</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick" :width="200"
      :breakpoint="500" bordered class="bg-grey-3">
      <q-scroll-area class="fit">
        <div class="column justify-between" style="min-height: calc(100vh - 50px);">
          <q-list padding>
            <q-item to="plazas" active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="grid_on" />
              </q-item-section>

              <q-item-section>
                Plazas
              </q-item-section>
            </q-item>

            <q-expansion-item expand-separator icon="monetization_on" label="Montos">

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
                <q-icon name="query_builder" />
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
            <q-item clickable v-ripple>
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

      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn dense round unelevated color="secondary" icon="chevron_left" @click="miniState = true" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
      <!-- place QPageScroller at end of page -->
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="positive" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
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
