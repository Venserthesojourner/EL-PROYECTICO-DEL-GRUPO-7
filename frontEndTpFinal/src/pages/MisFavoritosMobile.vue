<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <!-- Configuraciones Usuario -->
      <ConfiguracionesUser></ConfiguracionesUser>
      <p class="text-h4 text-weight-bold text-primary text-center">Mis Favoritos</p>
      <div class="q-mt-md">
        <q-list dark style="min-width: 300px">
          <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
            <q-item-section>
              <q-item-label>{{ contact.name }}</q-item-label>
              <q-item-label caption lines="1">{{ contact.direccion }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn size="12px" round dense flat unelevated icon="delete" color="deep-purple-2" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <q-btn to="index" push color="primary" text-color="black" size="lg"
        class="full-width border-radius-inherit q-mt-md" label="Volver" no-caps />
    </div>
  </q-page>
</template>

<script>
import ConfiguracionesUser from '../components/ConfiguracionesUser.vue';

const contacts = [{
  id: 1,
  name: 'Parking NQN',
  direccion: '9 de Julio',
}, {
  id: 2,
  name: 'Estacionamiento Don Pepe',
  direccion: 'Av Siempre Viva 2001',
}]

import { ref, onMounted } from "vue";

export default {
  components: {
    ConfiguracionesUser,
  },
  setup() {

    onMounted(() => {

      //TODO: en teoria esto se carga primero
      setTimeout(() => {
        axios.get(`http://localhost:3000/usuario/username/${username.value}`)
          .then((response) => {
            console.log(response);
            // TODO: seguir aca.
            $q.notify({
              color: 'positive',
              textColor: 'dark',
              icon: 'cloud_done',
              message: '¬°Bienvenido!',
            });
            // agregar los datos a la variable data.
            if ('') {
              router.push('/datos-persona');
            } else {
              router.push('/dashboard/plazas');
            }
          })
          .catch(() => {
            $q.notify({
              message: 'Error en el registro de usuario, contactar con soporte.',
              icon: 'warning',
              color: 'red-10',
              textColor: 'white',
            });
          });
      }, 3000);
      //}, 2000);
    })

    return {
      contacts,
    }
  }
}
</script>
