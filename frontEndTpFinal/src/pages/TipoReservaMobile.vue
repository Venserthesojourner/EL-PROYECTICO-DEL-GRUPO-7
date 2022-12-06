<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <div style="min-width: 300px">
        <p class="text-h4 text-weight-bold text-primary text-center">Tipo de Reserva</p>
        <q-form @submit="onSubmit" @reset="onReset" class="column items-center justify-center q-gutter-y-md">
          <div class="full-width row justify-center text-uppercase text-h5">
            <q-option-group name="tipo_reserva" v-model="tipoReserva" :options="options" size="xl" color="primary"
              inline lazy-rules />
          </div>
            <q-select style="min-width: 300px" filled dark bottom-slots v-model="model" :options="opciones" label="Codigo de promocion"
            :dense="dense" :options-dense="denseOpts">
            <template v-slot:prepend>
              <q-icon name="schedule" @click.stop.prevent />
            </template>

            <template v-slot:hint> Ingresar código de promoción (opcional) </template>
          </q-select>
          <!-- Botones -->
          <q-btn  type="submit" push color="positive" text-color="black" size="lg"
            class="full-width border-radius-inherit" label="Continuar" no-caps />
          <q-btn push color="primary" text-color="black" size="lg" class="full-width border-radius-inherit"
            label="Volver" no-caps />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";


export default {
  setup() {
    const $q = useQuasar();

    const tipoReserva = ref('fija');
    const codigo = ref(null);
    const date = ref(null);
    const tipo_reserva = ref([]);
    const model = ref(null);

    const route = useRoute();
    const router = useRouter();

    let data = route.params.id;


    function alert() {
      $q.dialog({
        title: 'Importante!',
        dark: true,
        textColor: 'white',
        message: 'Se le aplicara un 25% de descuento por el codigo promocional ingresado',
        persistent: true,
      }).onDismiss(() => {
        router.push({
          name: "forma-pago",
          params: {
            id: data,
          },
        });
      });
    }

    function currentDate() {
      const current = new Date();
      const dateCurrent = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;
      return dateCurrent;
    };

    const fechaActual = currentDate();

    return {
      tipoReserva,
      options: [
        {
          label: 'Fija',
          value: 'fija'
        },
        {
          label: 'Libre',
          value: 'libre'
        },
      ],
      opciones: [
        "061222",

      ],
      model,
      codigo,
      onSubmit() {
        alert();
      },

      onReset() {
        tipoReserva.value = "fija"
        codigo.value = null
        date.value = '2022-12-01 12:44'
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
