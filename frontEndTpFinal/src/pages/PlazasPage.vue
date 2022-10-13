<!-- eslint-disable linebreak-style -->
<template>
  <div class="q-pa-md">
    <div class="row q-gutter-x-sm q-gutter-y-lg">
      <!-- <q-intersection v-for="index in 5" :key="index" class="example-item">
        <q-card class="card q-ma-sm q-pa-sm" style="height: 250px">
          <div class="text-h6">Plaza #{{ index }}</div>
          <div class="text-subtitle2">00:00:00</div>
        </q-card>
      </q-intersection>-->
      <CardPlaza></CardPlaza>
    </div>
  </div>
</template>

<script>
import CardPlaza from '../components/CardPlaza.vue';

export default {
  components: {
    CardPlaza,
  },
};
</script>
