<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page>
    <section class="q-mx-lg">
      <div class="row justify-center items-center">
        <div class="col-12 col-md-5">
          <p class="text-h3">Benvenuti a Chihilo</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <q-btn push color="purple" size="lg" class="q-px-lg q-py-xs q-mr-md q-mb-md border-radius-inherit"
            label="Registrarse" no-caps />
          <q-btn push color="purple" size="lg" class="q-px-lg q-py-xs q-mb-md border-radius-inherit" label="Registrarse"
            no-caps />
        </div>
        <div class="col-12 col-md-5">
          <div class="row justify-center">
            <img src="../assets/car-reserva2.jpg" alt="car reserva" style="height: auto; min-width: 200px;">
          </div>
        </div>
      </div>
    </section>
  </q-page>
  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="accent" />
  </q-page-scroller>
</template>
