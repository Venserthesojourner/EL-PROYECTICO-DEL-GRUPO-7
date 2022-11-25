<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <div style="min-width: 300px">
        <p class="text-h4 text-weight-bold text-primary text-center">Opción de Pago</p>
        <q-form @submit="onSubmit" @reset="onReset" class="column items-center justify-center q-gutter-y-md">
          <div class="full-width row justify-center text-uppercase">
            <q-option-group name="tipo_reserva" v-model="tipoReserva" :options="options" size="lg" color="primary"
              inline />
          </div>
          <!-- Código Promoción -->
          <q-input class="full-width" filled v-model="codigo" type="text" label="Código Promoción"
            hint="Ingresar código de promoción" />

          <!-- Botones -->
          <q-btn to="codigo-reserva" type="submit" push color="positive" size="lg"
            class="full-width border-radius-inherit" label="Continuar" no-caps />
          <q-btn to="confirmacion" push color="accent" size="lg" class="full-width border-radius-inherit" label="Volver"
            no-caps />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup() {
    const $q = useQuasar()

    const tipoReserva = ref('mercado pago')
    const codigo = ref(null)

    return {
      tipoReserva,
      options: [
        {
          label: 'Mercado Pago',
          value: 'mercado pago'
        },
        {
          label: 'Efectivo',
          value: 'efectivo'
        },
      ],
      codigo,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset() {
        tipoReserva.value = "mercado pago"
        codigo.value = null
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.q-option-group
  & .q-radio
    &__label
      font-size: 20px
      text-transform: uppercase
</style>