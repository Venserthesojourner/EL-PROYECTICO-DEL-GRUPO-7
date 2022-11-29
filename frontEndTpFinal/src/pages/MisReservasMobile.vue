<template>
  <q-page class="window-height column justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <!-- Configuraciones Usuario -->
      <ConfiguracionesUser></ConfiguracionesUser>
      <p class="text-h4 text-weight-bold text-primary text-center">
        Mis Reservas
      </p>
      <div class="q-mt-md">
        <q-list dark style="min-width: 300px">
          <!-- Aca hay que meter todos los codigos de reserva activos -->
          <q-intersection v-for="codigo in listaCodigoReserva" v-bind:key="codigo">
            <q-item clickable v-ripple v-bind:index="index" active-class="bg-grey-2">
              <q-item-section v-bind:id="codigo" class="text-overline">{{
                  codigo
              }}</q-item-section>

              <q-item-section side>
                <q-btn size="12px" round dense flat unelevated icon="content_copy" color="grey-4"
                  @click="copyToClipBoard({ codigo })" />
              </q-item-section>
            </q-item>

            <q-separator spaced />
          </q-intersection>
        </q-list>
      </div>
      <q-btn to="index" push color="primary" text-color="black" size="lg"
        class="full-width border-radius-inherit q-mt-md" label="Volver" no-caps />
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from 'quasar';
import ConfiguracionesUser from '../components/ConfiguracionesUser.vue';

const listaCodigoReserva = ["5Fq23", "Abc234", "6gN1m"];

export default {
  props: { agregarPatente: Function, copyToClipBoard: Function },
  components: {
    ConfiguracionesUser,
  },
  setup() {
    const $q = useQuasar();
    const cantidadCodigosReserva = ref(1);
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
