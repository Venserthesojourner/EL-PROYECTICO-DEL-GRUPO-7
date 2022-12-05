<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <div style="min-width: 300px">
        <p class="text-h4 q-mb-md text-weight-bold text-primary text-center">
          Opción de Pago
        </p>
        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Fecha de Caducidad -->
          <q-input
            filled
            dark
            v-model="date"
            placeholder="--/--/----"
            :rules="dateRules"
            hint="Seleccione una fecha"
            class="q-mb-lg"
          >
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date color="secondary" class="bg-dark" v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        label="Cerrar"
                        color="positive"
                        flat
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <!-- seleccionar la fecha de inicio -->
          <q-select
            filled
            dark
            bottom-slots
            v-model="model1"
            :options="selectDate"
            label="¿A partir de que horario?"
            :dense="dense"
            :options-dense="denseOpts"
          >
            <template v-slot:prepend>
              <q-icon name="schedule" @click.stop.prevent />
            </template>

            <template v-slot:hint> Seleccione un horario de inicio </template>
          </q-select>
          <!-- seleccionar la cantidad de horas -->
          <q-select
            filled
            dark
            bottom-slots
            v-model="model2"
            :options="selectCantTime"
            label="¿Cuantas horas?"
            :dense="dense"
            :options-dense="denseOpts"
          >
            <template v-slot:prepend>
              <q-icon name="schedule" @click.stop.prevent />
            </template>

            <template v-slot:hint> Seleccione la cantidad de horas </template>
          </q-select>
          <!-- Botones -->
          <div class="row justify-end">
            <q-btn
              label="Limpiar"
              type="reset"
              color="positive"
              flat
              class="q-mr-sm"
            />
            <q-btn
              label="Continuar"
              type="submit"
              color="positive"
              text-color="dark"
            />
          </div>
        </q-form>
        <q-btn
          href="http://localhost:9000/mobile/buscar"
          push
          color="primary"
          text-color="black"
          size="lg"
          class="full-width border-radius-inherit q-mt-md"
          label="Volver"
          no-caps
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const listaHorariosDisponibles = [
  ["10:00", "11:00", "12:00", "15:00", "17:00"],
  ["11:00", "14:00", "15:00", "18:00", "20:00"],
  ["09:00", "11:00", "13:00", "18:00", "20:00"],
];

export default {
  setup() {
    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();

    let data = route.params.id;
    const codigo = ref(null);
    const date = ref(null);
    const model1 = ref(null);
    const model2 = ref(null);
    const selectDate = listaHorariosDisponibles[data - 1];

    function currentDate() {
      const current = new Date();
      const dateCurrent = `${current.getFullYear()}/${
        current.getMonth() + 1
      }/${current.getDate()}`;
      return dateCurrent;
    }

    const fechaActual = currentDate();

    return {
      data,
      date,
      model1,
      model2,
      selectDate,
      selectCantTime: [
        "1 hora",
        "2 horas",
        "3 horas",
        "4 horas",
        "5 horas",
        "6 horas",
        "7 horas",
        "8 horas",
      ],
      dense: ref(false),
      denseOpts: ref(false),
      codigo,
      dateRules: [
        (val) => (val && val.length > 0) || "Por favor, ingrese una fecha",
        (val) =>
          (val && val > fechaActual) || "Por favor, ingrese una fecha válida",
      ],

      onSubmit() {
        console.log("estoy en el submit")
        router.push({
          name: "forma-pago",
          params: {
            id: data,
          },
        });
      },

      onReset() {
        date.value = null;
        model1.value = null;
        model2.value = null;
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.q-option-group
  & .q-radio
    &__label
      font-size: 20px
      text-transform: uppercase
</style>
