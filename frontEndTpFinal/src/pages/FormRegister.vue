<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row items-center justify-evenly q-mb-lg">

    <q-card class="col-12 col-md-6 q-pa-md rounded-borders" style="max-width: 500px">

      <q-card-section class="text-center">
        <p class="text-h4">Solicitar el servicio</p>
        <span class="text-subtitle2">Los datos marcados con (*) son obligatorios</span>
        <pre>{{store.login}}</pre>

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
          <span class="text-primary cursor-pointer" @click="basic = true">Ver terminos y condiciones</span>
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
    <q-dialog v-model="basic">
      <q-card>

        <TerminosDeUso></TerminosDeUso>

        <q-card-actions align="right">
          <q-btn flat label="Aceptar" color="primary" v-close-popup @click="accept = true" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useSessionStatus } from '../stores/session-store';
import TerminosDeUso from '../components/TerminosDeUso.vue';

export default {

  components: {
    TerminosDeUso,
  },

  setup() {
    const $q = useQuasar();
    const store = useSessionStatus();
    const router = useRouter();
    const nombre = ref(null);
    const apellido = ref(null);
    const mail = ref(null);
    const comentario = ref(null);
    const accept = ref(false);

    function alert() {
      $q.dialog({
        title: 'Importante!',
        message: 'En breve recibira en email donde se indicaran los pasos a seguir, este atento a su bandeja de entrada por favor.',
        persistent: true,
      }).onDismiss(() => {
        router.push('/login');
      });
    }

    return {
      store,
      nombre,
      apellido,
      mail,
      comentario,
      accept,
      basic: ref(false),

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
        } else {
          const body = {
            firstName: nombre.value,
            lastName: apellido.value,
            email: mail.value,
            password: 'b7159b31a2fdf4ef8394df2234acca8fdbbc438f',
            role: 'owner',
          };
          const route = 'http://localhost:3000/usuario';
          setTimeout(() => {
            $q.notify({
              progress: true,
              message: 'Registrando usuario...',
              icon: 'progress',
              color: 'white',
              textColor: 'primary',
            });
            setTimeout(() => {
              axios.post(route, { body })
                .then((response) => {
                  console.log(response);
                  $q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: 'Registro exitoso!',
                  });
                  alert();
                })
                .catch((error) => {
                  console.log(error);
                  $q.notify({
                    message: 'Error en el registro de usuario, contactar con soporte.',
                    icon: 'warning',
                    color: 'red-5',
                    textColor: 'white',
                  });
                });
            }, 3000);
          }, 2000);
        }
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
