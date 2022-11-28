<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <!-- Configuraciones Usuario -->
      <ConfiguracionesUser></ConfiguracionesUser>
      <img src="../assets/logo.png" alt="logo" style="width: 100px;">
      <p class="title text-weight-bold text-uppercase text-primary">Park-Our</p>
      <div class="q-mt-md q-gutter-y-md" style="min-width: 300px">
        <q-form @submit="onSubmit" @reset="onReset">
          <q-select dark disable filled v-model="patente" :options="options" />
          <!-- Añadir Patente -->
          <div class="q-mt-sm row justify-center">
            <span><a href="mis-patentes">Añadir Patente</a></span>
          </div>
        </q-form>

        <q-btn to="buscar" push color="secondary" size="lg" class="full-width border-radius-inherit" label="Buscar"
          no-caps />
        <q-btn to="reserva" push color="accent" size="lg" class="full-width border-radius-inherit" label="Reserva"
          no-caps />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import ConfiguracionesUser from '../components/ConfiguracionesUser.vue';

export default {
  components: {
    ConfiguracionesUser,
  },
  setup() {
    return {
      patente: ref('AA-000-BB'),

      options: [
        'AA-000-BB', 'AB-121-BA'
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
p.title
    font-family: $ff-chichilo
    font-size: 36px
</style>