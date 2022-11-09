<template>
  <q-page class="window-height row justify-center items-center">
    <p>{{ coords.value }}</p>
    <capacitor-google-map id="map" ref="map"></capacitor-google-map>
  </q-page>
</template>

<script>
import { GoogleMap } from "@capacitor/google-maps";
import { ref, onMounted, onUnmounted, computed } from "vue";
export default {
  setup() {
    let map = ref(null);
    let coords = ref({ latitude: 0, longitude: 0 });
    const isSuported = "navigator" in window && "geolocation" in navigator;
    let watcher = null;
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));

    console.log(currPos.value);
    const createMap = async () => {
      const mapRef = document.getElementById("map");

      const locations = [
          {
            lat: -25.361,
            lng: 131.041,
          },
          {
            lat: -25.367,
            lng: 131.046,
          },
          {
            lat: -25.363,
            lng: 131.036,
          },
        ]

      const newMap = await GoogleMap.create({
        id: "my-map", // Unique identifier for this map instance
        element: mapRef, // reference to the capacitor-google-map element
        apiKey: "AIzaSyDNTB4niPc8g6uZVTcTzDMzBKi-Vy_HciY", // Your Google Maps API Key
        config: {
          center: {
            // The initial position to be rendered by the map
            lat: -25.363,
            lng: 131.044,
          },
          zoom: 15, // The initial zoom level to be rendered by the map
        },
      });

      for (let index = 0; index < locations.length; index++) {
        await newMap.addMarker({
        coordinate: {
          lat: locations[index].lat,
          lng: locations[index].lng,
        },
        tittle: "you are here bitch!",
      });

      }

      await newMap.setOnMarkerClickListener(() => {
        alert("hi bitch");
      });

      await newMap.addMarker({
        coordinate: {
          lat: -25.363,
          lng: 131.044,
        },
        tittle: "you are here bitch!",
      });
    };
    onMounted(() => {
      if (isSuported) {
        watcher = navigator.geolocation.getCurrentPosition(
          (position) => (currPos.value = position.coords)
        );
        console.log(watcher);
        console.log(currPos.value);
        createMap();
      }
    });

    onUnmounted(() => {
      if (watcher) navigator.geolocation.clearWatch(watcher);
    });
    return {
      coords,
    };
  },
};
</script>

<style>
capacitor-google-map {
  width: 100%;
  height: 80vh;
}
</style>
