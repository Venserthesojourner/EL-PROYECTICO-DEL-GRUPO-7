<!-- eslint-disable max-len -->
<template>
  <q-card horizontal dark :class="[iniciado ? 'iniciar-theme' : pausado ? 'pausar-theme' : 'reiniciar-theme']"
    style="height: 250px; width: 206px" class="q-ma-sm column justify-between">
    <q-card-section>
      <div class="text-h6">Plaza #1</div>
    </q-card-section>
    <q-card-section horizontal>
      <q-list dense dark style="min-width: 200px">
        <q-item v-show="(luis.estado === true)" v-for="contact in contacts" :key="contact.id">
          <q-item-section>
            <q-item-label>Cod. Reserva: <span class="text-bold">{{ contact.codigo }}</span></q-item-label>
            <q-item-label lines="1"> Patente: <span class="text-bold" >{{ contact.patente }}</span></q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-section class="row justify-center">
      <div class="text-h4 q-mb-md">{{ timeShow }}</div>
      <q-btn-group push>
        <q-btn color="light-green-3" text-color="black" push icon="play_arrow" @click="iniciar()" />
        <q-btn color="light-green-4" text-color="black" push icon="stop" @click="pausar()" />
        <q-btn color="light-green-5" text-color="black" push icon="replay" @click="reiniciar()" />
      </q-btn-group>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from 'vue';
import CardPlazaAdd from '../components/CardPlazaAdd.vue';
import { useSessionLuis } from '../stores/userLuis';


const contacts = [{
  id: 1,
  codigo: 'DK4Crp3W',
  patente: 'AA-000-BB',
}]

export default {
  components: {
    CardPlazaAdd,
  },
  props: ['index'],
  data() {
    return {
      numPlaza: this.index + 1,
      basic: ref(false),
    };
  },
  setup() {
    const timeShow = ref('00:00:00');
    const time = ref(Date.now());
    const cronometro = ref(false);
    const acumulado = ref(0);
    const iniciado = ref(false);
    const pausado = ref(false);
    const luis = useSessionLuis();


    function formatearMS(tiempoMS) {
      const minisconds = tiempoMS % 1000;
      const seconds = Math.floor(((tiempoMS - minisconds) / 1000) % 60);
      const minutos = Math.floor(((tiempoMS - minisconds) / (1000 * 60)) % 60);
      const horas = Math.floor(((tiempoMS - minisconds) / (1000 * 60 * 60)) % 60);
      const data = `${horas.toString().padStart(2, 0)}:${minutos.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;
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
      iniciado,
      pausado,
      contacts,
      luis,

      iniciar() {
        cronometro.value = true;
        iniciado.value = true;
        pausado.value = false;
      },
      pausar() {
        cronometro.value = false;
        iniciado.value = false;
        pausado.value = true;
      },
      reiniciar() {
        acumulado.value = 0;
        cronometro.value = false;
        iniciado.value = false;
        pausado.value = false;
      },

    };
  },
};
</script>

<style lang="sass" scoped>
.q-card
  border-style: solid
  border-width: 3px
  box-shadow: 0 0 10px $primary
.iniciar-theme
  border-color: $positive
  box-shadow: 0 0 10px $positive
.pausar-theme
  border-color: #ff9800
  box-shadow: 0 0 10px #ff9800
.reiniciar-theme
  border-color: $primary
  box-shadow: 0 0 10px $primary
</style>
