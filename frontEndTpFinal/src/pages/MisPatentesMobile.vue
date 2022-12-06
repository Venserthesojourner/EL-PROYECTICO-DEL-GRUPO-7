<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <!-- Configuraciones Usuario -->
      <ConfiguracionesUser></ConfiguracionesUser>
      <p class="text-h4 text-weight-bold text-center">Mis Patentes</p>
      <div class="q-mt-md">
        <q-list dark style="min-width: 300px">
          <!-- Primer Patente -->
          <q-item clickable v-ripple :active="active === 'primera'" @click="active = 'primera'"
            active-class="bg-deep-purple-10 text-positive">
            <q-item-section class="text-h5">AA - 000 - BB</q-item-section>

            <q-item-section side>
              <q-btn size="12px" round dense flat unelevated icon="delete" color="deep-purple-2" />
            </q-item-section>
          </q-item>

          <!-- Aca hay que meter todas las patentes -->
          <q-intersection v-for="index in cantidadPatentes" v-bind:key="index">

            <q-item clickable v-ripple v-bind:index='index' :active="active === 'segunda'" @click="active = 'segunda'"
              active-class="bg-deep-purple-10 text-positive">
              <q-item-section class="text-h5">{{ patente }}</q-item-section>

              <q-item-section side>
                <q-btn size="12px" round dense flat unelevated icon="delete" color="deep-purple-2" />
              </q-item-section>
            </q-item>
          </q-intersection>

          <q-separator spaced />

          <!-- Formulario -->
          <q-form @submit="onSubmit" class="q-gutter-y-md q-mt-xs">
            <!-- Patente -->
            <q-input filled dark v-model="patente" type="text" label="Patente *" mask="AA - ### - AA"
              hint="AA - 000 - BB" lazy-rules
              :rules="[val => val && val.length > 0 || 'Por favor, ingrese una patente']" />
            <!-- Botones -->
            <div class="row justify-end">
              <q-btn push type="submit" color="warning" text-color="black" label="Añadir Patente"
                class="full-width q-mt-md" />
            </div>
          </q-form>
        </q-list>
      </div>
      <q-btn to="index" push color="primary" text-color="black" size="lg"
        class="full-width border-radius-inherit q-mt-md" label="Volver" no-caps />
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import ConfiguracionesUser from '../components/ConfiguracionesUser.vue';

export default {
  props: { agregarPatente: Function },
  components: {
    ConfiguracionesUser,
  },
  setup() {
    const $q = useQuasar();
    const cantidadPatentes = ref(0);
    const patente = ref(null);
    return {
      active: ref('primera'),
      patente,
      onSubmit() {
        $q.notify({
          color: 'positive',
          textColor: 'dark',
          icon: 'cloud_done',
          message: 'Patente Agregada',
        });
        cantidadPatentes.value += 1;
      },
      cantidadPatentes,
    }
  }
}
</script>
