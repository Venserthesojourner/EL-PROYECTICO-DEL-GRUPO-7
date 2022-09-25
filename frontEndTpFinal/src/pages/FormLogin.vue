<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="col-12 q-pa-md rounded-borders" style="max-width: 400px">

      <q-card-section>
        <p class="text-h4 text-center">Ingresar al panel</p>
      </q-card-section>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="username" type="text" label="Nombre de usuario *" hint="Name and surname" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor, ingrese su nombre de usuario']" />

        <q-input filled type="password" v-model="password" label="Contraseña *" lazy-rules :rules="[
                  val => val !== null && val !== '' || 'Por favor, ingrese su contraseña',
        ]" />
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

    const username = ref(null);
    const password = ref(null);

    return {
      username,
      password,

      onSubmit() {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Sesion iniciada',
        });
      },

      onReset() {
        username.value = null;
        password.value = null;
      },
    };
  },
};
</script>
