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
          <!-- Código Promoción -->
          <q-input class="full-width" filled dark v-model="codigo" type="text" label="Código Promoción"
            hint="Ingresar código de promoción (opcional)" />
          <!-- Día y Horario -->
          <q-input filled dark v-model="date" class="full-width" placeholder="2022-12-01 12:44" :rules="dateRules"
            hint="Seleccionar Día y Horario" lazy-rules>
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date color="secondary" class="bg-dark" v-model="date" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Cerrar" color="positive" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time color="secondary" class="bg-dark" v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Cerrar" color="positive" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <!-- Botones -->
          <q-btn to="confirmacion" type="submit" push color="positive" text-color="black" size="lg"
            class="full-width border-radius-inherit" label="Continuar" no-caps />
          <q-btn to="buscar" push color="primary" text-color="black" size="lg" class="full-width border-radius-inherit"
            label="Volver" no-caps />
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
    const $q = useQuasar();

    const tipoReserva = ref('fija');
    const codigo = ref(null);
    const date = ref(null);
    const tipo_reserva = ref([]);


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
      codigo,
      date,
      dateRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese una fecha',
        (val) => (val && val > fechaActual) || 'Por favor, ingrese una fecha válida',
      ],

      onSubmit() {
        if (accept.value !== true) {
          tipo_reserva.value = [...tipo_reserva.value, {
            tipoReserva: tipoReserva.value,
            codigo: codigo.value,
            date: date.value,
          }];
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