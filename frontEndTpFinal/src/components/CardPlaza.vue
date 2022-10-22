<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
    <q-card dark class="q-ma-sm column justify-between" style="height: 250px; width: 200px">
      <span class="cuadrito"></span>
      <q-card-section>
        <div class="text-h6">
          Plaza #{{ numPlaza }}
        </div>
      </q-card-section>
      <q-card-section class="column items-center">
        <div class="text-h4 q-mb-md">{{timeShow}}</div>
        <q-btn-group push>
          <q-btn color="positive" push icon="play_arrow" @click="iniciar()" />
          <q-btn color="negative" push icon="stop" @click="pausar()" />
          <q-btn color="secondary" push icon="replay" @click="reiniciar()" />
        </q-btn-group>
      </q-card-section>
    </q-card>
</template>
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<script>
import { ref } from 'vue';

export default {
  props: ['index'],
  data() {
    return {
      numPlaza: this.index,
    };
  },
  setup() {
    const timeShow = ref('00:00:00');
    const time = ref(Date.now());
    const cronometro = ref(false);
    const acumulado = ref(0);

    function formatearMS(tiempoMS) {
      const MS = tiempoMS % 1000;
      const S = Math.floor(((tiempoMS - MS) / 1000) % 60);
      const M = Math.floor((S / 60) % 60);
      const H = Math.floor(M / 60);
      const data = `${H.toString().padStart(2, 0)}:${M.toString().padStart(2, 0)}:${S.toString().padStart(2, 0)}`;
      return data;
    }

    setInterval(() => {
      if (cronometro.value) {
        acumulado.value += Date.now() - time.value;
      }
      time.value = Date.now();
      timeShow.value = formatearMS(acumulado.value);
    }, 1000 / 60);

    return {
      timeShow,
      time,
      cronometro,
      acumulado,

      iniciar() {
        cronometro.value = true;
      },
      pausar() {
        cronometro.value = false;
      },
      reiniciar() {
        acumulado.value = 0;
      },

    };
  },
};
</script>
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<style lang="sass" scoped>
.q-card
    transition: 0.5s
    &::before
        content: ''
        position: absolute
        // inset: 2px
        background: $dark
    & .cuadrito
        position: absolute
        inset: 0
        display: block
        &::before
            content: ''
            position: absolute
            top: -4px
            left: 100%
            transform: translateX(-50%)
            width: 10px
            height: 10px
            background-color: $primary
            transition: 0.5s
        &::after
            content: ''
            position: absolute
            bottom: -4px
            left: 0
            transform: translateX(-50%)
            width: 10px
            height: 10px
            background-color: $primary
            transition: 0.5s
    &:hover
        background-color: $primary
        box-shadow: 0 0 35px $primary
        & .cuadrito
            &::before
                left: 0%
                transform: translateX(-50%) rotate(45deg)
                background-color: $primary
            &::after
                left: 100%
                transform: translateX(-50%) rotate(-45deg)
                background-color: $primary
</style>
