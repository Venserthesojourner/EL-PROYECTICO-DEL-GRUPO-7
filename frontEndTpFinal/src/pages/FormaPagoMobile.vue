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
                  <q-item-label>{{ estData[0].name }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label caption lines="1">Precio</q-item-label>
                  <q-item-label>{{ estData[0].price }}</q-item-label>
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
          <q-btn type="submit" push color="positive" text-color="black" size="lg"
            class="full-width border-radius-inherit" label="Continuar" no-caps />
        </q-form>
        <q-btn href="http://localhost:9000/mobile/buscar" push color="primary" text-color="black" size="lg"
          class="full-width border-radius-inherit q-mt-md" label="Volver" no-caps />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router'

const listaEstacionamientos = [{ id: "1", name: "Buenos Aires Parking", price: "300.00" }, { id: "2", name: "Estacionamiento rioja 456", price: "400.00" }, { id: "3", name: "Paco Parking", price: "450.00" }];

export default {



  setup() {
    const $q = useQuasar()
    const route = useRoute()
    const router = useRouter();

    let data = route.params.id;
    console.log("ESTO RECIBO:", data)
    let estData = listaEstacionamientos.filter(element => element.id === data)
    console.log("ESTO ARMO", estData.name)
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
      estData,

      onSubmit() {
        if (opcionPago.value === "mercado pago") {
          router.push('/mobile/codigo-reserva');
        }
        else {
          router.push('/mobile/confirmacion');
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
