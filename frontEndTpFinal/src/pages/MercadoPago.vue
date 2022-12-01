<template>
  <q-page class="window-height row justify-center items-center">
    <div class="cho-container"></div>
  </q-page>
</template>

<script>

import { ref, onMounted } from "vue";
import axios from 'axios';

export default {
  setup() {

    /* // SDK de Mercado Pago
    const mercadopago = require("mercadopago");
    // Agrega credenciales
    mercadopago.configure({
      access_token: "TEST-6970436998323033-112318-9728abe449b81b501bbaa64b6ff81d74-358727419",
    });*/

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

    const orderData = {
      quantity: 34 || document.getElementById("quantity").value,
      description: 'LADESC' || document.getElementById("product-description").innerHTML,
      price: 150 || document.getElementById("unit-price").innerHTML
    };

    /* mercadopago.preferences
      .create(preference)
      .then(function (response) {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      })
      .catch(function (error) {
        console.log(error);
      }); */

    const mp = new MercadoPago('TEST-5d1491c9-7ee2-4abf-b405-dbdb19d637d3', {
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
      onSubmit() {
        axios.post('http://localhost:8080/create_preference', orderData)
          .then((request, response) => { mp.checkout; console.log(response) })
      }
    }
  }
}
</script>
