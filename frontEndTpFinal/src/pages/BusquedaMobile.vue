<template>
    <capacitor-google-map id="map"></capacitor-google-map>
    <button @click="createMap">Create Map</button>
</template>
  
<script>
import { GoogleMap } from '@capacitor/google-maps';

export default {
    setup() {
        return {
            createMap: async () => {
                const mapRef = document.getElementById('map');

                const newMap = await GoogleMap.create({
                    id: 'my-map',
                    element: mapRef,
                    apiKey: 'YOUR_API_KEY_HERE',
                    config: {
                        center: {
                            // The initial position to be rendered by the map
                            lat: 33.6,
                            lng: -117.9,
                        },
                        zoom: 8, // The initial zoom level to be rendered by the map
                    },
                });
            }
        }
    }
}
</script>

<style>
capacitor-google-map {
    display: inline-block;
    width: 275px;
    height: 400px;
}
</style>