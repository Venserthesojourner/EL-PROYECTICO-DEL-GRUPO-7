<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="col-6 q-pa-md rounded-borders" style="max-width: 400px">

      <q-card-section>
        <p class="text-h4 text-center">Completa esta informacion</p>
        <p class="text-h6 text-center">estos datos son requeridos por unica vez para completar tu perfil como
          estacionamiento</p>
      </q-card-section>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="document" type="number" label="DNI" hint="Ingresa tu DNI" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Debes ingresar tu DNI']" />

        <q-input filled v-model="razonSocial" type="text" label="Razon Social" hint="Ingresa tu razon social" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Debes ingresar tu razon social']" />

        <q-select filled v-model="cantPlazas" :options="optionsPlazas" label="Cantidad de plazas"
          hint="Ingrese la cantidad de plazas" />

        <q-input filled v-model="timeOpen" mask="time" :rules="['time']" label="Ingrese la hora de apertura">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="timeOpen">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input filled v-model="timeClose" mask="time" :rules="['time']" label="Ingrese la hora de clausura">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="timeClose">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>

        </q-input>
        <q-option-group v-model="dias" :options="optionsDays" color="green" type="checkbox" />

        <q-input filled v-model="precio" type="number" label="Tarifa base (por hora)"
          hint="Ingresa la tarifa (por hora) en ARS" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Debes ingresar una tarifa base']" />

        <div class="row justify-end">
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>

    </q-card>
  </q-page>
</template>
<!-- eslint-disable linebreak-style -->
<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();

    const document = ref(null);
    const razonSocial = ref(null);
    const cantPlazas = ref(null);
    const timeOpen = ref(null);
    const timeClose = ref(null);
    const precio = ref(null);

    return {
      document,
      razonSocial,
      cantPlazas,
      timeOpen,
      timeClose,
      dias: ref(['']),
      optionsPlazas: [
        4, 5, 6, 7, 8, 9, 10,
      ],
      optionsDays: [
        {
          label: 'Lunes',
          value: 'lunes',
        },
        {
          label: 'Martes',
          value: 'martes',
        },
        {
          label: 'Miercoles',
          value: 'miercoles',
        },
        {
          label: 'Jueves',
          value: 'jueves',
        },
        {
          label: 'Viernes',
          value: 'viernes',
        },
        {
          label: 'Sabado',
          value: 'sabado',
        },
        {
          label: 'Domingo',
          value: 'domingo',
        },
      ],
      precio,

      onSubmit() {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Muy bien, continuemos',
        });
      },

      onReset() {
        document.value = null;
        razonSocial.value = null;
        cantPlazas.value = null;
        timeOpen.value = null;
        timeClose.value = null;
        precio.value = null;
      },
    };
  },
};
</script>
