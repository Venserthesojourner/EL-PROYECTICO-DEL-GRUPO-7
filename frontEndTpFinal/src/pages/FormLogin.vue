<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="col-12 q-pa-md rounded-borders" style="max-width: 400px">

      <q-card-section>
        <p class="text-h4 text-center">Ingresar al panel</p>
      </q-card-section>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="username" type="text" label="Nombre de usuario *" hint="Ingrese su nombre de usuario"
          lazy-rules :rules="[ val => val && val.length > 0 || 'Por favor, ingrese su nombre de usuario']" />

        <q-input filled type="password" v-model="password" label="Contraseña *" hint="Ingrese su contraseña" lazy-rules
          :rules="[
                    val => val !== null && val !== '' || 'Por favor, ingrese su contraseña',
          ]" />
        <div class="row justify-end">
          <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
          <q-btn label="Ingresar" type="submit" color="primary" />
        </div>
      </q-form>

    </q-card>
  </q-page>
</template>
<!-- eslint-disable linebreak-style -->
<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import data from '../data/userRegister.json';

export default {
  setup() {
    const $q = useQuasar();

    const username = ref(null);
    const password = ref(null);

    return {
      username,
      password,

      onSubmit() {
        if (data.users[0].name === username.value) {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Sesion iniciada',
          });
        } else {
          $q.notify({
            color: 'red-4',
            textColor: 'white',
            icon: 'error',
            message: 'Usuario y/o contraseña incorrecto',
          });
        }
      },

      onReset() {
        username.value = null;
        password.value = null;
      },
    };
  },
};
</script>
