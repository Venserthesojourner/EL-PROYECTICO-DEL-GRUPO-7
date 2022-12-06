<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page class="row items-center justify-evenly">
    <q-card dark flat class="col-12 q-pa-md" style="max-width: 400px">
      <q-card-section class="text-center">
        <p class="text-h4">Ingresar al panel</p>
      </q-card-section>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <!-- Nombre de Usuario -->
        <q-input filled dark v-model="username" type="text" hint="Ingrese su nombre de usuario" lazy-rules :rules="[
          (val) =>
            (val && val.length > 0) ||
            'Por favor, ingrese su nombre de usuario',
        ]" />
        <!-- Password -->
        <q-input filled dark v-model="password" :type="isPwd ? 'password' : 'text'" hint="Ingrese su contraseña" :rules="[
          (val) =>
            (val !== null && val !== '') ||
            'Por favor, ingrese su contraseña',
        ]">
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
        <!-- Registrate -->
        <div class="row items-center">
          <span>¿No tenes cuenta?, <a href="register">Registrate</a></span>
        </div>
        <!-- Botones -->
        <div class="row justify-end">
          <q-btn label="Limpiar" type="reset" color="positive" flat class="q-mr-sm" />
          <q-btn label="Ingresar" type="submit" color="positive" text-color="dark" />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>
<!-- eslint-disable linebreak-style -->
<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useSessionStatus } from "../stores/session-store";
import { useSessionLuis } from "../stores/userLuis";
import { useSessionMarcos } from "../stores/userMarcos";

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const store = useSessionStatus();
    const luis = useSessionLuis();

    const username = ref(null);
    const password = ref(null);
    const data = ref(null);

    return {
      store,
      luis,
      username,
      password,
      isPwd: ref(true),
      onSubmit() {
        setTimeout(() => {
          $q.notify({
            progress: true,
            message: "Iniciando sesión...",
            color: "secondary",
            textColor: "white",
          });
          setTimeout(() => {
            if (username.value !== null) {
              /*  axios.get(`http://localhost:3005/usuario/username/${username.value}`)
              .then((response) => {
                console.log(response);
                // TODO: seguir aca. */

              $q.notify({
                color: "positive",
                textColor: "dark",
                icon: "cloud_done",
                message: "¡Bienvenido!",
              });
              if (username.value === "luis") {
                luis.changeStatus();
                store.changeStatus();
                router.push("/dashboard/plazas");
              } else {
                store.changeStatus();
                router.push("/dashboard/plazas");
              }
            } else {
              $q.notify({
                message:
                  "Usuario o contraseña incorrectos",
                icon: "warning",
                color: "red-10",
                textColor: "white",
              });
              // }
              //    /*  // agregar los datos a la variable data.
              //     if ('') {
              //       router.push('/datos-persona');
              //     } else {
              //       router.push('/dashboard/plazas');
              //     } */
              //   })
              /*               .catch(() => {
               */
              /*               });
               */
            }
          }, 3000);
        }, 2000);
      },

      onReset() {
        username.value = null;
        password.value = null;
      },
    };
  },
};
</script>
