<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <img src="../assets/logo.png" alt="logo" style="width: 100px;">
      <p class="title text-weight-bold text-uppercase text-primary">Park-Our</p>
      <div class="q-mt-md q-gutter-y-md" style="min-width: 300px">
        <q-form @submit="onSubmit" @reset="onReset">
          <q-select disable filled v-model="patente" :options="options" />
        </q-form>
        <q-btn to="buscar" push color="primary" size="lg" class="full-width border-radius-inherit" label="Buscar"
          no-caps />
        <q-btn to="reserva" push color="positive" size="lg" class="full-width border-radius-inherit" label="Reserva"
          no-caps />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
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