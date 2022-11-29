<template>
  <q-page padding class="row justify-center">
    <q-card flat class="col-12 q-pa-md" style="max-width: 800px">

      <q-card-section>
        <p class="text-h4 text-center">Editar información</p>
      </q-card-section>

      <!-- Formulario -->
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <!-- DNI -->
        <q-input filled v-model="document" type="number" label="DNI" hint="Ingresa tu DNI" lazy-rules
          :rules="dniRules" />
        <!-- Razon Social -->
        <q-input filled dark v-model="razonSocial" type="text" label="Razon Social" hint="Ingresa tu razon social"
          lazy-rules :rules="[val => val && val.length > 0 || 'Debes ingresar tu razon social', isValidRazon]" />
        <!-- Cantidad de Plazas -->
        <q-select filled v-model="cantPlazas" :options="optionsPlazas" label="Cantidad de plazas" lazy-rules
          :rules="[val => val || 'Debes seleccionar la cantidad de plazas']" hint="Ingrese la cantidad de plazas" />
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

    return {
      document,
      dniRules: [
        (val) => (val !== null && val !== '' && val > 0) || 'Por favor, ingrese un DNI',
        (val) => (val && val.length >= 7 && val.length <= 8) || 'Solo se permiten de 7 a 8 dígitos',
      ],
      razonSocial,
      cantPlazas,
      optionsPlazas: [
        4, 5, 6, 7, 8, 9, 10,
      ],
      isValidRazon(val) {
        const razonRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
        return razonRegex.test(val) || 'Ingrese un razon válido';
      },

      onSubmit() {
        $q.notify({
          color: 'positive',
          textColor: 'dark',
          icon: 'check_circle',
          message: 'Muy bien, continuemos',
        });


        //TODO: hay que hacer que cuando hace el submit, cargue de nuevo la pagina para traer los datos actualizados de la BD
        const body = {
          username: username.value,
          email: mail.value,
          password: 'b7159b31a2fdf4ef8394df2234acca8fdbbc438f',
          role: 'owner',
        };
        const route = 'http://localhost:3000/api/web/NOMBRE_TABLA';

        setTimeout(() => {
          $q.notify({
            progress: true,
            message: 'Actualizando...',
            color: 'secondary',
            textColor: 'white',
          });
          setTimeout(() => {
            axios.post(route, body)
              .then(() => {
                $q.notify({
                  color: 'positive',
                  textColor: 'dark',
                  icon: 'check_circle',
                  message: '¡Actualizado!',
                });
                alert();
              })
              .catch(() => {
                $q.notify({
                  message: 'Error en la actualizacion, contactar con soporte.',
                  icon: 'warning',
                  color: 'red-10',
                  textColor: 'white',
                });
              });
          }, 3000);
        }, 2000);
      },

      onReset() {
        document.value = null;
        razonSocial.value = null;
        cantPlazas.value = null;
      },
    };
  },
};
</script>
