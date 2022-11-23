<template>
  <q-page class="window-height row justify-center items-center">
    <div class="cho-container"></div>
  </q-page>
</template>

<script>

import { ref, onMounted } from "vue";
import require from "vue"

export default {
  setup() {

/* // SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "TEST-6970436998323033-112318-9728abe449b81b501bbaa64b6ff81d74-358727419",
});

// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ],
};

mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
  })
  .catch(function (error) {
    console.log(error);
  }); */

  const mp = new MercadoPago('TEST-669aacd7-5c09-4fc7-b35d-49b84af34e4c', {
    locale: 'es-AR'
  });

  mp.checkout({
    preference: {
      id: 1 //'YOUR_PREFERENCE_ID'
    },
    render: {
      container: '.cho-container',
      label: 'Pagar',
    }
  });


    return {
    }
  }
}
</script>
