<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <div style="min-width: 300px">
        <p class="text-h4 text-weight-bold text-primary text-center">Opción de Pago</p>
        <q-form @submit="onSubmit" @reset="onReset" class="column items-center justify-center q-gutter-y-md">
          <div class="full-width row justify-center text-uppercase">
            <q-option-group name="opcion_pago" v-model="opcionPago" :options="options" size="lg" color="primary"
              inline />
          </div>
          <!-- Datos -->
          <div class="q-mt-md">
            <q-list dark style="min-width: 300px">
              <q-item>
                <q-item-section>
                  <q-item-label caption lines="1">Estacionamiento</q-item-label>
                  <q-item-label>Parking NQN - estacionamiento {{estacionamiento}} </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label caption lines="1">Precio</q-item-label>
                  <q-item-label>$250</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label caption lines="1">Tipo de reserva</q-item-label>
                  <q-item-label>Fija</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <!-- Botones -->
          <q-btn to="codigo-reserva" type="submit" push color="positive" text-color="black" size="lg"
            class="full-width border-radius-inherit" label="Continuar" no-caps />
          <q-btn to="confirmacion" push color="primary" text-color="black" size="lg"
            class="full-width border-radius-inherit" label="Volver" no-caps />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useRouter } from 'vue-router';


export default {
  props: {
    id: {
      type: Number,
      default: 9
    } },
  setup() {
    const $q = useQuasar()
    const route = useRouter();

    let estacionamiento1 = props.id;
    console.log(estacionamiento1)
    let estacionamiento = route.params.id;
    console.log(estacionamiento)

    const opcionPago = ref('mercado pago')
    const codigo = ref(null)

    return {
      opcionPago,
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
      estacionamiento,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-10',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'positive',
            textColor: 'dark',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset() {
        opcionPago.value = "mercado pago"
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
