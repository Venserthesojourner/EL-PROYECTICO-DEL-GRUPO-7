<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <!-- Configuraciones Usuario -->
      <q-toolbar class="text-primary row justify-end no-padding">
        <q-btn-dropdown flat round dense dropdown-icon="settings">
          <q-list style="min-width: 150px">
            <q-item clickable v-close-popup to="mis-patentes">
              <q-item-section>
                <q-item-label>Mis Patentes</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-icon name="directions_car" />
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="mis-reservas">
              <q-item-section>
                <q-item-label>Mis Reservas</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-icon name="qr_code" />
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="mis-favoritos">
              <q-item-section>
                <q-item-label>Favoritos</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-icon name="favorite" />
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="mi-historial">
              <q-item-section>
                <q-item-label>Historial</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-icon name="history" />
              </q-item-section>
            </q-item>

            <q-item clickable @click=logoutSession() v-ripple to="/">
              <q-item-section>
                <q-item-label>Cerrar Sesión</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
      <p class="text-h4 text-weight-bold text-primary text-center">Historial</p>
      <div class="q-mt-md">
        <q-list style="min-width: 300px">
          <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
            <q-item-section>
              <q-item-label class="text-overline">{{ contact.name }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn size="12px" round dense flat unelevated icon="description" color="secondary" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
const contacts = [{
  id: 1,
  name: '5fYU8',
}, {
  id: 2,
  name: '2eo4W',
}]

import { ref, onMounted } from "vue";


export default {
  setup() {

    onMounted(() => {

      //TODO: en teoria esto se carga primero
       // setTimeout(() => {
          //   axios.get(`http://localhost:3000/usuario/username/${username.value}`)
          //     .then((response) => {
          //       console.log(response);
          //       // TODO: seguir aca.
          //       $q.notify({
          //         color: 'green-4',
          //         textColor: 'white',
          //         icon: 'cloud_done',
          //         message: '¡Bienvenido!',
          //       });
          //       // agregar los datos a la variable data.
          //       if ('') {
          //         router.push('/datos-persona');
          //       } else {
          //         router.push('/dashboard/plazas');
          //       }
          //     })
          //     .catch(() => {
          //       $q.notify({
          //         message: 'Error en el registro de usuario, contactar con soporte.',
          //         icon: 'warning',
          //         color: 'red-5',
          //         textColor: 'white',
          //       });
          //     });
          // }, 3000);
        //}, 2000);
          })
    return {
      contacts,
    }
  }
}
</script>

<style lang="sass" scoped>
.text-overline
  font-size: 1.5rem
</style>
