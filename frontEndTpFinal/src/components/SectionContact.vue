<!-- eslint-disable max-len -->
<template>
  <section id="contact">
    <div padding class="row items-center justify-evenly q-mb-lg">
      <q-card flat dark class="col-12 col-md-6 q-pa-md rounded-borders" style="max-width: 1000px">

        <q-card-section class="text-center">
          <h3 class="col-12 text-h3 text-center">Contacto</h3>
        </q-card-section>

        <q-form @submit="onSubmit" class="q-gutter-md">
          <!-- Nombre -->
          <q-input filled dark v-model="nombre" type="text" label="Nombre/s" hint="Ingresa tu/s nombre/s" lazy-rules
            :rules="[val => val && val.length > 0 || 'Debes ingresar tu/s nombre/s', isValidNombre]" />
          <!-- Email -->
          <q-input filled dark v-model="mail" type="Email" label="Email" lazy-rules
            :rules="[val => val && val.length > 0 || 'Por favor, ingrese un mail', isValidEmail]" />
          <!-- Comentarios -->
          <q-input v-model="comentario" filled dark type="textarea" label="Déjanos un mensaje (máximo 200 caracteres)"
            lazy-rules maxlength="200" :rules="[val => val && val.length > 0 || 'Por favor, ingrese un comentario']" />
          <!-- Botones -->
          <div class="row justify-center">
            <q-btn push label="Enviar" type="submit" color="primary" size="lg" text-color="black"
              class="q-px-xl q-py-xs border-radius-inherit" no-caps />
          </div>
        </q-form>

      </q-card>
    </div>
  </section>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();
    const nombre = ref(null);
    const mail = ref(null);
    const comentario = ref(null);

    return {
      nombre,
      mail,
      comentario,
      isValidEmail(val) {
        const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailRegex.test(val) || 'Ingrese un email válido';
      },
      isValidNombre(val) {
        const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
        return nombreRegex.test(val) || 'Ingrese un nombre válido';
      },

      onSubmit() {
        $q.notify({
          color: 'positive',
          textColor: 'dark',
          icon: 'mood',
          message: 'Mensaje enviado',
        });
      },
    };
  },
};
</script>

<style lang="sass" scoped>
@media(max-width: 600px)
  .text-h3
      font-size: 2.5rem
.text-h3
  margin-top: 0px
  margin-bottom: 16px
</style>