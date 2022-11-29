<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <p class="text-h4 text-weight-bold text-primary text-center">Mis Patentes</p>
      <div class="q-mt-md">
        <q-list style="min-width: 300px">
          <!-- Primer Patente -->
          <q-item clickable v-ripple :active="active === 'primera'" @click="active = 'primera'"
            active-class="bg-grey-2">
            <q-item-section class="text-h5">AA-000-BB</q-item-section>

            <q-item-section side>
              <q-btn size="12px" round dense flat unelevated icon="delete" color="negative" />
            </q-item-section>
          </q-item>
          <!-- Aca hay que meter todas las patentes -->
          <q-intersection v-for="index in cantidadPatentes" v-bind:key="index">

            <q-item clickable v-ripple v-bind:index='index' :active="active === 'segunda'" @click="active = 'segunda'"
              active-class="bg-grey-2">
              <q-item-section class="text-h5">BB-111-CC</q-item-section>

              <q-item-section side>
                <q-btn size="12px" round dense flat unelevated icon="delete" color="negative" />
              </q-item-section>
            </q-item>
          </q-intersection>
        </q-list>

        <q-separator spaced />

        <q-btn push color="primary" label="Añadir Patente" class="full-width border-radius-inherit q-mt-md"
          @click="agregarPatente()" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  props: { agregarPatente: Function },

  setup() {
    const cantidadPatentes = ref(1);
    return {
      active: ref('primera'),
      cantidadPatentes,
      agregarPatente() {
        cantidadPatentes.value += 1;
      },
      copyToClipBoard(id) {
        const content = document.getElementById(id.codigo).innerHTML;

        navigator.clipboard
          .writeText(content)
          .then(() => {
            console.log("Text copied to clipboard...");
            $q.notify({
              color: 'positive',
              textColor: 'dark',
              icon: 'cloud_done',
              message: 'Copiado!',
            });
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
