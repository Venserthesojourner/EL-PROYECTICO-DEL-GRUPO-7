<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-x-sm q-gutter-y-lg">
      <q-intersection v-for="index in 10" :key="index" class="example-item">
        <q-card class="card q-ma-sm q-pa-sm" style="height: 250px">
          <div class="text-h6">Plaza #{{ index }}</div>
          <div class="text-subtitle2">00:00:00</div>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.card
border: 1px solid $primary
.example-item
height: 250px
width: 200px
</style>
