<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row justify-center">
    <q-card flat class="col-12 q-pa-md" style="max-width: 800px">

      <q-card-section>
        <p class="text-h4 text-center">Nuevo Empleado</p>
      </q-card-section>

      <!-- Formulario -->
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <!-- DNI -->
        <q-input filled v-model="document" type="number" label="DNI" hint="Ingresa tu DNI" lazy-rules
          :rules="dniRules" />
        <!-- NOMBRE -->
        <q-input filled v-model="document" type="text" label="nombre" hint="Ingresa tu nombre" />
        <!-- APELIDO -->
        <q-input filled v-model="document" type="text" label="apellido" hint="Ingresa tu apellido" />
        <!-- email -->
        <q-input filled v-model="mail" type="email" label="Email *" hint="Ingrese su email" lazy-rules
          :rules="[val => val && val.length > 0 || 'Please type something', isValidEmail]" />
        <!-- Botones -->
        <div class="row justify-end">
          <q-btn label="Limpiar" type="reset" color="primary" flat class="q-mr-sm" />
          <q-btn label="Continuar" type="submit" color="primary" />
        </div>
      </q-form>

    </q-card>
  </q-page>
</template>

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
    const inputDias = ref([]);
    const dias = ref([]);
    const precio = ref(null);

    return {
      document,
      dniRules: [
        (val) => (val !== null && val !== '') || 'Por favor, ingrese su DNI',
        (val) => (val && val.length >= 7 && val.length <= 8) || 'Solo se permiten de 7 a 8 dígitos',
      ],
      razonSocial,
      optionsColaborador: [
        {
          label: 'No',
          value: 'no',
        },
        {
          label: 'Si',
          value: 'si',
        },
      ],
      cantPlazas,
      timeOpen,
      timeClose,
      inputDias,
      dias,
      preferred: ref('no'),
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
      isValidEmail(val) {
        const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailRegex.test(val) || 'Ingrese un email válido';
      },
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
        dias.value = [];
        precio.value = null;
      },
    };
  },
};
</script>
