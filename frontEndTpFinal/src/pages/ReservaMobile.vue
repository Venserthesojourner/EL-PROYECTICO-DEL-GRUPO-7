<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <q-icon name="fa-solid fa-key" color="primary" size="6rem" />
      <div class="q-mt-md q-gutter-y-md">
        <q-form @submit="onSubmit" @reset="onReset" style="min-width: 300px">
          <p class="text-h4 text-weight-bold text-primary text-center">Ingresar Código</p>
          <q-input filled v-model="codigo" type="text" label="Código de reserva" lazy-rules
            :rules="[val => val && val.length > 0 || 'Por favor, ingrese una código']" />
          <q-btn to="cronometro" push color="positive" size="lg" class="full-width border-radius-inherit" label="Enviar"
            no-caps />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const codigo = ref(null);

    return {
      codigo,
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Código inválido',
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Enviado',
          })
        }
      },

      onReset() {
        codigo.value = null;
      },
    }
  }
}
</script>