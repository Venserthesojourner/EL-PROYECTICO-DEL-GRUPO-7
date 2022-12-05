<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <capacitor-google-map id="map" ref="map"></capacitor-google-map>
      <div>
        <q-list style="min-width: 320px" class="q-mt-md">

          <q-separator spaced />
          <q-intersection v-for="estacionamiento in listaEstacionamientos" v-bind:key="estacionamiento.id">
            <q-item dense clickable v-ripple @click="idEstacionamiento({ estacionamiento })">
              <q-item-section>
                <q-item-label>{{ estacionamiento.name }}</q-item-label>
                <q-item-label class="text-primary" caption lines="1">Precio x hora ${{ estacionamiento.price
                }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn size="12px" round dense flat unelevated icon="local_parking" color="primary" />
              </q-item-section>
            </q-item>

            <q-separator spaced />
          </q-intersection>


        </q-list>
      </div>
      <!-- Volver -->
      <q-btn to="index" push color="primary" text-color="black" size="lg"
        class="full-width border-radius-inherit q-mt-md" label="Volver" no-caps />
    </div>
  </q-page>
</template>

<script>
import { GoogleMap } from "@capacitor/google-maps";
import { Geolocation } from '@capacitor/geolocation';
import { ref, onMounted, onUnmounted, computed } from "vue";
import axios from 'axios';
import datosTest from "./tests.json"
import { useRouter } from 'vue-router';
import { json } from "body-parser";

const listaEstacionamientos = [{ id: 1, name: "Buenos Aires Parking", price: "300.00" }, { id: 2, name: "Estacionamiento rioja 456", price: "400.00" }, { id: 3, name: "Paco Parking", price: "450.00" }];


export default {
  props: { idEstacionamiento: Function },
  setup() {
    const cantidadPatentes = ref(1);
    const router = useRouter();



    let map = ref(null);
    let coords = ref({ latitude: 0, longitude: 0 });
    let watcher = null;
    const locations = [
      {
        lat: -38.946947149674074,
        lng: -68.05760492266015,
      },
      {
        lat: -38.948842034836076,
        lng: -68.06348920040442,
      },
      {
        lat: -38.95059423145028,
        lng: -68.05144608164939,
      },
      {
        lat: -38.957669327968766,
        lng: -68.06680977393381,
      },
      {
        lat: -38.965477812334896,
        lng: -68.05951416576093,
      },
    ]
    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      coords.value.latitude = coordinates.coords.latitude
      coords.value.longitude = coordinates.coords.longitude
    };
    const createMap = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      const mapRef = document.getElementById("map");
      const newMap = await GoogleMap.create({
        id: "my-map", // Unique identifier for this map instance
        element: mapRef, // reference to the capacitor-google-map element
        apiKey: "AIzaSyDNTB4niPc8g6uZVTcTzDMzBKi-Vy_HciY", // Your Google Maps API Key
        config: {
          center: {
            // The initial position to be rendered by the map
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude,
          },
          zoom: 10, // The initial zoom level to be rendered by the map
        },
      });
      for (let index = 0; index < locations.length; index++) {
        await newMap.addMarker({
          coordinate: {
            lat: locations[index].lat,
            lng: locations[index].lng,
          },
          title: "Buenos Parking",
        });
      }
      await newMap.setOnMarkerClickListener(() => {
        alert("Buenos Aires Parking");
      });
      await newMap.addMarker({
        coordinate: {
          lat: coords.value.latitude,
          lng: coords.value.longitude,
        },
        tittle: "estacionamiento",
      });
    };

    const cargarEstacionamientos = () => {
      axios.get('')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    };

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
              message: '¡Bienvenido!',
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

      printCurrentPosition();
      if (!(coords.value.latitude === undefined) || !(coords.value.longitude === undefined)) {
        createMap();
        cargarEstacionamientos();
      }
    });
    onUnmounted(() => {
      if (watcher) navigator.geolocation.clearWatch(watcher);
    });
    return {
      coords,
      active: ref('primera'),
      cantidadPatentes,
      listaEstacionamientos,
      idEstacionamiento(est) {
        console.table(est.estacionamiento.id);
        router.push({
          name: "forma-pago",
          params: {
            id: est.estacionamiento.id
          }
        })
      },
    };
  },
};
</script>

<style>
.my-card {
  width: 100%;
}

.card-list {
  width: 100%
}

capacitor-google-map {
  width: 320px;
  height: 50vh;
}
</style>
