<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row q-col-gutter-sm justify-center">
    <!-- Formulario -->
    <div class="col-12 col-md-6">
      <q-card flat class="q-pa-md" style="max-width: 500px">
        <q-card-section>
          <p class="text-h4 text-center">Modificar Horarios</p>
        </q-card-section>

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Horario Entrada -->
          <q-input filled v-model="time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <!-- Horario Salida -->
          <q-input filled v-model="time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <!-- Botones -->
          <div class="row justify-end">
            <q-btn label="Limpiar" type="reset" color="primary" flat class="q-mr-sm" />
            <q-btn label="Actualizar" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card>
    </div>
    <!-- Horarios -->
    <div class="col-12 col-md-6">
      <div class="q-pa-md col-12 q-mt-md col-lg-6 text-h4 text-center">Horarios</div>
      <!-- Entrada -->
      <div class="q-pa-md col-12 col-lg-6">
        <q-card class="text-center">
          <q-card-section class="card-title text-white text-h4">
            Entrada
          </q-card-section>
          <q-separator />
          <q-card-section class="card-precio flex flex-center">
            00:00
          </q-card-section>
        </q-card>
      </div>
      <!-- Salida -->
      <div class="q-pa-md col-12 col-lg-6">
        <q-card class="text-center">
          <q-card-section class="card-title text-white text-h4">
            Salida
          </q-card-section>
          <q-separator />
          <q-card-section class="card-precio flex flex-center">
            00:00
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,
      time: ref('10:56'),

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.q-card
  border-radius: 1rem
  & .card-title
    background-color: #ffffff
    background-image: url("../assets/background-l1.png")
    &.text-h4
      text-shadow: 0 0 5px #dfd2ff
  & .card-precio
    font-size: 2rem
    padding: 2px
</style>
