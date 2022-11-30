<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row justify-center">
    <q-card dark flat class="col-12 q-pa-md" style="max-width: 800px">

      <q-card-section>
        <p class="col-12 text-h4 text-center">Completar información (Persona)</p>
        <p class="text-body text-center">Estos datos son requeridos por única vez para completar tu perfil </p>
      </q-card-section>

      <!-- Formulario -->
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <!-- DNI -->
        <q-input filled dark v-model="document" type="number" label="DNI" hint="Ingresa tu DNI" lazy-rules
          :rules="dniRules" />
        <!-- Nombre -->
        <q-input filled dark v-model="nombre" type="text" label="Nombre/s" hint="Ingresa tu/s nombre/s" lazy-rules
          :rules="[val => val && val.length > 0 || 'Debes ingresar tu/s nombre/s', isValidNombre]" />
        <!-- Apellido -->
        <q-input filled dark v-model="apellido" type="text" label="Apellido/s" hint="Ingresa tu/s apellido/s" lazy-rules
          :rules="[val => val && val.length > 0 || 'Debes ingresar tu/s apellidos/s', isValidApellido]" />
        <!-- Botones -->
        <div class="row justify-center">
          <q-btn label="Limpiar" type="reset" color="positive" flat class="q-mr-sm" />
          <q-btn label="Continuar" type="submit" color="positive" text-color="dark" />
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
    const nombre = ref(null);
    const apellido = ref(null);

    return {
      document,
      nombre,
      apellido,
      dniRules: [
        (val) => (val !== null && val !== '' && val > 0) || 'Por favor, ingrese un DNI',
        (val) => (val && val.length >= 7 && val.length <= 8) || 'Solo se permiten de 7 a 8 dígitos',
      ],
      isValidNombre(val) {
        const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
        return nombreRegex.test(val) || 'Ingrese un nombre válido';
      },
      isValidApellido(val) {
        const apellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
        return apellidoRegex.test(val) || 'Ingrese un apellido válido';
      },

      onSubmit() {
        $q.notify({
          color: 'positive',
          textColor: 'dark',
          icon: 'cloud_done',
          message: 'Muy bien, continuemos',
        });
      },

      onReset() {
        document.value = null;
        nombre.value = null;
        apellido.value = null;
      },
    };
  },
};
</script>
