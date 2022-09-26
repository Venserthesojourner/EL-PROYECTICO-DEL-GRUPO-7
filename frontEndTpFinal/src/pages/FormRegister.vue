<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row items-center justify-evenly q-mb-lg">
    <q-card class="col-12 col-md-6 q-pa-md rounded-borders" style="max-width: 500px">

      <q-card-section class="text-center">
        <p class="text-h4">Solicitar el servicio</p>
        <span class="text-subtitle2">Los datos marcados con (*) son obligatorios</span>
      </q-card-section>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="nombre" type="text" label="Nombre *" hint="Ingrese su/s nombre" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']" />
        <q-input filled v-model="apellido" type="text" label="Apellido *" hint="Ingrese su/s apellido" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']" />
        <q-input filled v-model="mail" type="email" label="Email *" hint="Ingrese su email" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something', isValidEmail]" />
        <q-input v-model="comentario" filled type="textarea" label="Dejanos un mensaje (max 200 caracteres)" lazy-rules
          maxlength="200" />
        <div class="row items-center">
          <q-toggle v-model="accept" checked-icon="check" color="green" unchecked-icon="clear" lazy-rules
            @click="accept = false" :rules="[val => val && val === false || 'Debe ver los terminos y condiciones']" />
          <span class="text-primary cursor-pointer" @click="toolbar = true">Ver terminos y condiciones</span>
        </div>

        <div class="row justify-between">
          <div>
            <q-btn to="/" color="accent" label="Volver"></q-btn>
          </div>
          <div>
            <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn label="Registrarse" type="submit" color="primary" />
          </div>
        </div>
      </q-form>

    </q-card>

    <!-- Modal / Dialog de Terminos y Condiciones -->
    <q-dialog v-model="toolbar">
      <q-card>
        <q-toolbar>
          <q-avatar>
            <img src="../assets/logo2.png">
          </q-avatar>

          <q-toolbar-title>
            <div class="text-h6">Terms of Agreement</div>
          </q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
          <p v-for="n in 15" :key="n">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit
            voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam
            exercitationem aut, natus minima, porro labore.</p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Acepto los terminos y condiciones" color="primary" v-close-popup @click="accept = true" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      toolbar: ref(false),

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
            message: 'Tienes que ver y aceptar los terminos y condiciones',
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
