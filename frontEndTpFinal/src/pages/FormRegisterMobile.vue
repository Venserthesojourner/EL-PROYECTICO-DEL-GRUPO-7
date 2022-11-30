<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row items-center justify-evenly q-mb-lg">
    <q-card dark flat class="col-12 col-md-6 q-pa-md rounded-borders" style="max-width: 500px">

      <q-card-section class="text-center">
        <p class="text-h4">Bienvenido a PARK-OUR</p>
        <span class="text-subtitle2">Los datos marcados con (*) son obligatorios</span>
      </q-card-section>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <!-- Nombre -->
        <q-input filled dark v-model="username" type="text" label="Nombre de usuario *"
          hint="Ingrese su nombre de usuario" lazy-rules
          :rules="[val => val && val.length > 0 || 'Por favor, ingrese un nombre de usuario']" />
        <!-- Email -->
        <q-input filled dark v-model="mail" type="Email" label="Email *" hint="Ingrese su email" lazy-rules
          :rules="[val => val && val.length > 0 || 'Por favor, ingrese un mail', isValidEmail]" />
        <!-- Comentarios -->
        <q-input v-model="comentario" filled dark type="textarea" label="Déjanos un mensaje (máximo 200 caracteres)"
          lazy-rules maxlength="200" />
        <!-- Términos y Condiciones -->
        <div class="row items-center">
          <q-toggle v-model="accept" checked-icon="check" color="green" lazy-rules @click="accept = false"
            :rules="[val => val && val === false || 'Debe ver los términos y condiciones']" />
          <span class="text-primary cursor-pointer" @click="basic = true">Ver términos y condiciones *</span>
        </div>
        <!-- Registrate -->
        <div class="row items-center">
          <span>¿Ya tenes cuenta? <a href="login">Ingresa</a></span>
        </div>
        <!-- Botones -->
        <div class="row justify-end">
          <q-btn label="Limpiar" type="reset" color="positive" flat class="q-mr-sm" />
          <q-btn label="Registrarse" type="submit" color="positive" text-color="dark" />
        </div>
      </q-form>

    </q-card>

    <!-- Modal / Dialog de Términos y Condiciones -->
    <q-dialog v-model="basic">
      <q-card dark>

        <TerminosDeUso></TerminosDeUso>

        <q-card-actions align="right">
          <q-btn flat label="Aceptar" color="positive" v-close-popup @click="accept = true" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<!-- eslint-disable linebreak-style -->
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
    const username = ref(null);
    const mail = ref(null);
    const comentario = ref(null);
    const accept = ref(false);

    function alert() {
      $q.dialog({
        title: 'Importante!',
        message: 'En breve recibirá un email donde se indicarán los pasos a seguir, este atento a su bandeja de entrada.',
        persistent: true,
      }).onDismiss(() => {
        router.push('/login');
      });
    }

    return {
      store,
      username,
      mail,
      comentario,
      accept,
      basic: ref(false),
      isValidEmail(val) {
        const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailRegex.test(val) || 'Ingrese un email válido';
      },
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Tienes que aceptar los términos y condiciones',
          });
        } else {
          // Este es el form del registro del propietario: role: 'owner'
          const body = {
            username: username.value,
            email: mail.value,
            role: 'owner', //TODO: cambiar al usuario que corresponda
          };
          const route = 'http://localhost:3005/usuario';
          setTimeout(() => {
            $q.notify({
              progress: true,
              message: 'Registrando usuario...',
              color: 'secondary',
              textColor: 'white',
            });
            setTimeout(() => {
              axios.post(route, body)
                .then(() => {
                  $q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: '¡Registro exitoso!',
                  });
                  alert();
                })
                .catch(() => {
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
        username.value = null;
        mail.value = null;
        comentario.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
