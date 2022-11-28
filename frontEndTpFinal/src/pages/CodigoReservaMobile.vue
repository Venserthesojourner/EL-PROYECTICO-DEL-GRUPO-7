<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <qrcode-vue v-bind:value="codigoRandom" :size="size" level="H" />
      <div class="q-mt-md q-gutter-y-md" style="min-width: 300px">
        <p class="text-h4 text-weight-bold text-primary text-center">Clave de Reserva</p>
        <div class="q-mt-md">
          <q-list style="min-width: 300px">
            <!-- codigo generado randomazicamente porque hace calor y uff las alemanas -->
            <q-item clickable v-ripple active-class="bg-grey-2">
              <q-item-section id="codigo" class="text-overline">{{ codigoRandom }}</q-item-section>

              <q-item-section side>
                <q-btn size="12px" round dense flat unelevated icon="content_copy" color="grey-4"
                  @click="copyToClipBoard()" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <q-btn to="cronometro" push color="positive" text-color="black" size="lg"
          class="full-width border-radius-inherit" label="Continuar" no-caps />
        <q-btn to="forma-pago" push color="primary" text-color="black" size="lg"
          class="full-width border-radius-inherit" label="Volver" no-caps />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import QrcodeVue from 'qrcode.vue';


export default {
  props: { copyToClipBoard: Function },
  components: {
    QrcodeVue,
  },
  setup() {
    const codigoRandom = ref("abc123");

    onMounted(() => {
      function generarRandom(num = 6) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let result = "";
        let ch;
        while (result.length < num) {
          ch = characters.charAt(Math.floor(Math.random() * charactersLength));
          if (!result.includes(ch)) {
            result += ch;
          }
        }
        codigoRandom.value = result;
      }
      generarRandom(6);
      function data() {
        return {
          value: codigoRandom.value,
          size: 400,
        }
      };
    })

    return {
      codigoRandom,
      copyToClipBoard() {
        const content = document.getElementById("codigo").innerHTML;

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
