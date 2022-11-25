<template>
  <q-page class="window-height column justify-center items-center">
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

            <q-item clickable @click="logoutSession()" v-ripple to="/">
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
      <p class="text-h4 text-weight-bold text-primary text-center">
        Mis Reservas
      </p>
      <div class="q-mt-md">
        <q-list style="min-width: 300px">
          <!-- Primer Patente -->
          <q-item clickable v-ripple active-class="bg-grey-2">
            <q-item-section class="text-overline">Cf30g</q-item-section>

            <q-item-section side>
              <q-btn
                size="12px"
                round
                dense
                flat
                unelevated
                icon="content_copy"
                color="grey-7"
              />
            </q-item-section>
          </q-item>

          <q-separator spaced />

          <!-- Aca hay que meter todos los codigos de reserva activos -->
          <q-intersection
            v-for="codigo in listaCodigoReserva"
            v-bind:key="codigo"
          >
            <q-item
              clickable
              v-ripple
              v-bind:index="index"
              active-class="bg-grey-2"
            >
              <q-item-section v-bind:id="codigo" class="text-overline">{{
                codigo
              }}</q-item-section>

              <q-item-section side>
                <q-btn
                  size="12px"
                  round
                  dense
                  flat
                  unelevated
                  icon="content_copy"
                  color="grey-7"
                  @click="copyToClipBoard({codigo})"
                />
              </q-item-section>
            </q-item>

            <q-separator spaced />
          </q-intersection>
        </q-list>
      </div>
    </div>
    <q-btn
      icon="arrow_back"
      color="primary"
      to="index"
      class="q-mt-md"
      label="volver"
    />
  </q-page>
</template>

<script>
import { ref } from "vue";

const listaCodigoReserva = ["abc123", "abc234", "abc345"];

export default {
  props: { agregarPatente: Function, copyToClipBoard: Function },

  setup() {
    const cantidadCodigosReserva = ref(1);

    /* const copyToClipBoard = (id) => {
      alert(id);
      const content = document.getElementById(id).innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
    } */

    return {
      active: ref("primera"),
      cantidadCodigosReserva,
      listaCodigoReserva,
      agregarPatente() {
        cantidadCodigosReserva.value += 1;
      },
      copyToClipBoard(id) {
       const content = document.getElementById(id.codigo).innerHTML;

        navigator.clipboard
          .writeText(content)
          .then(() => {
            console.log("Text copied to clipboard...");
          })
          .catch((err) => {
            console.log("Something went wrong");
          });
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.text-overline
  font-size: 1.5rem
</style>
