<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <q-icon name="fa-solid fa-key" color="primary" size="6rem" />
      <div class="q-mt-md q-gutter-y-md">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-y-md" style="min-width: 300px">
          <p class="text-h4 text-weight-bold text-primary text-center">Ingresar Código</p>
          <q-input filled dark v-model="codigo" type="text" label="Código de reserva" lazy-rules
            :rules="[val => val && val.length > 0 || 'Por favor, ingrese una código']" />
          <q-btn type="submit" push color="positive" text-color="black" size="lg"
            class="full-width border-radius-inherit" label="Enviar" no-caps />
          <!-- Volver -->
          <q-btn to="index" push color="primary" text-color="black" size="lg" class="full-width border-radius-inherit"
            label="Volver" no-caps />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const codigo = ref(null);

    return {
      codigo,
      onSubmit() {
        if (codigo.value == null) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Código inválido',
          });
        }
        else {
          $q.notify({
            color: 'positive',
            textColor: 'dark',
            icon: 'cloud_done',
            message: 'Código válido',
          });
          router.push('cronometro');
        }

        //TODO: hay que hacer que cuando hace el submit, cargue de nuevo la pagina para traer los datos actualizados de la BD
        /*  const body = {
               username: username.value,
               email: mail.value,
               password: 'b7159b31a2fdf4ef8394df2234acca8fdbbc438f',
               role: 'owner',
             };
             const route = 'http://localhost:3000/api/web/NOMBRE_TABLA';
   
             setTimeout(() => {
               $q.notify({
                 progress: true,
                 message: 'actualizando precio...',
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
                       message: '¡precio actualizado!',
                     });
                     alert();
                   })
                   .catch(() => {
                     $q.notify({
                       message: 'Error en la actualizacion del precio, contactar con soporte.',
                       icon: 'warning',
                       color: 'red-5',
                       textColor: 'white',
                     });
                   });
               }, 3000);
             }, 2000); */
      },

      onReset() {
        codigo.value = null;
      },
    }
  }
}
</script>
