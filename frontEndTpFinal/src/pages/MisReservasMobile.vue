<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <p class="text-h4 text-weight-bold text-primary text-center">Mis Reservas</p>
      <div class="q-mt-md">
        <q-list style="min-width: 300px">
          <!-- Primer Patente -->
          <q-item clickable v-ripple active-class="bg-grey-2">
            <q-item-section class="text-overline">Cf30g</q-item-section>

            <q-item-section side>
              <q-btn size="12px" round dense flat unelevated icon="content_copy" color="grey-7" />
            </q-item-section>
          </q-item>

          <q-separator spaced />

          <!-- Aca hay que meter todos los codigos de reserva activos -->
          <q-intersection v-for="index in cantidadCodigosReserva" v-bind:key="index">

            <q-item clickable v-ripple v-bind:index='index' active-class="bg-grey-2">
              <q-item-section class="text-overline">2aNR0</q-item-section>

              <q-item-section side>
                <q-btn size="12px" round dense flat unelevated icon="content_copy" color="grey-7" />
              </q-item-section>
            </q-item>

            <q-separator spaced />
          </q-intersection>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  props: { agregarPatente: Function },

  setup() {
    const cantidadCodigosReserva = ref(1);
    return {
      active: ref('primera'),
      cantidadCodigosReserva,
      agregarPatente() {
        cantidadCodigosReserva.value += 1;
      },
    }
  }
}
</script>

<style lang="sass" scoped>
.text-overline
  font-size: 1.5rem
</style>