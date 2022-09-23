<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="col-6 q-pa-md rounded-borders" style="max-width: 400px">

      <q-card-section>
        <p class="text-h4 text-center">Solicitar el servicio</p>
        <p class="text-h6 text-center">Los datos marcados con * son obligatorios</p>
      </q-card-section>
      <!-- FIXME puede que quieras reoganizar como se ven, no me odies.-->
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="nombre" type="text" label="Nombre *" hint="Ingrese su/s nombre" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']" />
        <q-input filled v-model="apellido" type="text" label="Apellido *" hint="Ingrese su/s apellido" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']" />
        <q-input filled v-model="mail" type="email" label="Email *" hint="Ingrese su email" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something', isValidEmail]" />
        <q-input v-model="comentario" filled type="textarea" label="Dejanos un mensaje (max 200 caracteres)" lazy-rules
          maxlength="200" />
        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div class="row justify-end">
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>

    </q-card>
    <!-- FIXME: Agrego esto, despues se puede reacomodar para que se vea mejor-->
    <div class="flex flex-row justify-center align-center">
      <router-link to="/">
        <q-btn> Volver a la pagina principal </q-btn>
      </router-link>
    </div>
  </q-page>
</template>
<!-- eslint-disable linebreak-style -->
<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();

    const nombre = ref(null);
    const apellido = ref(null);
    const mail = ref(null);
    const comentario = ref(null);
    const accept = ref(false);

    return {
      nombre,
      apellido,
      mail,
      comentario,
      accept,

      isValidEmail(val) {
        const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailRegex.test(val) || 'Ingrese un email valido';
      },

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        }
        // alert(`this is the name: ${name.value} and this is the age: ${age.value}`);
        setTimeout(() => {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Entrando al multiverso',
          });
        }, 3000);
      },

      onReset() {
        nombre.value = null;
        apellido.value = null;
        mail.value = null;
        comentario.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
