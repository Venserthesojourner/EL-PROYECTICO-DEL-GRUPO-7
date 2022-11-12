<!-- eslint-disable max-len -->
<template>
  <section id="bienvenida" class="q-mt-sm q-mb-xl">
    <div class="row justify-center items-center">
      <div class="col-12 col-sm-8 col-md-5 text-center q-px-md">
        <p class="text-h3">Bienvenidos</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="q-mt-lg gt-xs">
          <q-btn to="register" push color="accent" size="lg"
            class="q-px-lg q-py-xs q-mr-md q-mb-md border-radius-inherit" label="Registrarse" no-caps />
          <q-btn to="mobile" push color="primary" size="lg" target="blank"
            class="q-px-lg q-py-xs q-mb-md border-radius-inherit" no-caps>
            <q-icon left size="1.3em" name="fa-brands fa-google-play" />
            <div>Google Play</div>
          </q-btn>
        </div>
        <div class="q-mt-lg lt-sm">
          <q-btn to="register" push color="accent" size="lg" class="q-mb-md full-width border-radius-inherit"
            label="Registrarse" no-caps />
          <q-btn to="mobile" push color="primary" size="lg" target="blank" class="full-width border-radius-inherit"
            no-caps>
            <q-icon left size="1.3em" name="fa-brands fa-google-play" />
            <div>Google Play</div>
          </q-btn>
        </div>
      </div>
      <!-- <div class="col-12 col-md-5">
        <div class="row justify-center">
          <img src="../assets/car-reserva1.png" alt="car reserva" style="height: auto; min-width: 200px;">
        </div>
      </div> -->
    </div>
  </section>
</template>

<style lang="sass" scoped>
@media(max-width: 600px)
    .text-h3
        font-size: 2rem
</style>
