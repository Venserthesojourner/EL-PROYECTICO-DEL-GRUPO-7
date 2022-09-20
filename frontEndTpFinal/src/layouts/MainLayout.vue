<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" style="min-height: inherit;">
      <q-header elevated class="bg-primary">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Chichilo</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick" :width="200"
        :breakpoint="500" bordered class="bg-grey-3">
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <!--
          in this case, we use a button (can be anything)
          so that user can switch back
          to mini-mode
        -->
        <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
          <q-btn dense round unelevated color="accent" icon="chevron_left" @click="miniState = true" />
        </div>
      </q-drawer>

      <q-page-container>
        <q-page class="q-px-lg q-py-md" style="min-height: inherit;">
          <!-- <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci,
            dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus
            commodi perferendis voluptate?
          </p> -->
          <div class="row justify-evenly items-center">
            <div class="col-4">
              <p class="text-h1 text-center">Inicio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci,
                dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus
                commodi perferendis voluptate?</p>
            </div>
            <div class="col-4">
              <div class="row justify-end">
                <img src="../assets/car-reserva.jpg" alt="car reserva" style="height: auto; min-width: 200px;">
              </div>
            </div>
          </div>
        </q-page>
        <q-page-scroller position=" bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
      </q-page-container>
    </q-layout>
  </div>
</template>
<!-- eslint-disable linebreak-style -->
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
